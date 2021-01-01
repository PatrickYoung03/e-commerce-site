const Product = require("../models/product");

module.exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    productCSS: true,
    activeAddProduct: true,
  });
};

module.exports.postAddProduct = (req, res) => {
  const prod = new Product(req.body.title);
  prod.save();
  res.redirect("/");
};

module.exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Patricks shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
