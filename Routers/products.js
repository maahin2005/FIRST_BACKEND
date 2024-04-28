const { Router } = require("express");
const getProducts = require("../Controllers/Products/getProducts");
const createProducts = require("../Controllers/Products/createProducts");
const updateProducts = require("../Controllers/Products/updateProducts");
const deleteProducts = require("../Controllers/Products/deleteProducts");
const authentication = require("../Middleware/auth");

const productRouter = Router();

productRouter.get("/", authentication, getProducts);
productRouter.post("/create", authentication, createProducts);
productRouter.patch("/update/:id", authentication, updateProducts);
productRouter.delete("/delete/:id", authentication, deleteProducts);

module.exports = productRouter;
