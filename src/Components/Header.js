import React from "react";
import "../Styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="icon" />
      <nav className="main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <Link to="/" className="main-nav__link">
              HOME
            </Link>
          </li>
          <li className="main-nav__item">
            <Link to="/products" className="main-nav__link">
              PRODUCTS
            </Link>
          </li>
          <li className="main-nav__item">
            <Link to="/about" className="main-nav__link">
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
      <div className="cart">
        <Link to="/cart" className="main-nav__link">
          CART
        </Link>
      </div>
    </div>
  );
}

export default Header;
