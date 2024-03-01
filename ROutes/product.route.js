const express = require("express");
const Product = require('../models/product.models.js')
const router = express.Router();
const {getProd,getProducts, createProduct, deleteProd, updateProd } = require('../controlller/product.controller.js')





router.get('/', getProducts);

router.get("/:id", getProd);

router.post("/", createProduct);

// update a product
router.put("/:id", updateProd);

// delete a product
router.delete("/:id", deleteProd);


module.exports =router;
