const express = require("express");

const router = express.Router();

const productController = require("../controllers/product.controller");

router.post("/products", productController.createProduct);//create all product

router.get("/products", productController.allProducts);//user to get all products details

router.put("/products/:id", productController.updateProduct);

router.delete("/products/:id", productController.deleteProduct);

router.get("/products/:id", productController.singleProduct);

module.exports = router;//this should be the last line as all the routes above it will be export by this command