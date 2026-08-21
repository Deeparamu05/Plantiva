import { useState } from "react";
import { Link } from "react-router-dom";
import "./shop.css";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor",
    care: "Easy",
    light: "Low Light",
    price: 299,
    oldPrice: 399,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2e50?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Money Plant",
    category: "Indoor",
    care: "Easy",
    light: "Medium Light",
    price: 249,
    oldPrice: 329,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Jade Plant",
    category: "Succulents",
    care: "Easy",
    light: "Bright Light",
    price: 349,
    oldPrice: 449,
    image:
      "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Peace Lily",
    category: "Indoor",
    care: "Moderate",
    light: "Low Light",
    price: 399,
    oldPrice: 499,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    name: "Aloe Vera",
    category: "Succulents",
    care: "Easy",
    light: "Bright Light",
    price: 279,
    oldPrice: 349,
    image:
      "https://images.unsplash.com/photo-1596547609652-9cf5d8d3cf4f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    name: "ZZ Plant",
    category: "Office",
    care: "Easy",
    light: "Low Light",
    price: 449,
    oldPrice: 549,
    image:
      "https://images.unsplash.com/photo-1614594575924-a6c9f1d4a8d5?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 7,
    name: "Spider Plant",
    category: "Office",
    care: "Easy",
    light: "Medium Light",
    price: 299,
    oldPrice: 379,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 8,
    name: "Lucky Bamboo",
    category: "Desk",
    care: "Easy",
    light: "Low Light",
    price: 199,
    oldPrice: 249,
    image:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=700&q=80",
  },
];

const categories = [
  "All",
  "Indoor",
  "Office",
  "Desk",
  "Succulents",
];

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [care, setCare] = useState("All");
  const [sort, setSort] = useState("Featured");

  const filteredProducts = products
    .filter((product) => {
      const categoryMatch =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const careMatch =
        care === "All" || product.care === care;

      const searchMatch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return categoryMatch && careMatch && searchMatch;
    })
    .sort((a, b) => {
      if (sort === "Price: Low to High") {
        return a.price - b.price;
      }

      if (sort === "Price: High to Low") {
        return b.price - a.price;
      }

      return a.id - b.id;
    });

  return (
    <div className="shop-page">

      {/* NAVBAR */}
      <nav className="shop-navbar">

        <Link to="/home" className="shop-logo">
          <span>🌿</span>
          PLANTIVA
        </Link>

        <div className="shop-nav-links">
          <Link to="/home">Home</Link>
          <Link to="/shop" className="active">Shop</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/plant-care">Plant Care</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="shop-nav-actions">

          <button>⌕</button>

          <button>♡</button>

          <Link to="/cart" className="shop-cart">
            🛒
            <span>0</span>
          </Link>

          <button>👤</button>

        </div>

      </nav>

      {/* HEADER */}
      <section className="shop-header">

        <p>EXPLORE OUR COLLECTION</p>

        <h1>
          Find your
          <span> perfect plant.</span>
        </h1>

        <div className="shop-search">

          <span>⌕</span>

          <input
            type="text"
            placeholder="Search for a plant..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </section>

      {/* CATEGORY TABS */}
      <div className="category-tabs">

        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category ? "selected" : ""
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}

      </div>

      {/* SHOP CONTENT */}
      <main className="shop-content">

        {/* SIDEBAR */}
        <aside className="shop-sidebar">

          <div className="filter-heading">
            <h3>Filters</h3>

            <button
              onClick={() => {
                setSelectedCategory("All");
                setCare("All");
                setSearch("");
              }}
            >
              Clear all
            </button>
          </div>

          <div className="filter-group">

            <h4>Care Level</h4>

            <label>
              <input
                type="radio"
                name="care"
                checked={care === "All"}
                onChange={() => setCare("All")}
              />
              All
            </label>

            <label>
              <input
                type="radio"
                name="care"
                checked={care === "Easy"}
                onChange={() => setCare("Easy")}
              />
              Easy Care
            </label>

            <label>
              <input
                type="radio"
                name="care"
                checked={care === "Moderate"}
                onChange={() => setCare("Moderate")}
              />
              Moderate
            </label>

          </div>

          <div className="filter-group">

            <h4>Light Requirement</h4>

            <label>
              <input type="checkbox" />
              Low Light
            </label>

            <label>
              <input type="checkbox" />
              Medium Light
            </label>

            <label>
              <input type="checkbox" />
              Bright Light
            </label>

          </div>

          <div className="shop-help">

            <span>🌱</span>

            <h4>Not sure what to choose?</h4>

            <p>
              Find the perfect plant based on
              your space and lifestyle.
            </p>

            <button>
              Find My Plant →
            </button>

          </div>

        </aside>

        {/* PRODUCTS */}
        <section className="products-section">

          <div className="products-top">

            <p>
              Showing <strong>{filteredProducts.length}</strong> plants
            </p>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>

          </div>

          {filteredProducts.length > 0 ? (

            <div className="products-grid">

              {filteredProducts.map((product) => (

                <Link
  to={`/product/${product.id}`}
  className="product-card"
  key={product.id}
>

                  <div className="product-image">

                    <span className="sale-badge">
                      SALE
                    </span>

                    <button className="product-wishlist">
                      ♡
                    </button>

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                  </div>

                  <div className="product-info">

                    <p className="product-category">
                      {product.category} • {product.care} Care
                    </p>

                    <h3>{product.name}</h3>

                    <div className="product-rating">
                      ★★★★★
                      <span>4.8</span>
                    </div>

                    <div className="product-bottom">

                      <div>
                        <strong>₹{product.price}</strong>
                        <del>₹{product.oldPrice}</del>
                      </div>

                      <button className="add-cart">
                        +
                      </button>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          ) : (

            <div className="no-products">

              <span>🌱</span>

              <h3>No plants found</h3>

              <p>
                Try searching for another plant or
                clearing your filters.
              </p>

            </div>

          )}

        </section>

      </main>

      {/* FOOTER */}
      <footer className="shop-footer">

        <div>
          <h3>🌿 PLANTIVA</h3>
          <p>Grow Your Little Green Space.</p>
        </div>

        <div>
          <p>© 2026 Plantiva</p>
          <p>Made with 🌱 for plant lovers.</p>
        </div>

      </footer>

    </div>
  );
}

export default Shop;