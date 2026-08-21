import { Link } from "react-router-dom";
import "./home.css";

const featuredPlants = [
  {
    id: 1,
    name: "Snake Plant",
    type: "Low Maintenance",
    price: "₹299",
    image: "🌿",
  },
  {
    id: 2,
    name: "Money Plant",
    type: "Easy Care",
    price: "₹249",
    image: "🪴",
  },
  {
    id: 3,
    name: "Jade Plant",
    type: "Succulent",
    price: "₹349",
    image: "🌱",
  },
  {
    id: 4,
    name: "Peace Lily",
    type: "Indoor Plant",
    price: "₹399",
    image: "🌸",
  },
];

const categories = [
  { name: "Desk Plants", icon: "🌱", text: "Perfect for your workspace" },
  { name: "Indoor Plants", icon: "🪴", text: "Bring nature indoors" },
  { name: "Succulents", icon: "🌵", text: "Small & easy to care" },
  { name: "Office Plants", icon: "🌿", text: "Green up your office" },
];

function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const filteredPlants = featuredPlants.filter((plant) =>
    plant.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}

<nav className="navbar">

  <Link to="/home" className="nav-logo">
    <span>🌿</span>
    PLANTIVA
  </Link>

  <div className="nav-links">
    <Link to="/home" className="active">Home</Link>
    <Link to="/shop">Shop</Link>
    <Link to="/categories">Categories</Link>
    <Link to="/plant-care">Plant Care</Link>
    <Link to="/about">About</Link>
  </div>

  <div className="nav-actions">

    {/* SEARCH */}

    <button
      className={`nav-icon ${searchOpen ? "nav-active" : ""}`}
      title="Search"
      onClick={() => setSearchOpen(!searchOpen)}
    >
      🔍
    </button>

    {/* WISHLIST */}

    <button
      className={`nav-icon wishlist-nav ${
        wishlist.length > 0 ? "has-wishlist" : ""
      }`}
      title="Wishlist"
      onClick={() => {
        if (wishlist.length > 0) {
          alert(`You have ${wishlist.length} plant(s) in your wishlist 💚`);
        } else {
          alert("Your wishlist is empty 🌱");
        }
      }}
    >
      {wishlist.length > 0 ? "♥" : "♡"}

      {wishlist.length > 0 && (
        <span className="wishlist-count">
          {wishlist.length}
        </span>
      )}
    </button>

    {/* CART */}

    <Link to="/cart" className="nav-icon cart-icon">
      🛒
      <span>0</span>
    </Link>

    {/* PROFILE */}

    <button className="profile-button">
      👤
    </button>

  </div>

</nav>

{/* ================= SEARCH BAR ================= */}

