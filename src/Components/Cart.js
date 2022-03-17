import React from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import "../Styles/Cart.css";

function Cart({ selectedProducts, productInfo }) {
  return (
    <div className="container">
      <Header selectedProducts={selectedProducts} />
      <div className="addedProducts">
        <div className="addedProducts__titles">
          <div className="addedProducts__title">Item</div>
          <div className="addedProducts__title">Qty</div>
          <div className="addedProducts__title">Subtotal</div>
        </div>
        {selectedProducts.cartItems.map((el, i) => (
          <div className="addedProduct" key={uuidv4()}>
            <div className="addedProduct__item">
              <img
                src={productInfo[el].img}
                alt={productInfo[el].img.substring(
                  18,
                  productInfo[el].img.length - 4
                )}
                className="addedProduct__img"
              />
              <div className="addedProduct__title">{el}</div>
            </div>
            <div className="addedProduct__qty">
              {selectedProducts.cartQty[i]}
            </div>
            <div className="addedProduct__subtotal">
              {selectedProducts.cartSubtotal[i]} PHP
            </div>
          </div>
        ))}
        <div className="addedProduct__total">
          <div className="addedProduct__total-tile">Total</div>
          <div className="addedProduct__total-amount">
            {selectedProducts.cartSubtotal.reduce(
              (partialSum, x) => partialSum + x,
              0
            )}{" "}
            PHP
          </div>
        </div>
        <div className="addedProduct__button-wrapper">
          <button type="button" className="button">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
