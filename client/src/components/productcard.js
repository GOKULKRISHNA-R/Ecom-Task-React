import React from "react";
import book from "./../assets/book.jpeg";

export default function ProfileroductCard() {
  return (
    <div class="product">
      <div class="product-img">
        <img class="image" src={book} alt="book" />
      </div>
      <div class="product-desc">
        <div class="line-1">
          <p class="product-name">NCERT</p>
        </div>
        <div class="line-5">
          <p>$ 40.00</p>
          <div class="line-4">
            <div class="minus b">
              <button class="x">-</button>
            </div>
            <div class="quanity b">
              <p class="p">1</p>
            </div>
            <div class="plus b">
              <button class="p">+</button>
            </div>
          </div>
        </div>
        <div class="line-2">
          <p class="product-category">Book</p>
          <div class="actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