{searchOpen && (
  <div className="search-container">

    <div className="search-box">

      <span>🔍</span>

      <input
        type="text"
        placeholder="Search for plants..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        autoFocus
      />

      <button
        onClick={() => {
          setSearchText("");
          setSearchOpen(false);
        }}
      >
        ✕
      </button>

    </div>

    {searchText && (
      <div className="search-results">

        {filteredPlants.length > 0 ? (

          filteredPlants.map((plant) => (

            <Link
              to={`/product/${plant.id}`}
              className="search-result"
              key={plant.id}
            >

              <span className="search-result-image">
                {plant.image}
              </span>

              <div>
                <strong>{plant.name}</strong>
                <small>{plant.price}</small>
              </div>

              <span>→</span>

            </Link>

          ))

        ) : (

          <p className="no-results">
            No plants found 🌱
          </p>

        )}

      </div>
    )}

  </div>
)}

      {/* ================= HERO ================= */}

      <section className="hero-section">

        <div className="hero-text">

          <p className="hero-label">
            BRING NATURE CLOSER
          </p>

          <h1>
            Grow Your
            <br />
            <span>Little Green Space.</span>
          </h1>

          <p className="hero-description">
            Discover beautiful, easy-to-care plants made for
            your home, office, desk and every little corner
            that deserves a touch of green.
          </p>

          <div className="hero-buttons">

            <Link to="/shop" className="primary-button">
              Shop Plants
              <span>→</span>
            </Link>

            <Link to="/categories" className="secondary-button">
              Explore Collections
            </Link>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-circle"></div>

          <div className="hero-plant">
            🌿
          </div>

          <div className="floating-card">
            <span>🌱</span>
            <div>
              <strong>Easy to Grow</strong>
              <small>Perfect for beginners</small>
            </div>
          </div>

        </div>

      </section>

      {/* ================= CATEGORIES ================= */}

      <section className="categories-section">

        <div className="section-heading">
          <div>
            <p className="section-label">FIND YOUR GREEN</p>
            <h2>Shop by Space</h2>
          </div>

          <Link to="/categories" className="view-all">
            View all →
          </Link>
        </div>

        <div className="category-grid">

          {categories.map((category) => (
            <div className="category-card" key={category.name}>

              <div className="category-icon">
                {category.icon}
              </div>

              <div>
                <h3>{category.name}</h3>
                <p>{category.text}</p>
              </div>

              <span className="category-arrow">↗</span>

            </div>
          ))}

        </div>

      </section>

      {/* ================= FEATURED PLANTS ================= */}

      <section className="featured-section">

        <div className="section-heading">

          <div>
            <p className="section-label">OUR FAVORITES</p>
            <h2>Featured Plants</h2>
          </div>

          <Link to="/shop" className="view-all">
            Shop all →
          </Link>

        </div>

        <div className="plant-grid">

          {filteredPlants.map((plant) => (
            <div className="plant-card" key={plant.id}>

              <div className="plant-image">

                <button
  className={`wishlist-button ${
    wishlist.includes(plant.id) ? "wishlisted" : ""
  }`}
  onClick={() => toggleWishlist(plant.id)}
>
  {wishlist.includes(plant.id) ? "♥" : "♡"}
</button>

                <span className="plant-emoji">
                  {plant.image}
                </span>

              </div>

              <div className="plant-info">

                <p>{plant.type}</p>

                <h3>{plant.name}</h3>

                <div className="plant-bottom">

                  <strong>{plant.price}</strong>

                  <button className="add-button">
                    +
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* ================= WHY PLANTIVA ================= */}

      <section className="why-section">

        <div className="why-heading">

          <p className="section-label">WHY PLANTIVA</p>

          <h2>
            More than plants.
            <br />
            <span>A little happiness.</span>
          </h2>

          <p>
            We make it simple to bring greenery into your
            everyday life, even when space is small.
          </p>

        </div>

        <div className="benefits">

          <div className="benefit">
            <span>🌱</span>
            <h3>Healthy Plants</h3>
            <p>
              Carefully selected plants ready to grow
              in your space.
            </p>
          </div>

          <div className="benefit">
            <span>💧</span>
            <h3>Easy Care</h3>
            <p>
              Beginner-friendly plants with simple
              care requirements.
            </p>
          </div>

          <div className="benefit">
            <span>📦</span>
            <h3>Safe Delivery</h3>
            <p>
              Packed carefully so your little plant
              arrives safely.
            </p>
          </div>

          <div className="benefit">
            <span>💚</span>
            <h3>Made With Care</h3>
            <p>
              Every order is prepared with love
              for your green space.
            </p>
          </div>

        </div>

      </section>

      {/* ================= PLANT CARE ================= */}

      <section className="care-section">

        <div className="care-content">

          <p className="section-label">
            NEW TO PLANTS?
          </p>

          <h2>
            We'll help you
            <br />
            <span>grow with confidence.</span>
          </h2>

          <p>
            Not sure which plant is right for you?
            Learn simple plant-care tips and find
            the perfect green companion for your space.
          </p>

          <Link to="/plant-care" className="primary-button">
            Explore Plant Care
            <span>→</span>
          </Link>

        </div>

        <div className="care-visual">
          <div className="care-plant">🪴</div>
        </div>

      </section>

      {/* ================= NEWSLETTER ================= */}

      <section className="newsletter-section">

        <div>
          <p className="section-label">STAY IN THE LOOP</p>

          <h2>
            A little green inspiration,
            <br />
            straight to your inbox.
          </h2>
        </div>

        <div className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button>
            Subscribe →
          </button>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-brand">

          <Link to="/home" className="footer-logo">
            🌿 PLANTIVA
          </Link>

          <p>
            Grow Your Little Green Space.
          </p>

        </div>

        <div className="footer-column">
          <h4>Shop</h4>
          <Link to="/shop">All Plants</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/shop">Best Sellers</Link>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <Link to="/plant-care">Plant Care</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/shipping">Shipping</Link>
        </div>

        <div className="footer-column">
          <h4>Plantiva</h4>
          <Link to="/about">About Us</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>

      </footer>

      <div className="footer-bottom">
        <p>© 2026 Plantiva. Grow something beautiful.</p>
        <p>Made with 🌱 for plant lovers.</p>
      </div>

    </div>
  );
}

export default Home;