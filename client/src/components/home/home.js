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
  let [filterCat, setFilterCat] = useState(["all"]);

  useEffect(() => {
    store.dispatch(fetchProducts());
    setProducts(temp);
  }, []);

  useEffect(() => {
    setProducts(temp);
  }, [tempCart.length, temp.length]);

  useEffect(() => {
    let s = [];
    temp.forEach((e) => {
      let a;
      if (e.productCategory === "1") {
        a = "men's clothing";
      } else if (e.productCategory === "3") {
        a = "jewelery";
      } else if (e.productCategory === "2") {
        a = "electronics";
      } else if (e.productCategory === "4") {
        a = "women's clothing";
      }
      filterCat.forEach((c) => {
        if (c === a) {
          s.push(e);
        }
      });
      if (a === undefined || a === null) {
        s = temp;
      }
    });
    setProducts(s);
  }, [filterCat.length, filterCat]);

  function getCartQuantity(id) {
    let a ;
    tempCart.forEach(element => {
      if(element.productId === id){
        a = element;
      }
    });
    return a.quantity;
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

  // function getCategoryId(category) {
  //   let a = "";
  //   if (category === "men's clothing") {
  //     a = 1;
  //   } else if (category === "jewelery") {
  //     a = 3;
  //   } else if (category === "electronics") {
  //     a = 2;
  //   } else if (category === "women's clothing") {
  //     a = 4;
  //   }
  //   return a;
  // }

  function setData(id) {
    products.forEach((e) => {
      if (e.productId === id) {
        setEditId(e.productId);
        setEditName(e.productName);
        setEditCategory(e.productCategory);
        setEditPrice(e.productPrice);
      }
    });
  }

  function filterName(e) {
    let s = temp.filter((product) =>
      product.productName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProducts(s);
  }

  function filterCategory(e) {
    if (e.target.checked && e.target.value === "all") {
      let a = [
        "all",
        "men's clothing",
        "jewelery",
        "electronics",
        "women's clothing",
      ];
      setFilterCat(a);
    } else {
      if (e.target.checked) {
        let a = [...filterCat, e.target.value];
        setFilterCat(a);
      } else {
        let a = filterCat.filter((p) => p !== e.target.value);
        setFilterCat(a);
      }
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
                                value="all"
                                checked={filterCat.includes("all")}
                                onChange={filterCategory}
                              />
                              All
                              <br />
                            </div>
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
                        <div key={product.productId} className="product">
                          <div className="product-img">
                            <img
                              className="image"
                              src={product.productImageUrl}
                              alt={product.altText}
                            />
                          </div>
                          <div className="product-desc">
                            <div className="line-1">
                              <p className="product-name">
                                {product.productName}
                              </p>
                            </div>
                            <div className="line-5">
                              <p>$ {product.productPrice}</p>
                              {product.inCart ? (
                                <div className="line-4">
                                  <div className="minus b">
                                    <button
                                      className="x"
                                      onClick={() => {
                                        if (getCartQuantity(product.productId) === 1) {
                                          if (
                                            window.confirm(
                                              "Do you need to remove this item from cart"
                                            ) === true
                                          ) {
                                            dispatch(
                                              removeFromCart(product.productId)
                                            );
                                          }
                                        } else {
                                          dispatch(decrement(product.productId));
                                        }
                                      }}
                                    >
                                      -
                                    </button>
                                  </div>
                                  <div className="quanity b">
                                    <p className="p">
                                      {getCartQuantity(product.productId)}
                                    </p>
                                  </div>
                                  <div className="plus b">
                                    <button
                                      className="p"
                                      onClick={() => {
                                        if (getCartQuantity(product.productId) === 5) {
                                          alert("Reached the limit !!");
                                        } else {
                                          dispatch(increment(product.productId));
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
                                    dispatch(
                                      addToCart({
                                        userId: Number(localStorage.getItem("userId")),
                                        id: Number(product.productId),
                                        quantity: 1,
                                      })
                                    );
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
                                {getCategory(Number(product.productCategory))}
                              </p>
                              <div className="actions">
                                <button
                                  className="edit-btn"
                                  onClick={() => {
                                    setData(product.productId);
                                    setWhatToShow("EditForm");
                                  }}
                                >
                                  Edit
                                </button>
                                <button
                                  className="delete-btn"
                                  onClick={() => {
                                    dispatch(deleteProduct(product.productId));
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
            <form
              className="Form"
              onSubmit={() => {
                dispatch(
                  addProduct({
                    userId: localStorage.getItem("userId"),
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
              <label htmlFor="AFname">Product Name:</label>
              <input
                type="text"
                id="AFname"
                name="AFname"
                value={addName}
                required
                onChange={(e) => setAddName(e.target.value)}
              />
              <label htmlFor="AFurl">Product Image Url:</label>
              <input
                required
                type="text"
                id="AFurl"
                name="AFurl"
                value={addUrl}
                onChange={(e) => setAddUrl(e.target.value)}
              />
              <label htmlFor="AFprice">Product Price:</label>
              <input
                required
                type="text"
                id="AFprice"
                name="AFprice"
                value={addPrice}
                onChange={(e) => setAddPrice(e.target.value)}
              />
              <label htmlFor="AFcategory">Choose a category:</label>
              <select
                name="AFcategory"
                id="AFcategory"
                onChange={(e) => setAddCategory(e.target.value)}
              >
                <option value="0">Choose</option>
                <option value="1">Men's Clothing</option>
                <option value="3">Jewelery</option>
                <option value="2">Electronics</option>
                <option value="4">Women's Clothing</option>
              </select>
              <input className="btn" type="submit" value={"Add"} />
            </form>
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
              <label htmlFor="UFname">Product Name:</label>
              <input
                type="text"
                id="UFname"
                name="UFname"
                value={editName}
                defaultValue="Product Name"
                onChange={(e) => setEditName(e.target.value)}
              />
              <label htmlFor="UFprice">Product Price:</label>
              <input
                type="text"
                id="UFprice"
                name="UFprice"
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
              />
              <label htmlFor="UFcategory">Choose a category:</label>
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