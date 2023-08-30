const { DataTypes } = require("sequelize");
const { Sequelize: sequelize } = require("../db");

const Users = sequelize.define(
  "Users",
  {
    userId: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    emailId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.TIME,
      defaultValue: null,
    },
  },
  {
    tableName: "Users",
    createdAt: true,
    updatedAt: false,
    alter: true,
  }
);

// Users.sync();

async function addUserToPostgres(User) {
  return await Users.create(User);
}

async function findUser(User) {
  return await Users.findOne({
    where: { emailId: User.emailId, password: User.password },
  });
}

module.exports = { addUserToPostgres, findUser, Users };
