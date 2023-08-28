const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const users = sequelize.define(
  "users",
  {
    userId: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    tableName: "users",
    deletedAt: true,
    createdAt: true,
    updatedAt: false,
  }
);

module.exports = users;
