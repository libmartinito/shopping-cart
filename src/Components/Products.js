import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import "../Styles/Products.css";

function ProductCards({ images, productTitles, productPrices }) {
  return (
    <div className="body">
      {images.map((el, i) => (
        <div className="product" key={uuidv4()}>
          <img
            src={el}
            alt={el.substring(18, el.length - 4)}
            className="product__image"
          />
          <div className="product__info">
            <div className="product__title">{productTitles[i]}</div>
            <div className="product__price">{productPrices[i]} PHP</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Products() {
  const [images] = useState([
    "./Images/Products/a-blue-jacket.jpg",
    "./Images/Products/a-green-plaid-shirt.jpg",
    "./Images/Products/a-yellow-scarf.jpg",
    "./Images/Products/leather-boots.jpg",
    "./Images/Products/a-backpack.jpg",
    "./Images/Products/a-bottle-of-water.jpg",
    "./Images/Products/a-cassette-player.jpg",
    "./Images/Products/a-tent.jpg",
    "./Images/Products/a-feather.jpg",
    "./Images/Products/pieces-of-bread.jpg",
  ]);
  const [productTitles] = useState([
    "Blue Jacket",
    "Green Plaid Shirt",
    "Yellow Scarf",
    "Leather Boots",
    "Backpack",
    "Bottle of Water",
    "Cassette Player",
    "Tent",
    "Feather",
    "Bread",
  ]);
  const [productPrices] = useState([
    3500, 599, 299, 2500, 6000, 200, 2000, 1500, 1, 45,
  ]);

  return (
    <div className="container">
      <Header />
      <ProductCards
        images={images}
        productTitles={productTitles}
        productPrices={productPrices}
      />
    </div>
  );
}

export default Products;
