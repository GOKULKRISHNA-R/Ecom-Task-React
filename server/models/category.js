const { DataTypes } = require("sequelize");
const { sequelize } = require("../db"); 

const category = sequelize.define("category", {
  categoryId: {
    type: DataTypes.BIGINT,
    primaryKey: true,
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  tableName: "category",
  timestamps: false,
});

category.sync().then((e) => {
  console.log(e);
})

module.exports = category;
