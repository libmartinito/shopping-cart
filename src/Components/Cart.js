import React from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";

function Cart({ selectedProducts, productInfo }) {
  return (
    <div className="container">
      <Header />
      <div className="addedProducts">
        {console.log(selectedProducts)}
        {selectedProducts.cartItems.map((el, i) => (
          <div className="addedProduct" key={uuidv4()}>
            <img
              src={productInfo[el].img}
              alt={productInfo[el].img.substring(
                18,
                productInfo[el].img.length - 4
              )}
              className="addedProduct__img"
            />
            <div className="addedProduct__Qty">
              {selectedProducts.cartQty[i]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
