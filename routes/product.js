const express = require("express");

const productController = require("../controller/product");

const router = express.Router();

//       C R U D
// MVC  (Model-View-Controller)
router
  .post("/", productController.createProduct)
  .get("/", productController.getAllProducts)
  .get("/:id", productController.getProduct)
  .put("/:id", productController.replaceProduct)
  .patch("/:id", productController.updateProduct)
.delete("/:id", productController.deleteProduct);

exports.router = router