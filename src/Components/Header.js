import React from "react";
import "../Styles/Header.css";
import { Link } from "react-router-dom";

function Header({ selectedProducts }) {
  return (
    <header className="header">
      <nav className="main-nav">
        <Link to="/" className="main-nav__link">
          <div className="icon" />
        </Link>
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <Link to="/products" className="main-nav__link">
              Products
            </Link>
          </li>
          <li className="main-nav__item">
            <Link to="/about" className="main-nav__link">
              About
            </Link>
          </li>
          <li className="main-nav__item">
            <Link to="/cart" className="main-nav__link">
              Cart(
              {selectedProducts.cartQty.reduce(
                (partialSum, x) => partialSum + x,
                0
              )}
              )
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
