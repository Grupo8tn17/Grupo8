const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const productsList = path.join(__dirname, '../database/products.json')

module.exports = {
    products: function () {
        return JSON.parse(fs.readFileSync(productsList));
    }, 

    saveProducts: function (products) {
      fs.writeFileSync(productsList, JSON.stringify(products, null, 4));
    },

    productsCreate: function ({name, category, brand, description, stock, price, images}) {
        if (!name || !category, !brand || !description || !stock || !price || !images) return 

        const product = this.products();

        product.push({id: uuidv4(), name, category, brand, description, stock, price, images});
        this.saveProducts(product);
    }, 

    descriptionProducts: (req) => {
      let found = products.find(product => { product.id == req.body.id
        return found
      })
    }, 

    findProducts: function (id) {
      return this.products().find(product => product.id == id);
    }, 

    deleteProduct: function (id) {
      if(!id) return

      const product = this.products();
      const newProduct = product.filter(products => products.id != id);

      this.saveProducts(newProduct);

    }, 

    updateProducts: function (id, {name, category, brand, description, stock, price, images}) {
      if(!id) return 

      if (!name || !category, !brand || !description || !stock || !price || !images) return

      const products = this.products();
      const newProduct = products.find(product => product.id == id);

      newProduct.name = name;
      newProduct.category = category;
      newProduct.brand = brand;
      newProduct.description = description;
      newProduct.stock = stock;
      newProduct.price = price;
      newProduct.images = images;

      this.saveProducts(products);
    }
}


