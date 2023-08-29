const { getProducts } = require("./models/Products");

const getDataFromPostgres = async () => {
    const data = await getProducts();
    return data ;
} 

module.exports = {getDataFromPostgres} ;