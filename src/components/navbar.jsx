// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "phosphor-react";
import { CartSummary } from "./CartSummary"; 
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">

        <a href="/" className="logo">
            <span>TMJ</span>
        </a>

        <div className="links">
            <Link to="/" className="current"> Shop </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
        </div>

        <div className="cart-main">
              <Link to="/wishlist">
                <Heart size={32} />
              </Link>
              <Link to="/cart">
                <ShoppingCart size={32} />
              </Link>
              <CartSummary />
        </div>

      </div>
    </div>
  );
};
