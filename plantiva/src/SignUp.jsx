import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="signup-page">

      {/* Left Brand Section */}
      <section className="signup-brand-section">
        <div className="signup-brand-content">

          <div className="logo">
            <span className="logo-leaf">🌿</span>
            <span>PLANTIVA</span>
          </div>

          <div className="signup-hero">
            <p className="small-title">START YOUR GREEN JOURNEY</p>

            <h1>
              Grow something
              <br />
              beautiful.
            </h1>

            <p>
              Create your Plantiva account and discover
              plants that bring life to your everyday space.
            </p>

            <div className="signup-plant">
              🪴
            </div>
          </div>

          <p className="copyright">
            © 2026 Plantiva. Grow something beautiful.
          </p>

        </div>
      </section>

      {/* Sign Up Section */}
      <section className="signup-section">

        <div className="signup-card">

          <div className="signup-heading">
            <h2>Create your account</h2>
            <p>Join Plantiva and grow your little green space.</p>
          </div>

          <form>

            {/* Full Name */}
            <div className="signup-input-group">
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="signup-input-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="signup-input-group">
              <label>Password</label>

              <div className="signup-password">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="signup-input-group">
              <label>Confirm Password</label>

              <div className="signup-password">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="terms">
              <input type="checkbox" />
              <span>
                I agree to Plantiva's Terms & Conditions
              </span>
            </label>

            {/* Create Account */}
            <button
              type="submit"
              className="create-account-button"
            >
              Create Account
              <span>→</span>
            </button>

          </form>

          {/* Divider */}
          <div className="divider">
            <span>OR</span>
          </div>

          {/* Google */}
          <button className="google-button">
            <FaGoogle className="google-icon" />
            Continue with Google
          </button>

          {/* Login */}
          <p className="login-link">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

        </div>

      </section>

    </div>
  );
}

export default SignUp;