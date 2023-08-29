const Hapi = require("@hapi/hapi");
const { getDataFromPostgres } = require("./handler");


const startServer = async () => {

    const server = Hapi.server({
        port: 5500,
        host: 'localhost'
    });

    await server.start();
    console.log('Server running on port 5500');
    
    server.route({
      method: "GET",
      path: "/",
      handler: getDataFromPostgres
      
    });
};

module.exports = startServer ;