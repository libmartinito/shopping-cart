import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";
import Cart from "./Components/Cart";

function RouteSwitch() {
  const [selectedProducts, setSelectedProducts] = useState({
    clickedProduct: "",
    amount: 0,
    cartItems: [],
    cartQty: [],
  });
  const [productInfo] = useState({
    "Blue Jacket": {
      img: "./Images/Products/a-blue-jacket.jpg",
      price: 3500,
      copy: "This jacket protects you from the harsh elements of the environment. It also keeps you warm. Be warned that it does not keep you safe against spikes, sharp crystals, or evil cloud energy.",
    },
    "Plaid Shirt": {
      img: "./Images/Products/a-green-plaid-shirt.jpg",
      price: 599,
      copy: "This shirt is not as effective as the jacket at keeping you safe but it is better than nothing. That is fine if you have a big floofy beard or a scarf or both.",
    },
    "Yellow Scarf": {
      img: "./Images/Products/a-yellow-scarf.jpg",
      price: 299,
      copy: "This is for when you feel that a great, majestic, and floofy beard is not enough for keeping you safe amidst the challenges ahead.",
    },
    "Leather Boots": {
      img: "./Images/Products/leather-boots.jpg",
      price: 2500,
      copy: "These boots guarantees a firm grip of whatever surface you may encounter. Be warned that it does not keep you safe against spikes, sharp crystals, or evil cloud energy.",
    },
    Backpack: {
      img: "./Images/Products/a-backpack.jpg",
      price: 6000,
      copy: "This is a sturdy and reliable companion for storing things. It has space for all the strawberries and/or cassette tapes you may find on your journey.",
    },
    "Bottle of Water": {
      img: "./Images/Products/a-bottle-of-water.jpg",
      price: 200,
      copy: "This is to keep you hydrated. This is also good if you decide to make a pie with the strawberries you find and you need something to wash it down.",
    },
    "Cassette Player": {
      img: "./Images/Products/a-cassette-player.jpg",
      price: 2000,
      copy: "This is for playing any cassette tapes you may find for fire jams while dodging death. You may not know what these are because of spotify. You are forgiven.",
    },
    Tent: {
      img: "./Images/Products/a-tent.jpg",
      price: 1500,
      copy: "This is for your safety and peace of mind should you decide that you need to sleep for now and fight another day.",
    },
    Feather: {
      img: "./Images/Products/a-feather.jpg",
      price: 1,
      copy: "One or two dashes may not be enough to get that infuriatingly placed strawberry or cassette tape. This is helpful then. You do not need to understand how it works, you just need to believe.",
    },
    Bread: {
      img: "./Images/Products/pieces-of-bread.jpg",
      price: 45,
      copy: "On your journey, your life may be saved by a bird that screams out the button combination for dashing. This is for feeding the bird as thanks for doing good work.",
    },
  });

  const updateCart = () => {
    const product = selectedProducts.clickedProduct;
    const productAmount = selectedProducts.amount;
    const newSelectedProducts = { ...selectedProducts };
    const oldCartItems = selectedProducts.cartItems;
    const newCartItems = oldCartItems.concat(product);
    const oldCartQty = selectedProducts.cartQty;
    const newCartQty = oldCartQty.concat(productAmount);
    newSelectedProducts.cartItems = newCartItems;
    newSelectedProducts.cartQty = newCartQty;
    setSelectedProducts(newSelectedProducts);
  };

  const handleClickedProduct = (e) => {
    const newSelectedProducts = { ...selectedProducts };
    newSelectedProducts.clickedProduct = e.currentTarget.title;
    setSelectedProducts(newSelectedProducts);
  };

  const handleAmountChange = (e) => {
    const newSelectedProducts = { ...selectedProducts };
    newSelectedProducts.amount = e.target.value;
    setSelectedProducts(newSelectedProducts);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              productInfo={productInfo}
              selectedProducts={selectedProducts}
              handleClickedProduct={handleClickedProduct}
              handleAmountChange={handleAmountChange}
              updateCart={updateCart}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <Cart
              selectedProducts={selectedProducts}
              productInfo={productInfo}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
