const { DataTypes } = require("sequelize");
const { Sequelize: sequelize } = require("../db");

const Category = sequelize.define(
  "Category",
  {
    categoryId: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Category",
    timestamps: false,
  }
);
module.exports = Category;
