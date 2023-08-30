const { DataTypes } = require("sequelize");
const { Sequelize: sequelize } = require("../db");
const { Users } = require("./users");
const { Category } = require("./category");

const Products = sequelize.define(
  "Products",
  {
    productId: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productImageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.TIME,
      defaultValue: null,
    },
  },
  {
    tableName: "Products",
    createdAt: true,
    updatedAt: false,
  }
);

Products.belongsTo(Users, {
  foreignKey: "createdBy",
});

Products.belongsTo(Category, {
  foreignKey: "productCategory",
});

// Products.sync();

const getProducts = async () => {
  return await Products.findAll();
};
const editProductInPostgres = async (data) => {
  return await Products.update(
    {
      productName: data.productName,
      productPrice: data.productPrice,
      productCategory: data.productCategory,
    },
    {
      where: {
        productId: data.productId,
      },
    }
  ); 
};

const deleteProductInPostgres = async (data) => {
  return await Products.destroy({ where: { productId: data.productId } });
};

const addProductinPostgres = async (data) => {
  return await Products.create(data).then((response) => {
    console.log("Request successful:", response.data);
    return response.data
  })
  .catch((error) => {
    console.error("Request failed:", error);
  });
};

module.exports = {
  Products,
  getProducts,
  editProductInPostgres,
  deleteProductInPostgres,
  addProductinPostgres
};
