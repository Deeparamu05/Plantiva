import { CartProvider } from "./CartContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import Shop from "./Shop";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Checkout from "./Checkout";
import OrderSuccess from "./OrderSuccess";
import "./index.css";

function App() {
 return (
  <BrowserRouter>
    <CartProvider>
      <Routes>

        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<SignUp />}
        />

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/shop"
          element={<Shop />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />
        <Route
  path="/cart"
  element={<Cart />}
/>
<Route
  path="/checkout"
  element={<Checkout />}
/>
<Route
  path="/order-success"
  element={<OrderSuccess />}
/>

      </Routes>
    </CartProvider>
  </BrowserRouter>
);
}

export default App;