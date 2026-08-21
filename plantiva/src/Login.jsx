import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./index.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="login-page">

      {/* Left Brand Section */}
      <section className="brand-section">
        <div className="brand-content">
          <div className="logo">
            <span className="logo-leaf">🌿</span>
            <span>PLANTIVA</span>
          </div>

          <div className="hero-content">
            <p className="small-title">WELCOME TO PLANTIVA</p>

            <h1>
              Grow Your
              <br />
              Little Green Space.
            </h1>

            <p className="hero-description">
              Bring nature closer to you. Discover beautiful plants
              made for your home, office and everyday spaces.
            </p>

            <div className="plant-decoration">
              <div className="pot">🪴</div>
              <div className="leaf leaf-one">🌿</div>
              <div className="leaf leaf-two">🍃</div>
            </div>
          </div>

          <p className="copyright">
            © 2026 Plantiva. Grow something beautiful.
          </p>
        </div>
      </section>

      {/* Login Section */}
      <section className="login-section">
        <div className="login-card">

          <div className="mobile-logo">
            <span>🌿</span>
            PLANTIVA
          </div>

          <div className="login-heading">
            <h2>Welcome back!</h2>
            <p>Login to continue your green journey.</p>
          </div>

          <form
  onSubmit={(e) => {
    e.preventDefault();
    navigate("/home");
  }}
>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="input-group">
              <div className="password-label">
                <label>Password</label>
                <a href="#">Forgot password?</a>
              </div>

              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="remember-row">
              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
            </div>

            <button type="submit" className="login-button">
              Login
              <span>→</span>
            </button>

          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <button className="google-button">
            <span className="google-icon">G</span>
            Continue with Google
          </button>

          <p className="signup-text">
            Don't have an account?
            <Link to="/signup">Create an account</Link>
          </p>

        </div>
      </section>

    </div>
  );
}

export default Login;