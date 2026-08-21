import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "./cart.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  const delivery = cartTotal >= 499 || cartTotal === 0 ? 0 : 49;

  const finalTotal = cartTotal + delivery;

  return (
    <div className="cart-page">

      {/* NAVBAR */}

      <nav className="cart-navbar">

        <Link to="/home" className="cart-logo">
          🌿 PLANTIVA
        </Link>

        <div className="cart-nav-links">
          <Link to="/home">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/plant-care">Plant Care</Link>
        </div>

        <Link to="/shop" className="continue-shopping">
          Continue Shopping
        </Link>

      </nav>

      {/* HEADER */}

      <section className="cart-header">
        <p>YOUR PLANTS</p>
        <h1>Your Shopping Cart 🛒</h1>
      </section>

      {cartItems.length === 0 ? (

        <div className="empty-cart">

          <div className="empty-cart-icon">
            🪴
          </div>

          <h2>Your cart is empty</h2>

          <p>
            Your little green space is waiting
            for some plants.
          </p>

          <Link to="/shop">
            Explore Plants →
          </Link>

        </div>

      ) : (

        <main className="cart-content">

          {/* ITEMS */}

          <section className="cart-items">

            {cartItems.map((item) => (

              <div className="cart-item" key={item.id}>

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-info">

                  <p>{item.category}</p>

                  <h3>{item.name}</h3>

                  <span>
                    ₹{item.price}
                  </span>

                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>

                <div className="cart-quantity">

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.quantity - 1
                      )
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.quantity + 1
                      )
                    }
                  >
                    +
                  </button>

                </div>

                <strong className="item-total">
                  ₹{item.price * item.quantity}
                </strong>

              </div>

            ))}

          </section>

          {/* SUMMARY */}

          <aside className="cart-summary">

            <h2>Order Summary</h2>

            <div>
              <span>Subtotal</span>
              <strong>₹{cartTotal}</strong>
            </div>

            <div>
              <span>Delivery</span>
              <strong>
                {delivery === 0
                  ? "FREE"
                  : `₹${delivery}`}
              </strong>
            </div>

            <hr />

            <div className="cart-final-total">
              <span>Total</span>
              <strong>₹{finalTotal}</strong>
            </div>

            <Link
              to="/checkout"
              className="checkout-button"
            >
              Proceed to Checkout →
            </Link>

            {cartTotal < 499 && (
              <p className="free-delivery-note">
                Add ₹{499 - cartTotal} more
                for FREE delivery 🌱
              </p>
            )}

          </aside>

        </main>

      )}

    </div>
  );
}

export default Cart;