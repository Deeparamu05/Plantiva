import { useState } from "react";
import { useCart } from "./CartContext";
import { Link, useParams } from "react-router-dom";
import "./productDetails.css";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plant",
    price: 299,
    oldPrice: 399,
    rating: "4.8",
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2e50?auto=format&fit=crop&w=900&q=80",
    light: "Low Light",
    care: "Easy",
    water: "Once a week",
    description:
      "The Snake Plant is one of the easiest indoor plants to grow. It is perfect for homes, offices and bedrooms because it requires very little maintenance.",
  },
  {
    id: 2,
    name: "Money Plant",
    category: "Indoor Plant",
    price: 249,
    oldPrice: 329,
    rating: "4.7",
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=80",
    light: "Medium Light",
    care: "Easy",
    water: "Twice a week",
    description:
      "Money Plant is a beautiful and beginner-friendly plant that adds a fresh green touch to your home or workspace.",
  },
  {
    id: 3,
    name: "Jade Plant",
    category: "Succulent",
    price: 349,
    oldPrice: 449,
    rating: "4.9",
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=900&q=80",
    light: "Bright Light",
    care: "Easy",
    water: "Once a week",
    description:
      "Jade Plant is a compact succulent with thick green leaves. It is ideal for desks, windowsills and small spaces.",
  },
  {
    id: 4,
    name: "Peace Lily",
    category: "Indoor Plant",
    price: 399,
    oldPrice: 499,
    rating: "4.8",
    reviews: 112,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=900&q=80",
    light: "Low Light",
    care: "Moderate",
    water: "Twice a week",
    description:
      "Peace Lily is an elegant indoor plant with beautiful white flowers. It brings a calm and refreshing feel to your space.",
  },
];

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Plant not found 🌱</h2>
        <Link to="/shop">← Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="product-page">

      {/* NAVBAR */}

      <nav className="product-navbar">

        <Link to="/home" className="product-logo">
          <span>🌿</span>
          PLANTIVA
        </Link>

        <div className="product-nav-links">
          <Link to="/home">Home</Link>
          <Link to="/shop" className="active">
            Shop
          </Link>
          <Link to="/categories">Categories</Link>
          <Link to="/plant-care">Plant Care</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="product-nav-actions">

          <button>⌕</button>

          <button>♡</button>

          <Link to="/cart" className="product-cart">
            🛒
            <span>0</span>
          </Link>

          <button>👤</button>

        </div>

      </nav>

      {/* BREADCRUMB */}

      <div className="breadcrumb">
        <Link to="/home">Home</Link>
        <span>/</span>
        <Link to="/shop">Shop</Link>
        <span>/</span>
        <strong>{product.name}</strong>
      </div>

      {/* PRODUCT */}

      <main className="product-details">

        {/* IMAGE */}

        <div className="product-main-image">

          <button className="big-wishlist">
            ♡
          </button>

          <span className="big-sale">
            SALE
          </span>

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        {/* INFORMATION */}

        <div className="product-information">

          <p className="product-type">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <div className="rating-row">

            <span className="stars">
              ★★★★★
            </span>

            <span>
              {product.rating}
            </span>

            <span className="review-count">
              ({product.reviews} reviews)
            </span>

          </div>

          <div className="detail-price">

            <strong>
              ₹{product.price}
            </strong>

            <del>
              ₹{product.oldPrice}
            </del>

            <span>
              Save ₹{product.oldPrice - product.price}
            </span>

          </div>

          <p className="product-description">
            {product.description}
          </p>

          {/* PLANT FEATURES */}

          <div className="plant-features">

            <div>
              <span>☀️</span>
              <small>Light</small>
              <strong>{product.light}</strong>
            </div>

            <div>
              <span>🌱</span>
              <small>Care</small>
              <strong>{product.care}</strong>
            </div>

            <div>
              <span>💧</span>
              <small>Water</small>
              <strong>{product.water}</strong>
            </div>

          </div>

          {/* QUANTITY */}

          <div className="quantity-section">

            <p>Quantity</p>

            <div className="quantity-box">

              <button
                onClick={() =>
                  setQuantity(
                    Math.max(1, quantity - 1)
                  )
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
              >
                +
              </button>

            </div>

          </div>

          {/* BUTTONS */}

          <div className="product-buttons">

            <button
  className="add-to-cart"
  onClick={() => {
    addToCart(product, quantity);
    alert(`${product.name} added to cart! 🌱`);
  }}
>
  🛒 Add to Cart
</button>

            <button className="buy-now">
              Buy Now →
            </button>

          </div>

          {/* DELIVERY */}

          <div className="delivery-info">

            <div>
              🚚
              <div>
                <strong>Free Delivery</strong>
                <p>On orders above ₹499</p>
              </div>
            </div>

            <div>
              🌿
              <div>
                <strong>Healthy Plant Guarantee</strong>
                <p>Carefully packed for delivery</p>
              </div>
            </div>

          </div>

        </div>

      </main>

      {/* DESCRIPTION SECTION */}

      <section className="care-details">

        <div>
          <p className="section-label">
            PLANT CARE
          </p>

          <h2>
            Everything your
            <br />
            plant needs.
          </h2>
        </div>

        <div className="care-text">

          <p>
            Give your {product.name} the right
            environment and it will reward you
            with beautiful, healthy growth.
          </p>

          <div className="care-tips">

            <div>
              <strong>☀️ Light</strong>
              <p>{product.light}</p>
            </div>

            <div>
              <strong>💧 Water</strong>
              <p>{product.water}</p>
            </div>

            <div>
              <strong>🌡️ Temperature</strong>
              <p>18°C – 30°C</p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ProductDetails;