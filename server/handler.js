const { JSONB } = require("sequelize");
const {
  getProducts,
  editProductInPostgres,
  deleteProductInPostgres,
  addProductinPostgres,
} = require("./models/Products");
const { Cart, addToCartinDB, getCartinDB } = require("./models/cart");
const { addUserToPostgres, findUser } = require("./models/users");

const getProductDataFromPostgres = async () => {
  const data = await getProducts();
  return data;
};

const addUser = async (req, res) => {
  try {
    const newUser = {
      userName: req.payload.name,
      phoneNumber: req.payload.phone,
      emailId: req.payload.mail,
      password: req.payload.password,
    };
    const k = await addUserToPostgres(newUser);
    Cart.create({userId:k.dataValues.userId,cartProducts:{}});
    return res.response(k);
  } catch (error) {
    return res
      .response({ message: "An error occurred during signup" })
      .code(500);
  }
};

const authenticateUser = async (req, res) => {
  try {
    const user = {
      emailId: req.payload.email,
      password: req.payload.password,
    };
    const k = await findUser(user);
    return k;
  } catch {
    return res
      .response({ message: "An error occurred during signin" })
      .code(500);
  }
};

const editProduct = async (req, res) => {
  try {
    const productData = {
      productId: req.payload.productId,
      productName: req.payload.productName,
      productCategory: req.payload.productCategory,
      productPrice: req.payload.productPrice,
    };
    const a = await editProductInPostgres(productData);
    return res.response(a).code(200);
  } catch {
    return res
      .response({ message: "An error occurred during editing" })
      .code(500);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productData = {
      productId: req.payload.productId,
      productName: req.payload.productName,
      productCategory: req.payload.productCategory,
      productPrice: req.payload.productPrice,
    };
    const a = await deleteProductInPostgres(productData);
    return res.response(a).code(200);
  } catch {
    return res
      .response({ message: "An error occurred during editing" })
      .code(500);
  }
};

const addProduct = async (req, res) => {
  try {    
    const productData = {
      createdBy: req.payload.createdBy,
      productImageUrl: req.payload.productImageUrl,
      productName: req.payload.productName,
      productCategory: req.payload.productCategory,
      productPrice: req.payload.productPrice,
    };
    const a = await addProductinPostgres(productData);
    return res.response(a).code(200);
  } catch {
    return res
      .response({ message: "An error occurred during editing" })
      .code(500);
  }
};

const addToCart = async (req,res) => {
  try {
    const a = await addToCartinDB(req.payload);
    return res.response(a).code(200);
  } catch {
    return res
      .response({ message: "An error occurred during editing" })
      .code(500);
  }
};

const getCartQuantityinDB = async (req,res) => {
  try{
    const a = await getCartinDB(req.payload.userId);
    return res.response(a).code(200);
  }catch {
    return res
      .response({ message: "An error occurred during editing" })
      .code(500);
  }
}

module.exports = {
  addToCart,
  getProductDataFromPostgres,
  addUser,
  authenticateUser,
  editProduct,
  deleteProduct,addProduct,getCartQuantityinDB,
};
