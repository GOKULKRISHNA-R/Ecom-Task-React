import React, { useState } from "react";
import Navbar from "../navbar";
import "./../../css/home.css";

const Home = () => {
  var [showCheckBox, toggleShowCheckBox] = useState(false);

  return (
    <div>
      <Navbar on="home" />
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
          {showCheckBox ? 
            <div
              className="checkbox"
              onMouseLeave={() =>toggleShowCheckBox(false)}
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
            : <></>
          }
        </button>
      </div>
    </div>
  );
};

export default Home;
