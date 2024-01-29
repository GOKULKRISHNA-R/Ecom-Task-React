const { DataTypes, where } = require("sequelize");
const { Sequelize: sequelize } = require("../db");
const { Users } = require("./users");

const Cart = sequelize.define(
  "Cart",
  {
    cartProducts: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  },
  {
    tableName: "Cart",
    alter: true,
    timestamps: false,
  }
);

Cart.belongsTo(Users, { foreignKey: "userId" });

const getCartinDB = async (id) => {
  const a = await Cart.findOne({ where: { userId: id } });
  return a.dataValues.cartProducts;
};

const addToCartinDB = async (data) => {
  const cartPrdts = await getCartinDB(data.userId);
  const pid = data.productId;
  const a = await Cart.update(
    { cartProducts: { ...cartPrdts, [pid]: data.productQuantity } },
    { where: { userId: data.userId } }
  )
    .then((e) => e)
    .catch((e) => e);
  if(a[0] === 1) return await getCartinDB(data.userId) ;
  return a;
};

// Cart.sync();

module.exports = { Cart, addToCartinDB, getCartinDB };
