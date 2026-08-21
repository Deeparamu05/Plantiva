import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import "./checkout.css";

function Checkout() {
  const {
    cartItems,
    cartTotal,
  } = useCart();

  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("upi");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const delivery = cartTotal >= 499 ? 0 : 49;
  const finalTotal = cartTotal + delivery;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/order-success");
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <span>🛒</span>
        <h2>Your cart is empty</h2>
        <p>Add some beautiful plants before checking out.</p>

        <Link to="/shop">
          Go to Shop →
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">

      {/* NAVBAR */}

      <nav className="checkout-navbar">

        <Link to="/home" className="checkout-logo">
          🌿 PLANTIVA
        </Link>

        <div className="checkout-progress">

          <span className="completed">
            Cart
          </span>

          <i>→</i>

          <span className="active">
            Checkout
          </span>

          <i>→</i>

          <span>
            Confirmation
          </span>

        </div>

        <Link to="/cart" className="back-cart">
          ← Back to Cart
        </Link>

      </nav>

      {/* HEADER */}

      <section className="checkout-header">

        <p>ALMOST THERE</p>

        <h1>
          Complete your order.
        </h1>

        <span>
          Your little green space is just a few steps away 🌱
        </span>

      </section>

      {/* CONTENT */}

      <main className="checkout-content">

        <form
  id="checkout-form"
  className="checkout-form"
  onSubmit={handleSubmit}
>

          {/* CONTACT */}

          <section className="checkout-section">

            <div className="checkout-section-title">

              <span>01</span>

              <div>
                <h2>Contact Information</h2>
                <p>We'll use this to keep you updated.</p>
              </div>

            </div>

            <div className="form-grid">

              <div className="form-field full">
                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">

                <label>Phone Number</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-field">

                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

          </section>

          {/* ADDRESS */}

          <section className="checkout-section">

            <div className="checkout-section-title">

              <span>02</span>

              <div>
                <h2>Delivery Address</h2>
                <p>Where should we deliver your plants?</p>
              </div>

            </div>

            <div className="form-grid">

              <div className="form-field full">

                <label>Address</label>

                <textarea
                  name="address"
                  placeholder="House / Flat No., Street, Area"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-field">

                <label>City</label>

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-field">

                <label>State</label>

                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-field">

                <label>PIN Code</label>

                <input
                  type="text"
                  name="pincode"
                  placeholder="6-digit PIN code"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

          </section>

          {/* PAYMENT */}

          <section className="checkout-section">

            <div className="checkout-section-title">

              <span>03</span>

              <div>
                <h2>Payment Method</h2>
                <p>Choose how you'd like to pay.</p>
              </div>

            </div>

            <div className="payment-options">

              <label
                className={
                  paymentMethod === "upi"
                    ? "payment-option selected"
                    : "payment-option"
                }
              >

                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />

                <span className="payment-icon">
                  📱
                </span>

                <div>
                  <strong>UPI</strong>
                  <small>Google Pay, PhonePe, Paytm</small>
                </div>

              </label>

              <label
                className={
                  paymentMethod === "card"
                    ? "payment-option selected"
                    : "payment-option"
                }
              >

                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />

                <span className="payment-icon">
                  💳
                </span>

                <div>
                  <strong>Credit / Debit Card</strong>
                  <small>Visa, Mastercard, RuPay</small>
                </div>

              </label>

              <label
                className={
                  paymentMethod === "cod"
                    ? "payment-option selected"
                    : "payment-option"
                }
              >

                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />

                <span className="payment-icon">
                  💵
                </span>

                <div>
                  <strong>Cash on Delivery</strong>
                  <small>Pay when your plants arrive</small>
                </div>

              </label>

            </div>

          </section>

          <button
            type="submit"
            className="place-order-mobile"
          >
            Place Order • ₹{finalTotal}
          </button>

        </form>

        {/* ORDER SUMMARY */}

        <aside className="checkout-summary">

          <h2>Your Order</h2>

          <div className="checkout-items">

            {cartItems.map((item) => (

              <div
                className="checkout-item"
                key={item.id}
              >

                <div className="checkout-item-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <span>
                    {item.quantity}
                  </span>

                </div>

                <div>
                  <h4>{item.name}</h4>

                  <p>
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>

                <strong>
                  ₹{item.price * item.quantity}
                </strong>

              </div>

            ))}

          </div>

          <div className="summary-lines">

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

          </div>

          <div className="summary-total">

            <span>Total</span>

            <strong>
              ₹{finalTotal}
            </strong>

          </div>

          <button
            type="submit"
            form="checkout-form"
            className="place-order-button"
            onClick={handleSubmit}
          >
            Place Order
            <span>→</span>
          </button>

          <div className="secure-checkout">
            🔒 Secure & safe checkout
          </div>

        </aside>

      </main>

    </div>
  );
}

export default Checkout;