import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import "../Styles/Products.css";

function ProductCards({ productInfo }) {
  const productInfoKeys = Object.keys(productInfo);
  return (
    <div className="body">
      {productInfoKeys.map((el) => (
        <div className="product" name={el} key={uuidv4()}>
          <img
            src={productInfo[el].img}
            alt={productInfo[el].img.substring(18, el.length - 4)}
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

function Products() {
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
      copy: "This is a sturgy and reliable companion for storing things. It has space for all the strawberries and/or cassette tapes you may find on your journey.",
    },
    "Bottle of Water": {
      img: "./Images/Products/a-bottle-of-water.jpg",
      price: 200,
      copy: "This is to keep you hydrated. This is also good if you decide to make a pie with the strawberries you find and you need something to wash it down.",
    },
    "Cassette Player": {
      img: "./Images/Products/a-cassette-player.jpg",
      price: 2000,
      copy: "This is for playing any cassette tapes you may find for fire jams while dodging death. You may not know what these are because of spotify. You are forgiven. Also, the reception is bad here so this is a good thing to get if you did not download your tunes.",
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

  return (
    <div className="container">
      <Header />
      <ProductCards productInfo={productInfo} />
    </div>
  );
}

export default Products;
