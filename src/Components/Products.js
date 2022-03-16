import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import "../Styles/Products.css";

function Product({
  selectedProducts,
  productInfo,
  handleAmount,
  updateCart,
  handleBack,
}) {
  const product = selectedProducts.clickedProduct;
  const productAmount = selectedProducts.amount;
  const imgSrc = productInfo[product].img;
  const imgAlt = imgSrc.substring(18, imgSrc.length - 4);
  return (
    <div className="selected">
      <img src={imgSrc} alt={imgAlt} className="selected__img" />
      <div className="selected__info">
        <div className="selected__nav" onClick={handleBack} aria-hidden="true">
          back to products
        </div>
        <div className="selected__title">{product}</div>
        <div className="selected__price">{productInfo[product].price} PHP</div>
        <div className="selected__qty-button-wrapper">
          <label htmlFor="selected__qty" className="selected__label">
            Qty
            <input
              type="number"
              id="selected__qty"
              value={productAmount}
              onChange={handleAmount}
            />
          </label>
          <button type="button" className="button" onClick={updateCart}>
            Add to Cart
          </button>
        </div>
        <div className="selected__copy">{productInfo[product].copy}</div>
      </div>
    </div>
  );
}

function ProductCards({ productInfo, handler }) {
  const productInfoKeys = Object.keys(productInfo);
  return (
    <div className="body">
      {productInfoKeys.map((el) => (
        <div
          className="product"
          title={el}
          key={uuidv4()}
          onClick={handler}
          aria-hidden="true"
        >
          <img
            src={productInfo[el].img}
            alt={productInfo[el].img.substring(
              18,
              productInfo[el].img.length - 4
            )}
            className="product__image"
          />
          <div className="product__info">
            <div className="product__title">{el}</div>
            <div className="product__price">{productInfo[el].price} PHP</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Products({
  productInfo,
  selectedProducts,
  handleClickedProduct,
  handleAmountChange,
  updateCart,
}) {
  const [isProductClicked, setIsProductClicked] = useState(false);

  const handleProductClick = (e) => {
    setIsProductClicked(true);
    handleClickedProduct(e);
  };

  const handleBack = () => {
    setIsProductClicked(false);
  };

  return (
    <div className="container">
      <Header />
      {isProductClicked ? (
        <Product
          selectedProducts={selectedProducts}
          productInfo={productInfo}
          handleAmount={handleAmountChange}
          handleBack={handleBack}
          updateCart={updateCart}
        />
      ) : (
        <ProductCards productInfo={productInfo} handler={handleProductClick} />
      )}
    </div>
  );
}

export default Products;
