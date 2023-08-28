const { dbConnect } = require("./db");
const { category } = require("./models/category");

dbConnect();


// const Axios = require("axios");
// Axios.get("https://fakestoreapi.com/products")
//       .then((data) => {
//         console.log(data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
