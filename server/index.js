const startServer = require("./server");

startServer();

// const Axios = require("axios");
// const { dbConnect } = require("./db");
// const { Products } = require("./models/Products");
// const a = async () => {
//   try {
//     await dbConnect();
//     Axios.get("https://fakestoreapi.com/products")
//       .then((data) => {
//         data.data.forEach(async (e) => {
//           let p = 0;
//           if (e.category === "men's clothing") {
//             p = 1;
//           } else if (e.category === "electronics") {
//             p = 2;
//           } else if (e.category === "jewelery") {
//             p = 3;
//           } else if (e.category === "women's clothing") {
//             p = 4; 
//           }
//           await Products.create({ 
//             productName: e.title,
//             productImageUrl: e.image,
//             productPrice: e.price,
//             deletedAt: null, 
//             createdBy: 1,
//             productCategory: p,
//           })
//             .then((e) => console.log(e)) 
//             .catch((e) => console.log("err :", e));
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// a();

