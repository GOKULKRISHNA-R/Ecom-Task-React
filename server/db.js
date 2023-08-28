const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ecom_task", "gokulkrishnaraju", "123456789", {
  host: "localhost",
  dialect: "postgres",
});

async function dbConnect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { sequelize, dbConnect };
