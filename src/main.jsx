import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import "./style.css";

const phone = "330-990-3956";
const releaseDate = new Date("2027-01-01T00:00:00");

const products = [
  {
    slug: "sports-set",
    name: "Élan Sculpt Set",
    regularPrice: "$89.99",
    salePrice: "$64.99",
    releaseDate: "Releases January 1, 2027",
    description: "Sports bra, high-waist leggings, and lightweight zip jacket.",
    details:
      "A sculpting activewear set designed for movement, comfort, errands, travel, and elevated everyday wear.",
    squareLink: "PASTE_ELAN_SQUARE_LINK_HERE",
    colors: [
      {
        name: "Cream",
        images: [
          "/images/elan-cream-1.png",
          "/images/elan-cream-2.png",
          "/images/elan-cream-3.png",
        ],
      },
      {
        name: "Black",
        images: [
          "/images/elan-black-1.png",
          "/images/elan-black-2.png",
          "/images/elan-black-3.png",
        ],
      },
      {
        name: "Chocolate",
        images: [
          "/images/elan-chocolate-1.png",
          "/images/elan-chocolate-2.png",
          "/images/elan-chocolate-3.png",
        ],
      },
    ],
  },
{
  slug: "hoodie-set",
  name: "Serein Lounge Set",
  regularPrice: "$74.99",
  salePrice: "$54.99",
  releaseDate: "Releases January 1, 2027",
  description: "Cropped hoodie and high-waist joggers made for elevated comfort.",
  details:
    "A soft lounge set made for relaxed days, airport outfits, coffee runs, and casual luxury.",
  squareLink: "PASTE_SEREIN_SQUARE_LINK_HERE",

  colors: [
    {
      name: "Cream",
      images: [
        "/images/serein-cream-1.png",
        "/images/serein-cream-2.png",
        "/images/serein-cream-3.png",
      ],
    },
    {
      name: "Black",
      images: [
        "/images/serein-black-1.png",
        "/images/serein-black-2.png",
        "/images/serein-black-3.png",
      ],
    },
    {
      name: "Chocolate",
      images: [
        "/images/serein-chocolate-1.png",
        "/images/serein-chocolate-2.png",
        "/images/serein-chocolate-3.png",
      ],
    },
  ],
},
  {
    slug: "leather-set",
    name: "Noir Luxe Leather Set",
    regularPrice: "$119.99",
    salePrice: "$89.99",
    releaseDate: "Releases January 1, 2027",
    description: "Statement faux leather set with a sleek luxury finish.",
    details:
      "A bold street-luxe look designed for statement styling, confidence, and elevated nights out.",
    squareLink: "PASTE_NOIR_SQUARE_LINK_HERE",
    colors: [
      {
        name: "Black",
        images: [
          "/images/noir-black-1.png",
          "/images/noir-black-2.png",
          "/images/noir-black-3.png",
        ],
      },
      {
           name: "Cream",
      images: [
        "/images/Noir-cream-1.png",
        "/images/Noir-cream-2.png",
        "/images/Noir-cream-3.png",
      ],
    },
    {
        name: "Chocolate",
        images: [
          "/images/noir-chocolate-1.png",
          "/images/noir-chocolate-2.png",
          "/images/noir-chocolate-3.png",
        ],
      },
    ],
  },
];

