const Hapi = require("@hapi/hapi");
const {
  getProductDataFromPostgres,
  addUser,
  authenticateUser,
  editProduct,
  deleteProduct,
  addProduct,
  addToCart,
  getCartQuantityinDB,
} = require("./handler");
const Joi = require("joi");

const startServer = async () => {
  const server = Hapi.server({
    port: 5500,
    host: "localhost",
    routes: {
      cors: {
        origin: ["http://localhost:3000"],
        credentials: true,
      },
    },
  });

  await server.start();
  console.log("Server running on port 5500");

  server.route({
    method: "GET",
    path: "/products",
    handler: getProductDataFromPostgres,
  });

  server.route({
    method: "POST",
    path: "/signup",
    handler: addUser,
    options: {
      validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          phone: Joi.string().required(),
          mail: Joi.string().email().required(),
          password: Joi.string().required(),
        }),
      },
    },
  });

  server.route({
    method: "POST",
    path: "/signin",
    handler: authenticateUser,
    options: {
      validate: {
        payload: Joi.object({
          email: Joi.string().email().required(),
          password: Joi.string().required(),
        }),
      },
    },
  });

  server.route({
    method: "POST",
    path: "/edit",
    handler: editProduct,
    options: {
      validate: {
        payload: Joi.object({
          productId: Joi.number().required(),
          productName: Joi.string().required(),
          productPrice: Joi.number().required(),
          productCategory: Joi.string().required(),
        }),
      },
    },
  });

  server.route({
    method: "POST",
    path: "/delete",
    handler: deleteProduct,
    options: {
      validate: {
        payload: Joi.object({
          productId: Joi.number().required(),
        }),
      },
    },
  });

  server.route({
    method: "POST",
    path: "/add",
    handler: addProduct,
    options: {
      validate: {
        payload: Joi.object({
          createdBy: Joi.number().required(),
          productName: Joi.string().required(),
          productPrice: Joi.number().required(),
          productCategory: Joi.number().required(),
          productImageUrl: Joi.string().required(),
        }),
      },
    },
  });

  server.route({
    method: "POST",
    path: "/addtocart",
    handler: addToCart,
    options: {
      validate: {
        payload: Joi.object({
          userId: Joi.number().required(),
          productId: Joi.number().required(),
          productQuantity: Joi.number().required(),
        }),
      },
    },
  });

  server.route({
    method:"POST",
    path:"/getCartQuantityFromDB",
    handler: getCartQuantityinDB,
    options:{
      validate:{
        payload: Joi.object({
          userId: Joi.number().required(),
        })
      }
    }
  })
};

module.exports = startServer;
