const productsModel = require("../models/productsModel");

//importar bibliotecas necessárias ao middleware:
const { validationResult } = require("express-validator");

module.exports = {
  indexAdmin: (req, res) => {
    res.render("panelAdmin-home");
  },

  adminProducts: (req, res) => {
    const products = productsModel.products();
    res.render("panelAdmin-addProducts", { products });
  },

  addProducts: (req, res) => {
    res.render("panelAdmin-add");
  },

  //inserir as mudanças do middleware no createProducts
  createProducts: (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("panelAdmin-add", {
        errors: errors.mapped(),
        old: req.body,
      });
    } else {
      productsModel.productsCreate(req);
      res.redirect("/admin/products");
    }
  },
};
