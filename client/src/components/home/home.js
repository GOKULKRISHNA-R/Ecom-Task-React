import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import "./../../css/home.css";
import addtocart from "../../assets/addcart.png";
import plus from "../../assets/plus.png";
import close from "../../assets/close.png";
import store from "../../redux/store";
import {
  fetchProducts,
  addToCart,
  increment,
  decrement,
  removeFromCart,
  deleteProduct,
  editProduct,
  addProduct,
} from "../../redux/actionCreators";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const temp = useSelector((state) => state.products);
  const tempCart = useSelector((state) => state.cartProducts);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [products, setProducts] = useState([]);
  let [showCheckBox, toggleShowCheckBox] = useState(false);
  let [whatToShow, setWhatToShow] = useState("Home");
  let [editId, setEditId] = useState("");
  let [editName, setEditName] = useState("");
  let [editCategory, setEditCategory] = useState("Choose");
  let [editPrice, setEditPrice] = useState("");
  let [addName, setAddName] = useState("");
  let [addUrl, setAddUrl] = useState("");
  let [addCategory, setAddCategory] = useState("");
  let [addPrice, setAddPrice] = useState("");
  let [filterCat, setFilterCat] = useState(["men's clothing", 'jewelery', 'electronics', "women's clothing"]);

  useEffect(() => {
    if(temp.length === 0){ store.dispatch(fetchProducts());}
    setProducts(temp);
  }, []);
  
  useEffect(() => {
    setProducts(temp);
  }, [tempCart.length, temp.length]);

  useEffect(() => {
    let s = temp.filter((product) => filterCat.includes(product.category));
    setProducts(s);
  }, [filterCat.length]);

  function getCartQuantity(id) {
    let a = tempCart.filter((e) => e.id === id)[0];
    return a.quantity;
  }

  function setData(id) {
    products.forEach((e) => {
      if (e.id === id) {
        setEditId(e.id);
        setEditName(e.title);
        setEditCategory(e.category);
        setEditPrice(e.price);
      }
    });
  }

  function filterName(e) {
    let s = temp.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProducts(s);
  }

  function filterCategory(e) {
    if (e.target.checked) {
      let a = [...filterCat, e.target.value];
      setFilterCat(a);
    } else {
      let a = filterCat.filter((p) => p !== e.target.value);
      setFilterCat(a);
    }
  }

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
                        onChange={filterName}
                      />
                      <button
                        id="filterCategory"
                        onClick={() => {
                          toggleShowCheckBox(true);
                        }}
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
                                id="filterCategory2"
                                value="men's clothing"
                                checked={filterCat.includes("men's clothing")}
                                onChange={filterCategory}
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
                                checked={filterCat.includes("jewelery")}
                                onChange={filterCategory}
                              />
                              Jewelery <br />
                            </div>
                            <div className="row-2">
                              <input
                                type="checkbox"
                                name="filterCategory"
                                id="filterCategory4"
                                value="electronics"
                                checked={filterCat.includes("electronics")}
                                onChange={filterCategory}
                              />
                              Electronics <br />
                            </div>
                            <div className="row-2">
                              <input
                                type="checkbox"
                                name="filterCategory"
                                id="filterCategory5"
                                value="women's clothing"
                                checked={filterCat.includes("women's clothing")}
                                onChange={filterCategory}
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
                                    <button
                                      className="x"
                                      onClick={() => {
                                        if (getCartQuantity(product.id) === 1) {
                                          if (
                                            window.confirm(
                                              "Do you need to remove this item from cart"
                                            ) === true
                                          ) {
                                            dispatch(
                                              removeFromCart(product.id)
                                            );
                                          }
                                        } else {
                                          dispatch(decrement(product.id));
                                        }
                                      }}
                                    >
                                      -
                                    </button>
                                  </div>
                                  <div className="quanity b">
                                    <p className="p">
                                      {getCartQuantity(product.id)}
                                    </p>
                                  </div>
                                  <div className="plus b">
                                    <button
                                      className="p"
                                      onClick={() => {
                                        if (getCartQuantity(product.id) === 5) {
                                          alert("Reached the limit !!");
                                        } else {
                                          dispatch(increment(product.id));
                                        }
                                      }}
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <button
                                  onClick={() => {
                                    dispatch(addToCart(product.id));
                                  }}
                                >
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
                                  onClick={() => {
                                    setData(product.id);
                                    setWhatToShow("EditForm");
                                  }}
                                >
                                  Edit
                                </button>
                                <button
                                  className="delete-btn"
                                  onClick={() => {
                                    dispatch(deleteProduct(product.id));
                                  }}
                                >
                                  Delete
                                </button>
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
              <input
                type="text"
                id="AFname"
                name="AFname"
                value={addName}
                onChange={(e) => setAddName(e.target.value)}
              />
              <label for="AFurl">Product Image Url:</label>
              <input
                type="text"
                id="AFurl"
                name="AFurl"
                value={addUrl}
                onChange={(e) => setAddUrl(e.target.value)}
              />
              <label for="AFprice">Product Price:</label>
              <input
                type="text"
                id="AFprice"
                name="AFprice"
                value={addPrice}
                onChange={(e) => setAddPrice(e.target.value)}
              />
              <label for="AFcategory">Choose a category:</label>
              <select
                name="AFcategory"
                id="AFcategory"
                onChange={(e) => setAddCategory(e.target.value)}
              >
                <option value="">Choose</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's Clothing</option>
              </select>
              <button
                className="btn"
                onClick={() => {
                  dispatch(
                    addProduct({
                      name: addName,
                      url: addUrl,
                      price: addPrice,
                      category: addCategory,
                    })
                  );
                  setAddName("");
                  setAddCategory("");
                  setAddUrl("");
                  setAddPrice("");
                  setWhatToShow("Home");
                }}
              >
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
              <input
                type="text"
                id="UFname"
                name="UFname"
                value={editName}
                defaultValue="Product Name"
                onChange={(e) => setEditName(e.target.value)}
              />
              <label for="UFprice">Product Price:</label>
              <input
                type="text"
                id="UFprice"
                name="UFprice"
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
              />
              <label for="UFcategory">Choose a category:</label>
              <select
                name="UFcategory"
                id="UFcategory"
                required
                onChange={(e) => setEditCategory(e.target.value)}
              >
                <option id="UFChoose" value={editCategory}>
                  {editCategory}
                </option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's Clothing</option>
              </select>
              <button
                className="btn"
                onClick={() => {
                  dispatch(
                    editProduct({
                      id: editId,
                      name: editName,
                      price: editPrice,
                      category: editCategory,
                    })
                  );
                }}
              >
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
