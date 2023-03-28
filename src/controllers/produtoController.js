const { Produto, Categoria, Marca } = require('../models');
const { validationResult } = require('express-validator');

const ERRO_500 = "Erro interno do servidor!";
const ERRO_404 = "Produto não encontrado!";
const ERRO_400 = "Request inválido!";

class NotFoundError extends Error {
  constructor() {
    super(ERRO_404);
    this.name = "NOT_FOUND";
  }
}

module.exports = {

  mostrarProdutos: async (req, res) => {
    const categoria = await Categoria.findAll();
    const marca = await Marca.findAll();
    const products = await Produto.findAll();
    return res.render('produtos', { categoria: categoria, marca: marca, products: products, css: ['style.css', 'produtos.css'], js: ['produtos.js'] });
  },

  async mostraProdutosAdmin (req, res) {
    try {
      const products = await Produto.findAll();
    res.render("painelAdmin-produto", {errors: [],
      products,
      css: ["painelAdmin-adiciona-produto.css"],
      js: ["painelAdmin-excluir.js"],
    });
   } catch (erro) {
    console.log(erro);
      
    if (erro?.name === "SequelizeConnectionRefusedError"){
      res.render("painelAdmin-produto", {
        errors:{server: ERRO_500},
        products: [],
        css: ["painelAdmin-adiciona-produto.css"],
      js: ["painelAdmin-excluir.js"],
      });
    }
    }
    
  },

  adicionaProduto: async (req, res) => {
    //inlcui array de erros
    const categorias = await Categoria.findAll();
    const marcas = await Marca.findAll();

    res.render("painelAdmin-adicionaProduto", {
      categorias,
      marcas,
      errors: {},
      product: {},
      css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
      js: ["painelAdmin-validacao.js"],
    });
  },

  async  criaProdutos (req, res) {
    try {
      const { titulo, marca, categoria, descricao, quantidade, valor, ativo } = req.body;
      const imagem = req.files[0] ? req.files[0].filename : "";
      const imagem2 = req.files[1] ? req.files[1].filename : "";
      const imagem3 = req.files[2] ? req.files[2].filename : "";

      const categorias = await Categoria.findAll();
      const marcas = await Marca.findAll();

      //inclusão middleware de validacao:
      let { errors } = validationResult(req);

      if (errors.length) {
        const errorsFormated = {};
        errors.forEach((error) => (errorsFormated[error.param] = error.msg));

        return res.render('painelAdmin-adicionaProduto', {
          categorias,
          marcas,
          errors: errorsFormated,
          product: req.body,
          css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
          js: ['painelAdmin-validacao.js']
        });
      }

      await Produto.create({
        titulo,
        marcas_idmarcas: marca,
        categorias_idcategorias: categoria,
        descricao,
        quantidade,
        valor,
        imagem,
        ativo,
        imagem2,
        imagem3,
      });
      res.redirect("/admin/produtos");

    } catch (erro) {

      console.log(erro);
      const categorias = await Categoria.findAll();
      const marcas = await Marca.findAll();
      const resposta = {
        categorias,
        marcas,
        errors: { server: ERRO_400 },
        product: {},
        css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
          js: ['painelAdmin-validacao.js'],
      };

      if (erro?.name === "SequelizeValidationError") {
        return res.render("painelAdmin-produto", resposta);
      }
      return res.render("painelAdmin-produto", resposta);
    }

  },

  mostraExcluirProduto: async (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, valor, quantidade } = req.body;


    const product = await Produto.findByPk(id);


    return res.render("painelAdmin-excluirProduto", {
      product,
      css: ["painelAdmin-excluir.css", "painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
      js: ["painelAdmin-excluir.js"]
    });
  },

  async excluirProduto (req, res) {
    try {
      const { id } = req.params;


    await Produto.destroy({
      where: { idprodutos: id },
    });

    return res.redirect("/admin/produtos");
    } catch (erro) {
      console.log(erro);
      if (erro?.name === "SequelizeConnectionRefusedError"){
        res.render("painelAdmin-produto", {
          errors:{server: ERRO_500},
          products: [],
          css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
          js: ['painelAdmin-validacao.js'],
        });
      } 
    }
    },
    

  mostraeditarProduto: async (req, res) => {
    const categorias = await Categoria.findAll();
    const marcas = await Marca.findAll();
    const { id } = req.params;
    let product = null;

    product = await Produto.findByPk(id);

    res.render("painelAdmin-editarProduto", {
      product,
      categorias,
      marcas,
      errors: {},
      css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
      js: ["painelAdmin-validacao.js"],
    })
  },

  async editarProduto (req, res) {

    try{
      const { id } = req.params;
    const { titulo, marca, categoria, descricao, quantidade, valor, ativo } = req.body;
    const imagem = req.files[0] ? req.files[0].filename : "";
    const imagem2 = req.files[1] ? req.files[1].filename : "";
    const imagem3 = req.files[2] ? req.files[2].filename : "";


    await Produto.update(
      {
        titulo,
        marcas_idmarcas: marca,
        categorias_idcategorias: categoria,
        descricao,
        quantidade,
        valor,
        imagem,
        ativo,
        imagem2,
        imagem3
      },
      {
        where: { idprodutos: id },
      }
    );
    return res.redirect("/admin/produtos");
    } catch (erro) {
      console.log(erro);
      if (erro?.name === "SequelizeConnectionRefusedError"){
        res.render("painelAdmin-produto", {
          errors:{server: ERRO_500},
          products: [],
          css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
          js: ['painelAdmin-validacao.js'],
        });
      } 
    }
    
  },

  mostraDescricaoProduto: async (req, res) => {
    const { id } = req.params;
    const listproducts = await Produto.findAll({ where: { idprodutos: id } });
    res.render('descricao-produto', { listproducts: listproducts, css: ['style.css', 'descricao-produto.css'], js: ['descricao-produto.js', 'adiciona-carrinho.js'] })
  },

  mostraCabelos: async (req, res) => {
    const categoria = await Categoria.findAll();
    const marca = await Marca.findAll()
    let products = await Produto.findAll({
      include: [{
        model: Categoria, as: 'categorias',
        attributes: ['nome'], where: { nome: 'Cabelos' }
      }],
    });
    res.render('produtos', {categoria: categoria, marca: marca, products, css: ['style.css', 'produtos.css'], js: ['parcelamento.js'] });
  },

  mostraTratamentos: async (req, res) => {
    const categoria = await Categoria.findAll();
    const marca = await Marca.findAll()
    let products = await Produto.findAll({
      include: [{
        model: Categoria, as: 'categorias',
        attributes: ['nome'], where: { nome: 'Tratamentos' }
      }],
    });
    res.render('produtos', {categoria: categoria, marca: marca, products, css: ['style.css', 'produtos.css'], js: '' });
  },

  mostraMaquiagem: async (req, res) => {
    const categoria = await Categoria.findAll();
    const marca = await Marca.findAll()
    let products = await Produto.findAll({
      include: [{
        model: Categoria, as: 'categorias',
        attributes: ['nome'], where: { nome: 'Maquiagem' }
      }],
    });
    res.render('produtos', {categoria: categoria, marca: marca, products, css: ['style.css', 'produtos.css'], js: '' });
  }
}