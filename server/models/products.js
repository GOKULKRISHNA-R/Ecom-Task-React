const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");
const { category } = require("./category");
const { users } = require("./users");

const products = sequelize.define(
  "products",
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
    productCategory: {
      type: DataTypes.BIGINT,
      references: {
        model: category,
        key: "categoryId",
      },
    },
    createdBy: {
      type: DataTypes.BIGINT,
      references: {
        model: users,
        key: "userId",
      },
    },
  },
  {
    tableName: "products",
    deletedAt: true,
    createdAt: true,
    updatedAt: false,
  }
);

module.exports = products;
