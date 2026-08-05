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
    squareLink: "#",
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
    squareLink: "#",
    colors: [
      {
        name: "Cream",
        images: [
          "/images/serein-cream-1.png",
          "/images/hoodie-cream-2.png",
          "/images/hoodie-cream-3.png",
        ],
      },
      {
        name: "Black",
        images: [
          "/images/hoodie-black-1.png",
          "/images/hoodie-black-2.png",
          "/images/hoodie-black-3.png",
        ],
      },
      {
        name: "Chocolate",
        images: [
          "/images/hoodie-chocolate-1.png",
          "/images/hoodie-chocolate-2.png",
          "/images/hoodie-chocolate-3.png",
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
    squareLink: "#",
    colors: [
      {
        name: "Black",
        images: [
          "/images/leather-black-1.png",
          "/images/leather-black-2.png",
          "/images/leather-black-3.png",
        ],
      },
      {
        name: "Chocolate",
        images: [
          "/images/leather-chocolate-1.png",
          "/images/leather-chocolate-2.png",
          "/images/leather-chocolate-3.png",
        ],
      },
    ],
  },
];

function App() {
  const path = window.location.pathname;
  const productSlug = path.replace("/products/", "");
  const product = products.find((item) => item.slug === productSlug);

  if (path.startsWith("/products/") && product) {
    return <ProductPage item={product} />;
  }

  return <HomePage />;
}

function Layout({ children }) {
  return (
    <div className="page">
      <nav className="nav">
        <a href="/">
          <h1 className="brand">RICHE ET BEAU</h1>
          <p className="tag">Luxe Confidence Beauty</p>
        </a>

        <div className="navLinks">
          <a href="/#collection">Shop</a>
          <a href="/#collections">Collections</a>
          <a href="/#vip">VIP Club</a>
          <a href="/#custom">Custom Requests</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>

      {children}

      <footer className="footer luxuryFooter">
        <div>
          <h3>RICHE ET BEAU</h3>
          <p>Luxury Athleisure For Modern Women</p>
          <p>{phone}</p>
        </div>

        <div className="footerLinks">
          <a href="/#collection">Shop</a>
          <a href="/#vip">VIP Club</a>
          <a href="/#custom">Custom Requests</a>
          <a href="/#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <Layout>
    <section className="hero">
  <div className="heroSlide heroCream"></div>
  <div className="heroSlide heroBlack"></div>
  <div className="heroSlide heroChocolate"></div>

  <motion.div className="heroContent">
    ...
  </motion.div>
</section>
          className="heroContent"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">The Première Collection</p>

          <h2>The Première Collection.</h2>

          <p>
            Introducing the debut collection from Riche Et Beau, featuring the Élan Sculpt Set, Serein Lounge Set, and Noir Luxe Leather Set. Designed for women who want confidence, comfort, and luxury in every moment.
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

      <section className="preorderBanner">
        <p> The Première Collection is now available for preorder. Official launch begins January 1, 2027.</p>
      </section>

      <Countdown />

      <section id="collection" className="collectionSection">
        <p className="sectionLabel">Riche Et Beau Launch</p>

        <h2 className="sectionTitle">The Première Collection</h2>

        <div className="productGrid">
          {products.map((item) => (
            <ProductCard key={item.name} item={item} />
          ))}
        </div>
      </section>

      <section className="trustBadges">
        <div>✓ Secure Square Checkout</div>
        <div>✓ Founder's Preorder • Ships January 1, 2027</div>
        <div>✓ Free Shipping Over $75</div>
        <div>✓ Size Guide Available</div>
      </section>

      <section id="details" className="detailsSection">
        <div>
          <p className="sectionLabel left">Designed For The Woman Who Moves</p>
          <h2>Soft power, sculpted comfort, and luxe everyday style.</h2>
        </div>

        <div className="detailsGrid">
          <div>
            <h3>Premium Feel</h3>
            <p>Soft-touch fabrics and flattering silhouettes designed to feel elevated.</p>
          </div>

          <div>
            <h3>Everyday Wear</h3>
            <p>From errands to travel to casual days out, each set is made to move with you.</p>
          </div>

          <div>
            <h3>Signature Colors</h3>
            <p>Cream, Black, and Chocolate create a timeless luxury color story.</p>
          </div>

          <div>
            <h3>Preorder Release</h3>
            <p>Preorders are paid today. Orders begin shipping January 1, 2027.</p>
          </div>
        </div>
      </section>

      <Reviews />

      <FutureDrops />

      <section id="collections" className="brandSection">
        <p className="sectionLabel">Collections</p>
        <h2 className="sectionTitle">Designed in drops, released with intention.</h2>

        <div className="infoGrid">
          <div>
            <h3>Élan Sculpt Set</h3>
            <p>Signature sculpting activewear in Cream, Black, and Chocolate.</p>
          </div>

          <div>
            <h3>Serein Lounge Set</h3>
            <p>Cropped hoodie and joggers for luxury comfort days.</p>
          </div>

          <div>
            <h3>Noir Luxe Leather Set</h3>
            <p>A statement collection made for elevated street-luxe style.</p>
          </div>
        </div>
      </section>

      <section id="vip" className="vipSection">
        <p className="sectionLabel">VIP Club</p>

        <h2>Get early access before everyone else.</h2>

        <p>
          VIP members receive first access to preorder drops, private discounts,
          color voting, and exclusive future releases.
        </p>

        <a className="primaryBtn" href="#waitlist">
          Join VIP List
        </a>
      </section>

      <section id="custom" className="customSection">
        <p className="sectionLabel">Custom Requests</p>

        <h2 className="sectionTitle">Help shape future drops.</h2>

        <form className="requestForm">
          <input placeholder="Name" />
          <input type="email" placeholder="Email" />

          <select>
            <option>What would you like to request?</option>
            <option>New Color</option>
            <option>Plus Sizes</option>
            <option>New Style</option>
            <option>Restock Request</option>
            <option>Personalization Request</option>
          </select>

          <input placeholder="Color / Size / Style Request" />

          <textarea placeholder="Tell us what you want to see in a future drop." />

          <button type="submit">Submit Request</button>
        </form>
      </section>

      <section id="about" className="aboutSection">
        <p className="sectionLabel">About</p>

        <h2 className="sectionTitle">Riche Et Beau means rich and beautiful.</h2>

        <p>
          Riche Et Beau was created for women who want comfort, confidence,
          and luxury in the same look. Every drop is built around soft power,
          beautiful movement, and everyday elegance.
        </p>
      </section>

      <Lookbook />

      <section id="waitlist" className="waitlistSection">
        <p className="sectionLabel">VIP Launch List</p>

        <h2>Be First To Shop Riche Et Beau.</h2>

        <p>
          Join the VIP list for early access, launch discounts, and first pick
          of Cream, Black, and Chocolate.
        </p>

        <form className="waitlistForm">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Join Waitlist</button>
        </form>

        <p className="phoneText">Questions? Text or call {phone}</p>
      </section>

      <section id="contact" className="contactSection">
        <p className="sectionLabel">Contact</p>
        <h2>Questions before preorder?</h2>
        <p>Text or call {phone}</p>
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

  function handlePreorder() {
    if (!selectedSize) {
      alert("Please choose a size before preorder.");
      return;
    }

    alert(
      `Square checkout will be connected here for ${item.name} - ${selectedColor.name} - Size ${selectedSize}.`
    );
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
          Preorder With Square
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
  const [activeImage, setActiveImage] = React.useState(item.colors[0].images[0]);
  const [selectedSize, setSelectedSize] = React.useState("");
  const [showSizeGuide, setShowSizeGuide] = React.useState(false);

  function chooseColor(color) {
    setSelectedColor(color);
    setActiveImage(color.images[0]);
  }

  function handlePreorder() {
    if (!selectedSize) {
      alert("Please choose a size before preorder.");
      return;
    }

    alert(
      `Square checkout will be connected here for ${item.name} - ${selectedColor.name} - Size ${selectedSize}.`
    );
  }

  return (
    <Layout>
      <section className="productPage">
        <div className="productGallery">
          <img className="mainProductImage" src={activeImage} alt={item.name} />

          <div className="productThumbGrid">
            {selectedColor.images.map((image) => (
              <button
                key={image}
                onClick={() => setActiveImage(image)}
                type="button"
                className={activeImage === image ? "activeThumb" : ""}
              >
                <img src={image} alt="Product thumbnail" />
              </button>
            ))}
          </div>
        </div>

        <div className="productPanel">
          <p className="sectionLabel left">Preorder</p>
          <h1>{item.name}</h1>
          <p>{item.details}</p>

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

          <button
            className="sizeGuideBtn"
            type="button"
            onClick={() => setShowSizeGuide(true)}
          >
            View Size Guide
          </button>

          <button className="cartBtn" onClick={handlePreorder}>
            Preorder With Square
          </button>

          <div className="productTrust">
            <p>✓ Secure Square Checkout</p>
            <p>✓ Preorder paid today</p>
            <p>✓ Orders begin shipping January 1, 2027</p>
            <p>✓ Free shipping over $75</p>
          </div>
        </div>
      </section>

      {showSizeGuide && (
        <SizeGuide onClose={() => setShowSizeGuide(false)} />
      )}
    </Layout>
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
      <p className="sectionLabel">Early Buzz</p>
      <h2 className="sectionTitle">Made to feel expensive.</h2>

      <div className="reviewGrid">
        <div>
          <span>★★★★★</span>
          <p>“The colors feel so luxe. I already know the chocolate set is mine.”</p>
        </div>

        <div>
          <span>★★★★★</span>
          <p>“This looks like comfort, confidence, and rich-girl errands.”</p>
        </div>

        <div>
          <span>★★★★★</span>
          <p>“I love that the preorder drop feels exclusive.”</p>
        </div>
      </div>
    </section>
  );
}

function FutureDrops() {
  return (
    <section className="futureSection">
      <p className="sectionLabel">Future Drops</p>
      <h2 className="sectionTitle">Vote with your wishlist.</h2>

      <div className="futureGrid">
        <div>Burgundy</div>
        <div>Olive</div>
        <div>Mocha</div>
        <div>Midnight Blue</div>
      </div>
    </section>
  );
}

function Lookbook() {
  return (
    <section className="lookbookSection">
      <p className="sectionLabel">Lookbook</p>
      <h2 className="sectionTitle">#RicheEtBeau</h2>

      <div className="lookbookGrid">
        <img src="/images/elan-cream-1.png" alt="Lookbook" />
        <img src="/images/elan-black-1.png" alt="Lookbook" />
        <img src="/images/elan-chocolate-1.png" alt="Lookbook" />
        <img src="/images/leather-black-1.png" alt="Lookbook" />
        <img src="/images/leather-chocolate-1.png" alt="Lookbook" />
        <img src="/images/serein-cream-1.png" alt="Lookbook" />
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
