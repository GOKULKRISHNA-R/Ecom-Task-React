import React from "react";
import close from "../assets/close.png";

export default function UpdateForm() {
  function closeForm() {
    
  }

  return (
    <div id="updateForm" class="hide">
      <div class="form-container">
        <button class="close" onclick ={() => closeForm()}>
          <img src={close} alt="" />
        </button>
        <div class="Form">
          <label for="UFname">Product Name:</label>
          <input type="text" id="UFname" name="UFname" />
          <label for="UFprice">Product Price:</label>
          <input type="text" id="UFprice" name="UFprice" />
          <label for="UFcategory">Choose a category:</label>
          <select name="UFcategory" id="UFcategory" required>
            <option id="UFChoose">Choose</option>
            <option value="Book">Book</option>
            <option value="Food">Food</option>
            <option value="Electronics">Electronics</option>
            <option value="Automobile">Automobile</option>
          </select>
          <button class="btn" onclick="updateData()">
            Change
          </button>
        </div>
      </div>
    </div>
  );
}
