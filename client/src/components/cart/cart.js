import React from "react";
import Navbar from "../navbar";
import "./../../css/cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  removeFromCart,
} from "../../redux/actionCreators";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartProducts);

  function getCartQuantity(id) {
    let a = cartProducts.filter((e) => e.productId === id)[0];
    return a.quantity;
  }

  function getPrice() {
    let sum = 0;
    cartProducts.forEach((e) => {
      sum += Number(Number(e.quantity) * Number(e.productPrice));
    })
    return sum;
  }

  function getCategory(id) {
    let a = "";
    if (id === 1) {
      a = "men's clothing";
    } else if (id === 3) {
      a = "jewelery";
    } else if (id === 2) {
      a = "electronics";
    } else if (id === 4) {
      a = "women's clothing";
    }
    return a;
  }

  return (
    <div>
      <Navbar on="cart" />
      <div id="cart">
        <div className="cart-products" id="cart-products">
          {cartProducts.map((cartProduct) => (
            <div key={cartProduct.productId} className="cart-product">
              <div className="cart-product-img">
                <img
                  className="cart-product-image"
                  src={cartProduct.productImageUrl}
                  alt="product img"
                />
              </div>
              <div className="cart-product-desc">
                <div className="line-3">
                  <p className="product-name">{cartProduct.productName}</p>
                  <p className="no-wrap">$ {cartProduct.productPrice}</p>
                  <p className="product-category">{getCategory(Number(cartProduct.productCategory))}</p>
                </div>
                <div className="line-4">
                  <div className="minus b">
                    <button
                      className="x"
                      onClick={() => {
                        if (getCartQuantity(cartProduct.productId) === 1) {
                          if (
                            window.confirm(
                              "Do you need to remove this item from cart"
                            ) === true
                          ) {
                            dispatch(removeFromCart(cartProduct.productId));
                          }
                        } else {
                          dispatch(decrement(cartProduct.productId));
                        }
                      }}
                    >
                      -
                    </button>
                  </div>
                  <div className="quanity b">
                    <p className="p">{getCartQuantity(cartProduct.productId)}</p>
                  </div>
                  <div className="plus b">
                    <button
                      className="p"
                      onClick={() => {
                        if (getCartQuantity(cartProduct.productId) === 5) {
                          alert("Reached the limit !!");
                        } else {
                          dispatch(increment(cartProduct.productId));
                        }
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="line-6">
                  <p className="no-wrap">
                    Amount : ${cartProduct.productPrice * cartProduct.quantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-bill">
          <p className="h1">Price Details</p>
          <div className="row">
            <p id="cartCount">Price ({cartProducts.length} items)</p>
            <p id="cartPrice">
              $ {getPrice().toFixed(2)}
            </p>
          </div>
          <div className="row">
            <p>Discount</p>
            <p id="cartDiscount">$ {(getPrice() * 0.05).toFixed(2)}</p>
          </div>
          <p className="h-1">( 5% Discount on All items )</p>
          <hr />
          <div className="row h2">
            <p>Total Price</p>
            <p id="cartTotalPrice">$ {(getPrice()-(getPrice() * 0.05)).toFixed(2)}</p>
          </div>
          <button className="buy-btn">Buy now</button>
        </div>{" "}
      </div>
    </div>
  );
};

export default Cart;
