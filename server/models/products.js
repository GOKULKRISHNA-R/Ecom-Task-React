const { DataTypes } = require("sequelize");
const { Sequelize: sequelize } = require("../db");
const Users = require("./users");
const Category = require("./category");

const Products = sequelize.define(
  "Products",
  {
    productId: {
      type: DataTypes.BIGINT,
      primaryKey: true,
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

const getProducts = async () => {
  return await Products.findAll();
}

module.exports = {getProducts};
