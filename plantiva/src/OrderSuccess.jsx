import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "./orderSuccess.css";

function OrderSuccess() {
  const { cartItems, cartTotal } = useCart();

  const orderId =
    "PLT" + Math.floor(10000 + Math.random() * 90000);

  const delivery = cartTotal >= 499 ? 0 : 49;
  const finalTotal = cartTotal + delivery;

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);

  const formattedDate = deliveryDate.toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <div className="success-page">

      {/* NAVBAR */}

      <nav className="success-navbar">

        <Link to="/home" className="success-logo">
          🌿 PLANTIVA
        </Link>

        <Link to="/shop" className="success-shop">
          Continue Shopping →
        </Link>

      </nav>

      {/* SUCCESS */}

      <main className="success-main">

        <div className="success-icon">
          ✓
        </div>

        <p className="success-label">
          ORDER CONFIRMED
        </p>

        <h1>
          Your plants are<br />
          on their way! 🌱
        </h1>

        <p className="success-message">
          Thank you for choosing Plantiva.
          <br />
          Your little green friends will soon
          find their new home.
        </p>

        {/* ORDER CARD */}

        <section className="order-card">

          <div className="order-card-header">

            <div>
              <span>ORDER ID</span>
              <strong>#{orderId}</strong>
            </div>

            <div className="order-status">
              Confirmed ✓
            </div>

          </div>

          <div className="order-details">

            <div>
              <span>Items</span>
              <strong>
                {cartItems.reduce(
                  (total, item) =>
                    total + item.quantity,
                  0
                )}{" "}
                plant(s)
              </strong>
            </div>

            <div>
              <span>Total Paid</span>
              <strong>₹{finalTotal}</strong>
            </div>

            <div>
              <span>Estimated Delivery</span>
              <strong>{formattedDate}</strong>
            </div>

          </div>

          {/* PRODUCTS */}

          <div className="ordered-plants">

            <h3>Your Plants</h3>

            {cartItems.map((item) => (

              <div
                className="ordered-plant"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <strong>{item.name}</strong>
                  <span>
                    Qty: {item.quantity}
                  </span>
                </div>

                <strong>
                  ₹{item.price * item.quantity}
                </strong>

              </div>

            ))}

          </div>

        </section>

        {/* DELIVERY MESSAGE */}

        <div className="delivery-message">

          <span>🚚</span>

          <div>
            <strong>
              We'll keep you updated
            </strong>

            <p>
              You'll receive delivery updates
              on your registered contact details.
            </p>
          </div>

        </div>

        <Link
          to="/shop"
          className="success-button"
        >
          Continue Shopping
        </Link>

        <p className="success-tagline">
          Grow your little green space 🌿
        </p>

      </main>

    </div>
  );
}

export default OrderSuccess;