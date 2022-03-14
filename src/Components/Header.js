import React from "react";
import "../Styles/Header.css";

function Header() {
  return (
    <div className="header">
      <nav className="main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <a href="/" className="main-nav__link">
              HOME
            </a>
          </li>
          <li className="main-nav__item">
            <a href="/products" className="main-nav__link">
              PRODUCTS
            </a>
          </li>
          <li className="main-nav__item">
            <a href="/about" className="main-nav__link">
              ABOUT
            </a>
          </li>
        </ul>
      </nav>
      <div className="cart">Cart</div>
    </div>
  );
}

export default Header;
