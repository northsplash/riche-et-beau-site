export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { product, color, size } = req.body;

    if (!product || !color || !size) {
      return res.status(400).json({
        error: "Product, color, and size are required.",
      });
    }

    // Prices are controlled here on the server.
    // Never trust a price sent from the browser.
    const productPrices = {
      "Élan Sculpt Set": 6499,
      "Serein Lounge Set": 5499,
      "Noir Luxe Leather Set": 8999,
    };

    const amount = productPrices[product];

    if (!amount) {
      return res.status(400).json({
        error: "Invalid product.",
      });
    }

    const response = await fetch(
      "https://connect.squareup.com/v2/online-checkout/payment-links",
      {
        method: "POST",

        headers: {
          "Square-Version": "2026-07-15",
          Authorization: `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          idempotency_key: crypto.randomUUID(),

          quick_pay: {
            name: `${product} - ${color} - Size ${size}`,

            price_money: {
              amount: amount,
              currency: "USD",
            },

            location_id: process.env.SQUARE_LOCATION_ID,
          },

          checkout_options: {
            ask_for_shipping_address: true,
            allow_tipping: false,
          },

          payment_note:
            `Riche Et Beau Founder's Preorder | ${product} | ${color} | Size ${size}`,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Square error:", data);

      return res.status(response.status).json({
        error: "Square could not create checkout.",
        details: data.errors || data,
      });
    }

    return res.status(200).json({
      checkoutUrl: data.payment_link.url,
    });
  } catch (error) {
    console.error("Checkout error:", error);

    return res.status(500).json({
      error: "Unable to create checkout.",
    });
  }
}