function App() {
  const path = window.location.pathname;

  const productSlug = path.replace("/products/", "");
  const product = products.find(
    (item) => item.slug === productSlug
  );

  if (path.startsWith("/products/") && product) {
    return <ProductPage item={product} />;
  }

  if (path === "/vip") {
    return <VipPage />;
  }

  if (path === "/custom") {
    return <CustomPage />;
  }

  if (path === "/about") {
    return <AboutPage />;
  }

  if (path === "/future-drops") {
    return <FutureDropsPage />;
  }

  if (path === "/lookbook") {
    return <LookbookPage />;
  }
  
  if (path === "/custom") {
  return <CustomPage />;
}
  return <HomePage />;
}
function LuxuryNav() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav className={scrolled ? "nav navScrolled" : "nav"}>
        <a
          href="/"
          className="brandLink"
          onClick={closeMenu}
        >
          <h1 className="brand">
            RICHE ET BEAU
          </h1>

          <p className="tag">
            Luxe Confidence Beauty
          </p>
        </a>

        <div className="desktopNavLinks">
          <a href="/#collection">
            Shop
          </a>

          <a href="/#collections">
            Collections
          </a>

          <a href="/#vip">
            VIP Club
          </a>

          <a href="/#custom">
            Custom Requests
          </a>

          <a href="/#about">
            About
          </a>

          <a href="/#contact">
            Contact
          </a>
        </div>

        <button
          className={
            menuOpen
              ? "menuButton menuOpen"
              : "menuButton"
          }
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen((current) => !current)
          }
        >
          <span></span>
          <span></span>
        </button>
      </nav>

      <div
        className={
          menuOpen
            ? "mobileMenu mobileMenuOpen"
            : "mobileMenu"
        }
      >
        <div className="mobileMenuInner">
          <p className="mobileMenuLabel">
            Explore Riche Et Beau
          </p>

          <a
            href="/#collection"
            onClick={closeMenu}
          >
            <span>01</span>
            Shop
          </a>

          <a
            href="/#collections"
            onClick={closeMenu}
          >
            <span>02</span>
            Collections
          </a>

          <a
            href="/#vip"
            onClick={closeMenu}
          >
            <span>03</span>
            VIP Club
          </a>

          <a
            href="/#custom"
            onClick={closeMenu}
          >
            <span>04</span>
            Custom Requests
          </a>

          <a
            href="/#about"
            onClick={closeMenu}
          >
            <span>05</span>
            About
          </a>

          <a
            href="/#contact"
            onClick={closeMenu}
          >
            <span>06</span>
            Contact
          </a>

          <div className="mobileMenuFooter">
            <p>Questions?</p>

            <a href={`tel:${phone}`}>
              {phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function Layout({ children }) {
  return (
    <div className="page">
     
      <LuxuryNav />

      {children}

     <footer className="footer luxuryFooter">
  <div className="footerTop">
    <div className="footerBrand">
      <h3>RICHE ET BEAU</h3>

      <p className="footerTagline">
        Luxury Athleisure For Modern Women
      </p>

      <p className="footerStatement">
        Elevated pieces designed for confidence, comfort, and effortless style.
      </p>

      <a className="footerPhone" href={`tel:${phone}`}>
        {phone}
      </a>
    </div>

    <div className="footerColumn">
      <p className="footerHeading">Shop</p>

      <a href="/#collection">The Première Collection</a>
      <a href="/products/sports-set">Élan Sculpt Set</a>
      <a href="/products/hoodie-set">Serein Lounge Set</a>
      <a href="/products/leather-set">Noir Luxe Leather Set</a>
    </div>

    <div className="footerColumn">
      <p className="footerHeading">Customer Care</p>

      <a href="/#contact">Contact</a>
      <a href="/#custom">Custom Requests</a>
      <a href="/#waitlist">VIP List</a>
      <a href="/#collection">Size Guide</a>
    </div>

    <div className="footerColumn">
      <p className="footerHeading">Company</p>

      <a href="/#about">About Riche Et Beau</a>
      <a href="/#vip">VIP Club</a>
      <a href="/#collections">Collections</a>
      <a href="/#waitlist">Future Drops</a>
    </div>
  </div>

  <div className="footerBottom">
    <p>
      © 2026 Riche Et Beau. All rights reserved.
    </p>

    <div className="footerBottomLinks">
      <span>Secure Square Checkout</span>
      <span>Founder’s Preorder</span>
      <span>Shipping January 1, 2027</span>
    </div>
  </div>
</footer>
    </div>
  );
}

function WaitlistForm() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch(
        "https://formspree.io/f/YOUR_WAITLIST_FORM_ID",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email,
            source: "Riche Et Beau VIP Waitlist",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form className="waitlistForm" onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit" disabled={status === "sending"}>
        {status === "sending"
          ? "Joining..."
          : "Join the Private List"}
      </button>

      {status === "success" && (
        <p className="formSuccess">
          Welcome to the Riche Et Beau private list.
        </p>
      )}

      {status === "error" && (
        <p className="formError">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}


function CustomRequestForm() {
  const [status, setStatus] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("sending");

    const form = e.currentTarget;

    const data = {
      name: form.name.value,
      email: form.email.value,
      requestType: form.requestType.value,
      requestDetails: form.requestDetails.value,
      message: form.message.value,
      source: "Riche Et Beau Custom Request",
    };

    try {
      const response = await fetch(
        "https://formspree.io/f/YOUR_CUSTOM_FORM_ID",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form className="requestForm" onSubmit={handleSubmit}>
      <div className="formHeading">
        <span>Request Form</span>
        <p>Future Drop Suggestions</p>
      </div>

      <div className="formRow">
        <input
          name="name"
          placeholder="Full name"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email address"
          required
        />
      </div>

      <select
        name="requestType"
        defaultValue=""
        required
      >
        <option value="" disabled>
          What would you like to request?
        </option>

        <option value="new-color">
          New Color
        </option>

        <option value="extended-sizing">
          Extended Sizing
        </option>

        <option value="new-style">
          New Style
        </option>

        <option value="restock">
          Restock Request
        </option>

        <option value="personalization">
          Personalization Request
        </option>
      </select>

      <input
        name="requestDetails"
        placeholder="Preferred color, size, or style"
      />

      <textarea
        name="message"
        rows="6"
        placeholder="Tell us what you would love to see from Riche Et Beau."
        required
      />

      <button
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending"
          ? "Sending..."
          : "Submit Request"}
      </button>

      {status === "success" && (
        <p className="formSuccess">
          Your request was received. Thank you for helping shape future drops.
        </p>
      )}

      {status === "error" && (
        <p className="formError">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

function VipPage() {
  return (
    <Layout>
      <section className="vipSection">
        <div className="vipEditorial">
          <div className="vipCopy">
            <p className="sectionLabel left">Riche Et Beau VIP</p>

            <h2>
              Access the brand before the rest of the world.
            </h2>

            <p>
              VIP members receive first access to future drops, private promotions,
              color voting, launch announcements, and limited releases.
            </p>

            <div className="vipBenefits">
              <div>
                <span>01</span>
                <strong>Early Access</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Private Offers</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Color Voting</strong>
              </div>

              <div>
                <span>04</span>
                <strong>Limited Drops</strong>
              </div>
            </div>

            <a className="primaryBtn" href="/#waitlist">
              Join the Private List
            </a>
          </div>

          <div className="vipVisual">
            <img
              src="/images/chocolate-set.png"
              alt="Riche Et Beau VIP"
            />

            <div className="vipImageLabel">
              <span>Private Access</span>
              <p>Riche Et Beau VIP</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function HomePage() {
  return (
    <Layout>
      <section className="hero">
        <div className="heroSlide heroCream"></div>
        <div className="heroSlide heroBlack"></div>
        <div className="heroSlide heroChocolate"></div>

        <motion.div
          className="heroContent"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">The Première Collection</p>

          <h2>The Première Collection.</h2>

          <p>
            Introducing the debut collection from Riche Et Beau, featuring the
            Élan Sculpt Set, Serein Lounge Set, and Noir Luxe Leather Set.
            Designed for women who want confidence, comfort, and luxury in
            every moment.
          </p>

          <div className="heroButtons">
            <a href="#collection" className="primaryBtn">
              Preorder Now
            </a>

            <a href="#waitlist" className="secondaryBtn">
              Join Waitlist
            </a>
          </div>
        </motion.div>
      </section>

function CustomPage() {
  return (
    <Layout>
      <section className="customSection customPageSection">
        <div className="customLayout">
          <div className="customIntro">
            <p className="sectionLabel left">
              The Design Conversation
            </p>

            <h2>
              Tell us what you want to wear next.
            </h2>

            <p>
              Future Riche Et Beau drops are influenced by the women wearing them.
              Request new colors, extended sizing, personalization, restocks, and
              future silhouettes.
            </p>

            <div className="customNotes">
              <span>New Colorways</span>
              <span>Extended Sizing</span>
              <span>Personalization</span>
              <span>Future Styles</span>
            </div>
          </div>

          <CustomRequestForm />
        </div>
      </section>
    </Layout>
  );
}
      
   <section className="preorderBanner">
  <div className="preorderInner">
    <div>
      <span className="preorderKicker">Founder’s Preorder</span>

      <h3>The Première Collection is now open.</h3>

      <p>
        Reserve your favorite set today. Shipping begins January 1, 2027.
      </p>
    </div>

    <a href="#collection" className="preorderLink">
      Shop The Collection
    </a>
  </div>
</section>
      
<Countdown />

<section id="collection" className="collectionSection">
  <div className="sectionHeading">
    <p className="sectionLabel">The Debut Collection</p>

    <h2 className="sectionTitle">The Première Collection</h2>

    <p className="sectionIntro">
      Three signature sets. Three elevated moods. Designed to move from
      everyday comfort to unforgettable moments.
    </p>
  </div>

  <div className="productGrid">
    {products.map((item) => (
      <ProductCard key={item.slug} item={item} />
    ))}
  </div>
</section>

<section className="trustBadges">
  <div className="trustBadge">
    <span className="trustNumber">01</span>
    <div>
      <strong>Secure Checkout</strong>
      <p>Protected payments through Square.</p>
    </div>
  </div>

  <div className="trustBadge">
    <span className="trustNumber">02</span>
    <div>
      <strong>Founder’s Preorder</strong>
      <p>Shipping begins January 1, 2027.</p>
    </div>
  </div>

  <div className="trustBadge">
    <span className="trustNumber">03</span>
    <div>
      <strong>Complimentary Shipping</strong>
      <p>Available on qualifying orders over $75.</p>
    </div>
  </div>

  <div className="trustBadge">
    <span className="trustNumber">04</span>
    <div>
      <strong>Fit Support</strong>
      <p>Use our size guide before placing your preorder.</p>
    </div>
  </div>
</section>

<section id="details" className="detailsSection">
  <div className="detailsIntro">
    <p className="sectionLabel left">The Riche Et Beau Standard</p>

    <h2>
      Soft power, sculpted comfort, and effortless luxury.
    </h2>

    <p>
      Every piece is designed to feel polished without sacrificing comfort.
      These are the sets you reach for when you want to look finished without
      feeling restricted.
    </p>
  </div>

  <div className="detailsGrid">
    <article className="detailCard">
      <span>01</span>
      <h3>Premium Feel</h3>
      <p>
        Soft-touch fabrics, refined finishes, and silhouettes designed to
        flatter.
      </p>
    </article>

    <article className="detailCard">
      <span>02</span>
      <h3>Everyday Versatility</h3>
      <p>
        Made for travel, errands, casual plans, lounging, and elevated
        everyday wear.
      </p>
    </article>

    <article className="detailCard">
      <span>03</span>
      <h3>Signature Color Story</h3>
      <p>
        Cream, Black, and Chocolate create a timeless neutral wardrobe.
      </p>
    </article>

    <article className="detailCard">
      <span>04</span>
      <h3>Limited First Release</h3>
      <p>
        Preorders are paid today and begin shipping January 1, 2027.
      </p>
    </article>
  </div>
</section>

<Reviews />

<FutureDrops />

<section id="collections" className="brandSection">
  <div className="sectionHeading">
    <p className="sectionLabel">Signature Sets</p>

    <h2 className="sectionTitle">
      Designed in drops. Released with intention.
    </h2>

    <p className="sectionIntro">
      Each collection carries its own energy while remaining unmistakably
      Riche Et Beau.
    </p>
  </div>

  <div className="collectionStoryGrid">
    <article className="collectionStoryCard">
      <span>Movement</span>
      <h3>Élan Sculpt Set</h3>
      <p>
        Sculpting activewear designed for training, travel, errands, and
        confident everyday movement.
      </p>
      <a href="/products/sports-set">Discover Élan</a>
    </article>

    <article className="collectionStoryCard">
      <span>Ease</span>
      <h3>Serein Lounge Set</h3>
      <p>
        A refined three-piece lounge set created for soft structure and
        elevated comfort.
      </p>
      <a href="/products/hoodie-set">Discover Serein</a>
    </article>

    <article className="collectionStoryCard">
      <span>Statement</span>
      <h3>Noir Luxe Leather Set</h3>
      <p>
        A bold faux-leather look made for nights out, statement styling, and
        unapologetic confidence.
      </p>
      <a href="/products/leather-set">Discover Noir</a>
    </article>
  </div>
</section>

<section className="homeVipTeaser">
  <p className="sectionLabel">Riche Et Beau VIP</p>

  <h2>Access the brand before the rest of the world.</h2>

  <p>
    Early access, private offers, color voting, and limited releases.
  </p>

  <a href="/vip" className="primaryBtn">
    Enter The Private Club
  </a>
</section>

<section id="custom" className="customSection">
  <div className="customLayout">
    <div className="customIntro">
      <p className="sectionLabel left">
        The Design Conversation
      </p>

      <h2>
        Tell us what you want to wear next.
      </h2>

      <p>
        Future Riche Et Beau drops are influenced by the women wearing them.
        Request new colors, extended sizing, personalization, restocks, and
        future silhouettes.
      </p>

      <div className="customNotes">
        <span>New Colorways</span>
        <span>Extended Sizing</span>
        <span>Personalization</span>
        <span>Future Styles</span>
      </div>
    </div>

    <CustomRequestForm />
  </div>
</section>
      
<section id="about" className="aboutSection">
  <div className="aboutEditorial">
    <div className="aboutVisual">
      <img
        src="/images/cream-set.png"
        alt="Riche Et Beau luxury athleisure"
      />
    </div>

    <div className="aboutContent">
      <p className="sectionLabel left">The House of Riche Et Beau</p>

      <h2>
        Rich in confidence. Beautiful in movement.
      </h2>

      <p className="aboutLead">
        Riche Et Beau means rich and beautiful.
      </p>

      <p>
        The brand was created around the idea that comfort and luxury do not
        have to compete. Every collection is designed to feel polished,
        wearable, feminine, and confident.
      </p>

      <p>
        From sculpted activewear to elevated lounge pieces and statement
        collections, Riche Et Beau is designed for the woman who wants her
        everyday wardrobe to feel intentional.
      </p>

      <blockquote>
        Luxury should not only be seen. It should be felt.
      </blockquote>
    </div>
  </div>
</section>

<Lookbook />

<section id="waitlist" className="waitlistSection">
  <div className="waitlistEditorial">
    <div className="waitlistCopy">
      <p className="sectionLabel left">
        The Private List
      </p>

      <h2>
        Be first to know what drops next.
      </h2>

      <p>
        Join the Riche Et Beau private list for launch announcements,
        early access, private offers, and future colorway voting.
      </p>
    </div>

    <WaitlistForm />

    <p className="phoneText">
      Questions? Text or call {phone}
    </p>
  </div>
</section>

<section id="contact" className="contactSection">
  <div className="contactEditorial">
    <div className="contactCopy">
      <p className="sectionLabel left">Customer Care</p>

      <h2>Questions before your preorder?</h2>

      <p>
        We can help with sizing, color selection, preorder timing,
        and general product questions.
      </p>

      <a className="contactPhone" href={`tel:${phone}`}>
        {phone}
      </a>
    </div>

    <div className="contactCard">
      <span>Riche Et Beau Support</span>

      <h3>We’re here to help.</h3>

      <p>
        Reach out before ordering and we’ll help you choose the best fit,
        color, and collection.
      </p>

      <a className="secondaryBtn" href={`tel:${phone}`}>
        Call Customer Care
      </a>
    </div>
  </div>
</section>
    </Layout>
  );
}

function ProductCard({ item }) {
  const [selectedColor, setSelectedColor] = React.useState(item.colors[0]);
  const [activeImage, setActiveImage] = React.useState(item.colors[0].images[0]);
  const [selectedSize, setSelectedSize] = React.useState("");

  function chooseColor(color) {
    setSelectedColor(color);
    setActiveImage(color.images[0]);
  }

async function handlePreorder() {
  if (!selectedSize) {
    alert("Please choose a size before preorder.");
    return;
  }

  try {
    const response = await fetch("/api/create-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: item.name,
        color: selectedColor.name,
        size: selectedSize,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Checkout error:", data);
      alert("We couldn't start checkout. Please try again.");
      return;
    }

    if (!data.checkoutUrl) {
      alert("Checkout link was not created. Please try again.");
      return;
    }

    window.location.href = data.checkoutUrl;
  } catch (error) {
    console.error("Checkout request failed:", error);
    alert("We couldn't connect to checkout. Please try again.");
  }
}
  return (
    <motion.div
      className="productCard"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.25 }}
    >
      <div className="imageWrap">
        <img src={activeImage} alt={`${item.name} ${selectedColor.name}`} />
        <span className="saleTag">Preorder</span>
      </div>

      <div className="thumbRow">
        {selectedColor.images.map((image) => (
          <button
            key={image}
            className={activeImage === image ? "activeThumb" : ""}
            onClick={() => setActiveImage(image)}
            type="button"
          >
            <img src={image} alt="Product thumbnail" />
          </button>
        ))}
      </div>

      <div className="productInfo">
        <p className="colorName">{selectedColor.name}</p>
        <h3>{item.name}</h3>
        <p>{item.description}</p>

        <p className="releaseDate">{item.releaseDate}</p>

        <div className="priceRow">
          <span>{item.regularPrice}</span>
          <strong>{item.salePrice}</strong>
        </div>

        <p className="optionLabel">Choose Color</p>

        <div className="colorChoiceRow">
          {item.colors.map((color) => (
            <button
              key={color.name}
              type="button"
              className={
                selectedColor.name === color.name
                  ? "colorChoice activeColor"
                  : "colorChoice"
              }
              onClick={() => chooseColor(color)}
            >
              {color.name}
            </button>
          ))}
        </div>

        <p className="optionLabel">Choose Size</p>

        <div className="sizeRow">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              type="button"
              className={selectedSize === size ? "activeSize" : ""}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <button className="cartBtn" onClick={handlePreorder}>
         Secure My Preorder
        </button>

        <a className="viewProduct" href={`/products/${item.slug}`}>
          View Full Product Page
        </a>

        <p className="preorderNote">
          Preorders are paid today. Orders begin shipping January 1, 2027.
        </p>
      </div>
    </motion.div>
  );
}

function ProductPage({ item }) {
  const [selectedColor, setSelectedColor] = React.useState(item.colors[0]);
  const [activeImage, setActiveImage] = React.useState(
    item.colors[0].images[0]
  );
  const [selectedSize, setSelectedSize] = React.useState("");
  const [showSizeGuide, setShowSizeGuide] = React.useState(false);
  const [activeDetail, setActiveDetail] = React.useState("details");

  function chooseColor(color) {
    setSelectedColor(color);
    setActiveImage(color.images[0]);
  }

 async function handlePreorder() {
  if (!selectedSize) {
    alert("Please choose a size before preorder.");
    return;
  }

  const confirmed = window.confirm(
    `Confirm your preorder:

${item.name}
Color: ${selectedColor.name}
Size: ${selectedSize}
Price: ${item.salePrice}

Shipping begins January 1, 2027.

Continue to secure checkout?`
  );

  if (!confirmed) {
    return;
  }

  try {
    const response = await fetch("/api/create-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: item.name,
        color: selectedColor.name,
        size: selectedSize,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Checkout error:", data);
      alert("We couldn't start checkout. Please try again.");
      return;
    }

    if (!data.checkoutUrl) {
      alert("Checkout link was not created. Please try again.");
      return;
    }

    window.location.href = data.checkoutUrl;
  } catch (error) {
    console.error("Checkout request failed:", error);
    alert("We couldn't connect to checkout. Please try again.");
  }
}

return (
  <Layout>
    <section className="luxuryProductPage">

      <div className="luxuryProductGallery">
        <div className="mainImageFrame">
          <img
            className="luxuryMainImage"
            src={activeImage}
            alt={`${item.name} in ${selectedColor.name}`}
          />

          <span className="productPageBadge">
            Founder’s Preorder
          </span>
        </div>

        <div className="luxuryThumbnailRow">
          {selectedColor.images.map((image, index) => (
            <button
              key={image}
              type="button"
              aria-label={`View product image ${index + 1}`}
              className={
                activeImage === image
                  ? "luxuryThumbnail activeLuxuryThumbnail"
                  : "luxuryThumbnail"
              }
              onClick={() => setActiveImage(image)}
            >
              <img
                src={image}
                alt={`${item.name} ${selectedColor.name} view ${index + 1}`}
              />
            </button>
          ))}
        </div>
      </div>

      <aside className="luxuryProductPanel">

        <p className="productEyebrow">
          The Première Collection
        </p>

        <h1>{item.name}</h1>

        <p className="selectedColorLabel">
          Color: <strong>{selectedColor.name}</strong>
        </p>

        <div className="luxuryPriceRow">
          <span>{item.regularPrice}</span>
          <strong>{item.salePrice}</strong>
        </div>

        <p className="luxuryProductDescription">
          {item.details}
        </p>

        <div className="releaseMessage">
          <span>Preorder</span>

          <div>
            <strong>Shipping January 1, 2027</strong>
            <p>
              Payment is collected when your preorder is placed.
            </p>
          </div>
        </div>

        <div className="productOptionSection">
          <div className="optionHeading">
            <p>Choose Color</p>
            <span>{selectedColor.name}</span>
          </div>

          <div className="luxuryColorOptions">
            {item.colors.map((color) => (
              <button
                key={color.name}
                type="button"
                className={
                  selectedColor.name === color.name
                    ? "luxuryColorButton activeLuxuryColor"
                    : "luxuryColorButton"
                }
                onClick={() => chooseColor(color)}
              >
                <span
                  className={`colorSwatch swatch${color.name}`}
                ></span>

                {color.name}
              </button>
            ))}
          </div>
        </div>

        <div className="productOptionSection">
          <div className="optionHeading">
            <p>Choose Size</p>

            <button
              className="inlineSizeGuide"
              type="button"
              onClick={() => setShowSizeGuide(true)}
            >
              Size Guide
            </button>
          </div>

          <div className="luxurySizeOptions">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                type="button"
                className={
                  selectedSize === size
                    ? "luxurySizeButton activeLuxurySize"
                    : "luxurySizeButton"
                }
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          className="luxuryPreorderButton"
          type="button"
          onClick={handlePreorder}
        >
          Secure My Preorder
        </button>
<div className="checkoutNote">
  <span>Secure checkout powered by Square</span>
  <span>•</span>
  <span>Preorder ships January 1, 2027</span>
</div>
        
        <p className="selectionSummary">
          {selectedColor.name}
          {selectedSize
            ? ` • Size ${selectedSize}`
            : " • Select a size"}
        </p>

        <div className="productAssurances">
            <div>
              <span>◇</span>
              <p>
                <strong>Secure Checkout</strong>
                Protected payments through Square
              </p>
            </div>

            <div>
              <span>↗</span>
              <p>
                <strong>Free Shipping</strong>
                On qualifying orders over $75
              </p>
            </div>

            <div>
              <span>01</span>
              <p>
                <strong>Limited First Drop</strong>
                Founder’s preorder quantities are limited
              </p>
            </div>
          </div>

          <div className="productAccordion">
            <button
              type="button"
              onClick={() =>
                setActiveDetail(
                  activeDetail === "details" ? "" : "details"
                )
              }
            >
              <span>Product Details</span>
              <span>{activeDetail === "details" ? "−" : "+"}</span>
            </button>

            {activeDetail === "details" && (
              <div className="accordionContent">
                <p>{item.description}</p>
                <p>{item.details}</p>
              </div>
            )}

            <button
              type="button"
              onClick={() =>
                setActiveDetail(
                  activeDetail === "care" ? "" : "care"
                )
              }
            >
              <span>Fabric & Care</span>
              <span>{activeDetail === "care" ? "−" : "+"}</span>
            </button>

            {activeDetail === "care" && (
              <div className="accordionContent">
                <p>
                  Wash cold with similar colors. Use a gentle cycle.
                  Do not bleach. Lay flat or tumble dry on low.
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={() =>
                setActiveDetail(
                  activeDetail === "shipping" ? "" : "shipping"
                )
              }
            >
              <span>Preorder & Shipping</span>
              <span>{activeDetail === "shipping" ? "−" : "+"}</span>
            </button>

            {activeDetail === "shipping" && (
              <div className="accordionContent">
                <p>
                  Preorders are paid when placed. Orders are expected
                  to begin shipping January 1, 2027. Tracking details
                  will be sent when your order leaves our facility.
                </p>
              </div>
            )}
          </div>
        </aside>
      </section>

      <section className="completeLookSection">
        <p className="sectionLabel">The Riche Et Beau Standard</p>

        <h2>Luxury designed for real life.</h2>

        <div className="completeLookGrid">
          <article>
            <span>01</span>
            <h3>Soft Structure</h3>
            <p>
              Comfortable fabrics shaped into polished silhouettes.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Signature Neutrals</h3>
            <p>
              Timeless Cream, Black, and Chocolate colorways.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Limited Release</h3>
            <p>
              A carefully planned first drop created with intention.
            </p>
          </article>
        </div>
           </section>

     <RelatedProducts currentSlug={item.slug} />

<ProductFAQ />

{showSizeGuide && (
  <SizeGuide onClose={() => setShowSizeGuide(false)} />
)}

</Layout>
);
}

function RelatedProducts({ currentSlug }) {
  const related = products.filter(
    (item) => item.slug !== currentSlug
  );

  return (
    <section className="relatedSection">
      <div className="relatedHeader">
        <p className="sectionLabel">
          Complete The Wardrobe
        </p>

        <h2>
          You May Also Like
        </h2>
      </div>

      <div className="relatedGrid">
        {related.map((item) => (
          <a
            key={item.slug}
            href={`/products/${item.slug}`}
            className="relatedCard"
          >
            <div className="relatedImage">
              <img
                src={item.colors[0].images[0]}
                alt={item.name}
              />
            </div>

            <div className="relatedInfo">
              <p>{item.name}</p>

              <strong>
                {item.salePrice}
              </strong>

              <span>
                View Collection
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ProductFAQ() {
  const [openFaq, setOpenFaq] = React.useState(null);

  const faqs = [
    {
      question: "When will my preorder ship?",
      answer:
        "The Première Collection is scheduled to begin shipping January 1, 2027. Tracking information will be sent once your order leaves our facility.",
    },
    {
      question: "When am I charged?",
      answer:
        "Payment is collected when you place your preorder so your item can be reserved from the first release.",
    },
    {
      question: "Can I change my size or color after ordering?",
      answer:
        "Contact Riche Et Beau as soon as possible. Changes may be available before your order enters fulfillment, depending on inventory.",
    },
    {
      question: "How should I choose my size?",
      answer:
        "Use the size guide on the product page before ordering. If you are between sizes or need help, contact customer care before placing your preorder.",
    },
    {
      question: "Will sold-out colors come back?",
      answer:
        "Future restocks and colorways will be based on demand, VIP voting, and availability.",
    },
  ];

  return (
    <section className="productFaqSection">
      <div className="faqHeader">
        <p className="sectionLabel">Need To Know</p>
        <h2>Preorder FAQ</h2>
        <p>
          Everything you need to know before reserving your Première Collection piece.
        </p>
      </div>

      <div className="faqList">
        {faqs.map((faq, index) => (
          <div
            className={
              openFaq === index
                ? "faqItem faqItemOpen"
                : "faqItem"
            }
            key={faq.question}
          >
            <button
              type="button"
              onClick={() =>
                setOpenFaq(openFaq === index ? null : index)
              }
            >
              <span>{faq.question}</span>
              <span className="faqPlus">
                {openFaq === index ? "−" : "+"}
              </span>
            </button>

            {openFaq === index && (
              <div className="faqAnswer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
function Countdown() {
  const [timeLeft, setTimeLeft] = React.useState(getTimeLeft());

  function getTimeLeft() {
    const difference = releaseDate - new Date();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdownSection">
      <p className="sectionLabel">Release Countdown</p>
      <h2>The Première Collection Arrives January 1, 2027</h2>

      <div className="countdownGrid">
        <div><strong>{timeLeft.days}</strong><span>Days</span></div>
        <div><strong>{timeLeft.hours}</strong><span>Hours</span></div>
        <div><strong>{timeLeft.minutes}</strong><span>Minutes</span></div>
        <div><strong>{timeLeft.seconds}</strong><span>Seconds</span></div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="reviewsSection">
      <div className="sectionHeading">
        <p className="sectionLabel">Early Buzz</p>

        <h2 className="sectionTitle">
          The mood is already set.
        </h2>

        <p className="sectionIntro">
          First impressions from women watching the Première Collection come to life.
        </p>
      </div>

      <div className="reviewGrid">
        <article className="reviewCard">
          <span className="reviewStars">★★★★★</span>

          <p className="reviewQuote">
            “The chocolate color feels rich, polished, and expensive without trying too hard.”
          </p>

          <span className="reviewMeta">Première Preview</span>
        </article>

        <article className="reviewCard featuredReview">
          <span className="reviewStars">★★★★★</span>

          <p className="reviewQuote">
            “This is exactly the kind of set I want for travel, errands, and still looking put together.”
          </p>

          <span className="reviewMeta">Première Preview</span>
        </article>

        <article className="reviewCard">
          <span className="reviewStars">★★★★★</span>

          <p className="reviewQuote">
            “The neutral palette makes every piece feel easy to wear but still special.”
          </p>

          <span className="reviewMeta">Première Preview</span>
        </article>
      </div>
    </section>
  );
}

function FutureDrops() {
  return (
    <section className="futureSection">
      <div className="futureHeader">
        <div>
          <p className="sectionLabel left">Future Drops</p>

          <h2>
            You help decide what comes next.
          </h2>
        </div>

        <p>
          Riche Et Beau future colorways will be shaped by customer interest,
          waitlist demand, and VIP voting.
        </p>
      </div>

      <div className="futureGrid">
        <article className="futureCard burgundyDrop">
          <span>01</span>
          <div>
            <p>Color Study</p>
            <h3>Burgundy</h3>
          </div>
          <button type="button">Vote For This</button>
        </article>

        <article className="futureCard oliveDrop">
          <span>02</span>
          <div>
            <p>Color Study</p>
            <h3>Olive</h3>
          </div>
          <button type="button">Vote For This</button>
        </article>

        <article className="futureCard mochaDrop">
          <span>03</span>
          <div>
            <p>Color Study</p>
            <h3>Mocha</h3>
          </div>
          <button type="button">Vote For This</button>
        </article>

        <article className="futureCard blueDrop">
          <span>04</span>
          <div>
            <p>Color Study</p>
            <h3>Midnight Blue</h3>
          </div>
          <button type="button">Vote For This</button>
        </article>
      </div>
    </section>
  );
}

function Lookbook() {
  return (
    <section className="lookbookSection">
      <div className="lookbookHeader">
        <div>
          <p className="sectionLabel left">The Lookbook</p>
          <h2>Styled in the world of Riche Et Beau.</h2>
        </div>

        <p>
          A closer look at the textures, silhouettes, and neutral tones
          defining the Première Collection.
        </p>
      </div>

      <div className="lookbookGrid editorialLookbook">
        <img src="/images/elan-cream-1.png" alt="Élan Sculpt Set in Cream" />
        <img src="/images/elan-black-1.png" alt="Élan Sculpt Set in Black" />
        <img src="/images/elan-chocolate-1.png" alt="Élan Sculpt Set in Chocolate" />
        <img src="/images/serein-cream-1.png" alt="Serein Lounge Set in Cream" />
        <img src="/images/serein-black-1.png" alt="Serein Lounge Set in Black" />
        <img src="/images/serein-chocolate-1.png" alt="Serein Lounge Set in Chocolate" />
      </div>
    </section>
  );
}

function SizeGuide({ onClose }) {
  return (
    <div className="sizeOverlay">
      <div className="sizeModal">
        <button className="closeBtn" onClick={onClose}>×</button>

        <h2>Size Guide</h2>

        <table>
          <thead>
            <tr>
              <th>Size</th>
              <th>US</th>
              <th>Bust</th>
              <th>Waist</th>
            </tr>
          </thead>

          <tbody>
            <tr><td>XS</td><td>0-2</td><td>30-32</td><td>24-26</td></tr>
            <tr><td>S</td><td>4-6</td><td>33-35</td><td>27-29</td></tr>
            <tr><td>M</td><td>8-10</td><td>36-38</td><td>30-32</td></tr>
            <tr><td>L</td><td>12-14</td><td>39-41</td><td>33-35</td></tr>
            <tr><td>XL</td><td>16-18</td><td>42-44</td><td>36-38</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
