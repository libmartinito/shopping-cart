import React from "react";

function Header() {
  return (
    <div className="header">
      <nav className="main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <a href="/" className="main-nav__link">
              Home
            </a>
          </li>
          <li className="main-nav__item">
            <a href="/products" className="main-nav__link">
              Products
            </a>
          </li>
          <li className="main-nav__item">
            <a href="/about" className="main-nav__link">
              About
            </a>
          </li>
        </ul>
      </nav>
      <div className="cart">Cart</div>
    </div>
  );
}

export default Header;
