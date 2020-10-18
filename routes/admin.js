const path = require("path");
const express = require("express");

const router = express.Router();
const products = [];

const rootDir = require("../util/path");
// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/product => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  console.log(req.body);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
