import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = ({ cartItemCount }) => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart">
          <div className="cart-container">
            <ShoppingCart size={32}/>
            {cartItemCount > 0 && (
              <div className="cart-badge">{cartItemCount}</div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};
