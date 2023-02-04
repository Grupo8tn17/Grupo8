const products = require('../database/products.json');
const fs = require('fs');
const path = require('path');

module.exports = {
    products: () => {
        return products
    }, 

    productsCreate: (req) => {
      let newProduct = {
        id: products.at(-1).id + 1,
        titulo: req.body.name,
        marca: req.body.brand,
        categoria: req.body.category,
        descricao: req.body.description,
        valor: req.body.price,
        quantidade: req.body.stock,
        imagem: req.files[0] ? req.files[0].filename : '',
        imagem2: req.files[1] ? req.files[1].filename : '',
        imagem3: req.files[2] ? req.files[2].filename : '',
      }

      products.push(newProduct);
      fs.writeFileSync(path.join(__dirname, '../database/products.json'), JSON.stringify(products, null, 4))
    }, 

    descriptionProducts: (req) => {
      let found = products.find(product => { product.id == req.body.id
        return found
      })
    }, 

    findByParams: (req) => {
      let found = products.find(product => product.id == req.params.id)
      return found
    }
}

/*const products = require('../database/products.json');
const fs = require('fs');
const path = require('path');

module.exports = {
    products: () => {
        return products;
    },

    saveProducts: function (products) {
      fs.writeFileSync(products, JSON.stringify(products, null, 4));
    },

    productsCreate: (req) => {
      let newProduct = {
        id: products.at(-1).id + 1,
        titulo: req.body.name,
        marca: req.body.brand,
        categoria: req.body.category,
        descricao: req.body.description,
        valor: req.body.price,
        quantidade: req.body.stock,
        imagem: req.files[0] ? req.files[0].filename : '',
        imagem2: req.files[1] ? req.files[1].filename : '',
        imagem3: req.files[2] ? req.files[2].filename : '',
      }

      products.push(newProduct);
      fs.writeFileSync(path.join(__dirname, '../database/products.json'), JSON.stringify(products, null, 4))
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

    findByParams: (req) => {
      let found = products.find(product => product.id == req.params.id)
      return found
    }
}

/*const products = require('../database/products.json');
const fs = require('fs');
const path = require('path');

module.exports = {
    products: () => {
        return products;
    },

    saveProducts: function (products) {
      fs.writeFileSync(products, JSON.stringify(products, null, 4));
    },

    productsCreate: (req) => {
      let newProduct = {
        id: products.at(-1).id + 1,
        titulo: req.body.name,
        marca: req.body.brand,
        categoria: req.body.category,
        descricao: req.body.description,
        valor: req.body.price,
        quantidade: req.body.stock,
        imagem: req.files[0] ? req.files[0].filename : '',
        imagem2: req.files[1] ? req.files[1].filename : '',
        imagem3: req.files[2] ? req.files[2].filename : '',
      }

      products.push(newProduct);
      fs.writeFileSync(path.join(__dirname, '../database/products.json'), JSON.stringify(products, null, 4))
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

    findByParams: (req) => {
      let found = products.find(product => product.id == req.params.id)
      return found
    },

    findProducts: function (id) {
      return this.products().find(product => product.id == id);
    }, 

    deleteProduct: function (id) {
      if(!id) return

      const product = this.products();
      const newProduct = product.filter(products => products.id != id);

      product.push(newProduct);
      fs.writeFileSync(path.join(__dirname, '../database/products.json'), JSON.stringify(products, null, 4))
    }, 

    updateProducts: function (id, {name, category, brand, description, stock, price, images}) {
      if(!id) return 

      if (!name || !category, !brand || !description || !stock || !price || !images) return

      const products = this.products();
      const novoProduto = products.find(product => product.id == id);

      novoProduto.titulo = name;
      novoProduto.categoria = category;
      novoProduto.marca = brand;
      novoProduto.descricao = description;
      novoProduto.quantidade = stock;
      novoProduto.valor = price;
      novoProduto.imagem = images;

      products.push(novoProduto);
      fs.writeFileSync(path.join(__dirname, '../database/products.json'), JSON.stringify(products, null, 4))
    }*/



