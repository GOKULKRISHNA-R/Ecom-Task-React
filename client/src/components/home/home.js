import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import "./../../css/home.css";
import addtocart from "../../assets/addcart.png";
import plus from "../../assets/plus.png";
import close from "../../assets/close.png";
import store from "../../redux/store";
import { fetchProducts } from "../../redux/actionCreators";
import { useSelector } from "react-redux";

const Home = () => {
  let [showCheckBox, toggleShowCheckBox] = useState(false);
  let [whatToShow, setWhatToShow] = useState("Home");

  const [products, setProducts] = useState([]);

  const temp = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    store.dispatch(fetchProducts());
    setProducts(temp);
  }, [temp.length]);

  return (
    <div>
      <Navbar on="home" />

      <>
        {loading ? (
          <div> loading... </div>
        ) : (
          <>
            {error.isError ? (
              <div> {error.message}</div>
            ) : (
              <>
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
                                onChange="filterCategory()"
                              />
                              All <br />
                            </div>
                            <div className="row-2">
                              <input
                                type="checkbox"
                                name="filterCategory"
                                id="filterCategory2"
                                value="men's clothing"
                                onChange="filterCategory()"
                              />
                              Men's Clothing
                              <br />
                            </div>
                            <div className="row-2">
                              <input
                                type="checkbox"
                                name="filterCategory"
                                id="filterCategory3"
                                value="jewelery"
                                onChange="filterCategory()"
                              />
                              Jewelery <br />
                            </div>
                            <div className="row-2">
                              <input
                                type="checkbox"
                                name="filterCategory"
                                id="filterCategory4"
                                value="electronics"
                                onChange="filterCategory()"
                              />
                              Electronics <br />
                            </div>
                            <div className="row-2">
                              <input
                                type="checkbox"
                                name="filterCategory"
                                id="filterCategory5"
                                value="women's clothing"
                                onChange="filterCategory()"
                              />
                              Women's Clothing
                              <br />
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
                      {products.map((product) => (
                        <div key={product.id} className="product">
                          <div className="product-img">
                            <img
                              className="image"
                              src={product.image}
                              alt={product.altText}
                            />
                          </div>
                          <div className="product-desc">
                            <div className="line-1">
                              <p className="product-name">{product.title}</p>
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
                              <p className="product-category">
                                {product.category}
                              </p>
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
                      ))}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </>
            )}{" "}
          </>
        )}
      </>
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
