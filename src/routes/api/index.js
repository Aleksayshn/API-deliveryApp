const usersRouter = require("./users");
const authRouter = require("./auth");
const categoriesRouter = require("./categories");
const productsRouter = require("./products");


module.exports = {
    authRouter,
    usersRouter,
    categoriesRouter,
    productsRouter,
};