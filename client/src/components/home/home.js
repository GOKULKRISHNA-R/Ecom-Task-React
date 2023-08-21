import React, { useState } from "react";
import Navbar from "../navbar";
import "./../../css/home.css";
import book from "../../assets/book.jpeg";
import cake from "../../assets/cake.jpeg";
import choco from "../../assets/choco.jpeg";
import car from "../../assets/car.jpeg";
import mobile from "../../assets/mobile.jpeg";
import addtocart from "../../assets/addcart.png";
import plus from "../../assets/plus.png";
import close from "../../assets/close.png";

const Home = () => {
  var [showCheckBox, toggleShowCheckBox] = useState(false);
  var [whatToShow, setWhatToShow] = useState("Home");


  var products = [
    {
      id: 5,
      name: "Pride and Prejudice",
      category: "Book",
      price: 22.99,
      image: book,
      altText: "pride_and_prejudice_book",
      inCart: false,
    },
    {
      id: 6,
      name: "Delicious Cake",
      category: "Food",
      price: 20.5,
      image: cake,
      altText: "cake",
      inCart: true,
    },
    {
      id: 10,
      name: "Cup of Cappuccino",
      category: "Food",
      price: 5.25,
      image: choco,
      altText: "cappuccino",
      inCart: false,
    },
    {
      id: 11,
      name: "Latest Smartphone",
      category: "Electronics",
      price: 599.99,
      image: mobile,
      altText: "mobile",
      inCart: true,
    },
    {
      id: 16,
      name: "Luxury Car",
      category: "Automobile",
      price: 50000.0,
      image: car,
      altText: "car",
      inCart: false,
    },
  ];

  return (
    <div>
      <Navbar on="home" />
      {whatToShow === "Home" ? (
        <div>
          <div className="product-actions">
            <input
              type="text"
              name="filterName"
              id="filterName"
              className="filter"
              placeholder="Search"
            />
            <button
              id="filterCategory"
              onClick={() => toggleShowCheckBox(true)}
              className="filter"
            >
              Category
              {showCheckBox ? (
                <div
                  className="checkbox"
                  onMouseLeave={() => toggleShowCheckBox(false)}
                  id="checkBox"
                >
                  <div className="row-2">
                    <input
                      type="checkbox"
                      name="filterCategory"
                      id="filterCategory1"
                      value="All"
                      checked
                      onchange="filterCategory()"
                    />
                    All <br />
                  </div>
                  <div className="row-2">
                    <input
                      type="checkbox"
                      name="filterCategory"
                      id="filterCategory2"
                      value="Book"
                      onchange="filterCategory()"
                    />
                    Book <br />
                  </div>
                  <div className="row-2">
                    <input
                      type="checkbox"
                      name="filterCategory"
                      id="filterCategory3"
                      value="Food"
                      onchange="filterCategory()"
                    />
                    Food <br />
                  </div>
                  <div className="row-2">
                    <input
                      type="checkbox"
                      name="filterCategory"
                      id="filterCategory4"
                      value="Electronics"
                      onchange="filterCategory()"
                    />
                    Electronics <br />
                  </div>
                  <div className="row-2">
                    <input
                      type="checkbox"
                      name="filterCategory"
                      id="filterCategory5"
                      value="Automobile"
                      onchange="filterCategory()"
                    />
                    Automobile <br />
                  </div>
                </div>
              ) : (
                <></>
              )}
            </button>
            <button onClick={() => setWhatToShow("AddForm")}>
              <img src={plus} alt="edit" className="butn" />
            </button>
          </div>
          <div className="products">
            {products.map((product) => 
              <div className="product">
                <div className="product-img">
                  <img
                    className="image"
                    src={product.image}
                    alt={product.altText}
                  />
                </div>
                <div className="product-desc">
                  <div className="line-1">
                    <p className="product-name">{product.name}</p>
                  </div>
                  <div className="line-5">
                    <p>$ {product.price}</p>
                    {product.inCart ? (
                      <div className="line-4">
                        <div className="minus b">
                          <button className="x">-</button>
                        </div>
                        <div className="quanity b">
                          <p className="p">1</p>
                        </div>
                        <div className="plus b">
                          <button className="p">+</button>
                        </div>
                      </div>
                    ) : (
                      <button>
                        <img
                          src={addtocart}
                          alt="addToCartImg"
                          className="addToCartImg"
                        />
                      </button>
                    )}
                  </div>
                  <div className="line-2">
                    <p className="product-category">{product.category}</p>
                    <div className="actions">
                      <button
                        className="edit-btn"
                        onClick={() => setWhatToShow("EditForm")}
                      >
                        Edit
                      </button>
                      <button className="delete-btn">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
      {whatToShow === "AddForm" ? (
        <div className="add-form margin">
          <div className="form-container">
            <button className="close" onClick={() => setWhatToShow("Home")}>
              <img src={close} alt="close" className="butn" />
            </button>
            <div className="Form">
              <label for="AFname">Product Name:</label>
              <input type="text" id="AFname" name="AFname" />
              <label for="AFprice">Product Price:</label>
              <input type="text" id="AFprice" name="AFprice" />
              <label for="AFcategory">Choose a category:</label>
              <select name="AFcategory" id="AFcategory">
                <option value="">Choose</option>
                <option value="Book">Book</option>
                <option value="Food">Food</option>
                <option value="Electronics">Electronics</option>
                <option value="Automobile">Automobile</option>
              </select>
              <button className="btn" onClick="createProduct()">
                Add
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {whatToShow === "EditForm" ? (
        <div className="edit-form margin">
          <div className="form-container">
            <button className="close" onClick={() => setWhatToShow("Home")}>
              <img src={close} alt="close" className="butn" />
            </button>
            <div className="Form">
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
              <button className="btn" onClick="updateData()">
                Change
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
