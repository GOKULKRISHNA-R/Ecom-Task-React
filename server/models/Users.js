const { DataTypes } = require("sequelize");
const { Sequelize: sequelize } = require("../db");

const Users = sequelize.define(
  "Users",
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
    },
  },
  {
    tableName: "Users",
    deletedAt: true,
    createdAt: true,
    updatedAt: false,
  }
);

module.exports = Users;
