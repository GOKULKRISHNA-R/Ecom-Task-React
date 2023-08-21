import React from "react";
import Navbar from "../navbar";
import "./../../css/cart.css";
import book from "../../assets/book.jpeg";
// import cake from "../../assets/cake.jpeg";
// import choco from "../../assets/choco.jpeg";
// import car from "../../assets/car.jpeg";
import mobile from "../../assets/mobile.jpeg";

const Cart = () => {
  const cartProducts = [
    {
      id: 3,
      name: "Sherlock Holmes: The Hound of the Baskervilles",
      category: "Book",
      price: 18.5,
      imageUrl: book,
      altText: "sherlock_holmes_book",
      quantity: 2,
    },
    {
      id: 2,
      name: "Harry Potter and the Sorcerer's Stone",
      category: "Book",
      price: 25,
      imageUrl: mobile,
      altText: "harry_potter_book",
      quantity: 1,
    },
  ];

  return (
    <div>
      <Navbar on="cart" />
      <div id="cart">
        
      <div className="cart-products" id="cart-products">
        {cartProducts.map((cartProduct) => (
          <div className="cart-product">
            <div className="cart-product-img">
              <img
                className="cart-product-image"
                src={cartProduct.imageUrl}
                alt="sherlock_holmes_book"
              />
            </div>
            <div className="cart-product-desc">
              <div className="line-3">
                <p className="product-name">
                  {cartProduct.name}
                </p>
                <p className="no-wrap">$ {cartProduct.price}</p>
                <p className="product-category">{cartProduct.category}</p>
              </div>
              <div className="line-4">
                <div className="minus b">
                  <button className="x">-</button>
                </div>
                <div className="quanity b">
                  <p className="p">{cartProduct.quantity}</p>
                </div>
                <div className="plus b">
                  <button className="p">+</button>
                </div>
              </div>
              <div className="line-6">
                <p className="no-wrap">Amount : ${cartProduct.price*cartProduct.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-bill">
        <p className="h1">Price Details</p>
        <div className="row">
          <p id="cartCount">Price (2 items)</p>
          <p id="cartPrice">$ 62.00</p>
        </div>
        <div className="row">
          <p>Discount</p>
          <p id="cartDiscount">- $ 3.10</p>
        </div>
        <p className="h-1">( 5% Discount on All items )</p>
        <hr />
        <div className="row h2">
          <p>Total Price</p>
          <p id="cartTotalPrice">$ 58.90</p>
        </div>
        <button className="buy-btn">Buy now</button>
      </div>{" "}
    </div>
    </div>
  );
};

export default Cart;
