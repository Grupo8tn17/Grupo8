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


