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

    <section className="preorderBanner">
  <span>Founder’s Preorder</span>

  <p>
    The Première Collection is now available for preorder.
    Shipping begins January 1, 2027.
  </p>

  <a href="#collection">Shop the collection</a>
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

<section id="vip" className="vipSection">
  <div className="vipContent">
    <p className="sectionLabel left">Riche Et Beau VIP</p>

    <h2>Be first in line for every drop.</h2>

    <p>
      VIP members receive early preorder access, private promotions, color
      voting opportunities, and first notice of limited releases.
    </p>

    <div className="vipBenefits">
      <span>Early Access</span>
      <span>Private Offers</span>
      <span>Color Voting</span>
      <span>Limited Releases</span>
    </div>

    <a className="primaryBtn" href="#waitlist">
      Join the VIP List
    </a>
  </div>
</section>

<section id="custom" className="customSection">
  <div className="customIntro">
    <p className="sectionLabel left">Custom Requests</p>

    <h2>Help shape what comes next.</h2>

    <p>
      Tell us which colors, sizes, styles, and personalization options you
      would love to see in a future Riche Et Beau drop.
    </p>
  </div>

  <form className="requestForm">
    <div className="formRow">
      <input name="name" placeholder="Full name" required />

      <input
        name="email"
        type="email"
        placeholder="Email address"
        required
      />
    </div>

    <select name="requestType" defaultValue="" required>
      <option value="" disabled>
        Select a request type
      </option>

      <option value="new-color">New Color</option>
      <option value="extended-sizing">Extended Sizing</option>
      <option value="new-style">New Style</option>
      <option value="restock">Restock Request</option>
      <option value="personalization">Personalization Request</option>
    </select>

    <input
      name="requestDetails"
      placeholder="Preferred color, size, or style"
    />

    <textarea
      name="message"
      rows="6"
      placeholder="Tell us what you would like to see in a future drop."
      required
    />

    <button type="submit">Submit Request</button>
  </form>
</section>

<section id="about" className="aboutSection">
  <div className="aboutContent">
    <p className="sectionLabel left">The Brand</p>

    <h2>Riche Et Beau means rich and beautiful.</h2>

    <p className="aboutLead">
      A celebration of confidence, comfort, and personal power.
    </p>

    <p>
      Riche Et Beau was created for women who want clothing that feels as
      elevated as it looks. Every drop is built around soft power, beautiful
      movement, rich neutral tones, and effortless everyday style.
    </p>

    <p>
      The goal is simple: create pieces that help women feel polished,
      comfortable, and unmistakably confident.
    </p>
  </div>

  <div className="aboutQuote">
    <p>
      “Luxury should not only be seen. It should be felt.”
    </p>
  </div>
</section>

<Lookbook />

<section id="waitlist" className="waitlistSection">
  <div className="waitlistContent">
    <p className="sectionLabel">The Private List</p>

    <h2>Be first to shop Riche Et Beau.</h2>

    <p>
      Join the VIP list for early access, launch announcements, private
      discounts, and first pick of Cream, Black, and Chocolate.
    </p>

    <form className="waitlistForm">
      <input
        name="email"
        type="email"
        placeholder="Enter your email address"
        required
      />

      <button type="submit">Join the VIP List</button>
    </form>

    <p className="phoneText">
      Questions? Text or call {phone}
    </p>
  </div>
</section>

<section id="contact" className="contactSection">
  <div className="contactContent">
    <p className="sectionLabel left">Contact</p>

    <h2>Questions before placing your preorder?</h2>

    <p>
      Our team is available to assist with sizing, color selection,
      preorder details, and general questions.
    </p>

    <a className="contactPhone" href={`tel:${phone}`}>
      {phone}
    </a>
  </div>

  <div className="contactCard">
    <span>Customer Care</span>
    <h3>We are here to help.</h3>
    <p>
      Reach out before ordering and we will help you choose the best set,
      color, and size.
    </p>

    <a className="secondaryBtn" href={`tel:${phone}`}>
      Call Riche Et Beau
    </a>
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

  function handlePreorder() {
    if (!selectedSize) {
      alert("Please choose a size before preorder.");
      return;
    }

    if (item.squareLink && item.squareLink !== "#") {
      window.location.href = item.squareLink;
      return;
    }

    alert(
      `Square checkout will be connected here for ${item.name} - ${selectedColor.name} - Size ${selectedSize}.`
    );
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
                  alt={`${item.name} view ${index + 1}`}
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
              <p>Payment is collected when your preorder is placed.</p>
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
            Preorder With Square
          </button>

          <p className="selectionSummary">
            {selectedColor.name}
            {selectedSize ? ` • Size ${selectedSize}` : " • Select a size"}
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
