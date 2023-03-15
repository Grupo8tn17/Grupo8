const { Produto, Categoria, Marca } = require("../models");
const { validationResult } = require("express-validator");


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
  //renderiza a view home do administrador
  indexAdmin: async (req, res) => {
    const product = await Produto.findAll();

    return res.render("painelAdm-home", {
      product,
      css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
      js: [],
    });
  },
//renderiza a view admin produtos / listar produto
   async adminProducts (req, res)  {
    try{
      const products = await Produto.findAll();
    res.render("panelAdmin-addProducts", {
      errors:{},
      products,
      css: ["panelAdmin-addProducts.css"],
      js: ["panelAdmin-delete.js"],
    });
    } catch (erro) {
      console.log(erro);
      const products = await Produto.findAll();
    res.render("panelAdmin-addProducts", {
      errors: { server: ERRO_500 },
      products,
      css: ["panelAdmin-addProducts.css"],
      js: ["panelAdmin-delete.js"],
    });
    }
    
  },
//renderiza a view novo produto
  addProducts: async (req, res) => {
    const categorias = await Categoria.findAll();
    const marcas = await Marca.findAll();

    //inclusão middleware de validacao:
    let { errors } = validationResult(req);
    console.log(errors, "erro add produto");

    if (errors.length) {
      const errorsFormated = {};
      errors.forEach((error) => (errorsFormated[error.param] = error.msg));

      return res.render("panelAdmin-add", {
        errors: errorsFormated,
        product: req.body,
      });
    }

    res.render("panelAdmin-add", {
      categorias,
      marcas,
      errors: {},
      product: {},
      css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
      js: [],
    });
  },

//criar um produto
  async createProducts(req, res) {
    try {
      let { errors } = validationResult(req);
      console.log(errors, "erro add produto");

      if (errors.length) {
        const errorsFormated = {};
        errors.forEach((error) => (errorsFormated[error.param] = error.msg));

        return res.render("panelAdmin-add", {
          marcas: await Marca.findAll(),
          categorias: await Categoria.findAll(),
          errors: errorsFormated,
          product: req.body,
          css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
          js: ["panelAdmin-validation.js"],
        });
      }

      const { titulo, marca, categoria, descricao, quantidade, valor, ativo } =
        req.body;
      const imagem = req.files[0] ? req.files[0].filename : "";
      const imagem2 = req.files[1] ? req.files[1].filename : "";
      const imagem3 = req.files[2] ? req.files[2].filename : "";
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
      return res.redirect("/admin/products");
    } catch (erro) {
      console.log(erro);
      const categorias = await Categoria.findAll();
      const marcas = await Marca.findAll();
      const resposta = {
        categorias,
        marcas,
        errors: { server: ERRO_400 },
        product: {},
        css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
        js: ["panelAdmin-validation.js"],
      };

      if (erro?.name === "SequelizeValidationError") {
        return res.render("panelAdmin-add", resposta);
      }
      return res.render("panelAdmin-add", resposta);
    }
  },
//renderiza a view excluir produto
  deleteView: async (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, valor, quantidade } = req.body;

    const product = await Produto.findByPk(id);

    return res.render("panelAdmin-delete", {
      product,
      css: ["panelAdmin-delete.css", "panelAdmin-add.css"],
      js: ["panelAdmin-delete.js"],
    });
  },
// exclui um produto
   async  deleteProducts (req, res)  {
    try{
      const { id } = req.params;

      await Produto.destroy({
        where: { idprodutos: id },
      });
  
      return res.redirect("/admin/products");
    } catch (erro) {
      console.log(erro);
      const { id } = req.params;

      await Produto.destroy({
        where: { idprodutos: id },
      });
  
      return res.redirect("/admin/products", {errors: {sever:ERRO_500}});
    }
  },
//renderiza a view editar produto
  updateProducts: async (req, res) => {
    const categorias = await Categoria.findAll();
    const marcas = await Marca.findAll();
    const { id } = req.params;
    let product = null;

    product = await Produto.findByPk(id);

    res.render("panelAdmin-updateProduct", {
      product,
      categorias,
      marcas,
      errors: {},
      css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
      js: ["panelAdmin-validation.js"],
    });
  },
// edita um produto
  async update (req, res)  {
    try{
      const { id } = req.params;
    const { titulo, marca, categoria, descricao, quantidade, valor, ativo } =
      req.body;


    await Produto.update(
      {
        titulo,
        marcas_idmarcas: marca,
        categorias_idcategorias: categoria,
        descricao,
        quantidade,
        valor,
        
        ativo,
       
      },
      {
        where: { idprodutos: id },
      }
    );
    return res.redirect("/admin/products");
    } catch (erro) {
      console.log(erro);
      const categorias = await Categoria.findAll();
      const marcas = await Marca.findAll();
      const resposta = {
        categorias,
        marcas,
        errors: { server: ERRO_400 },
        product: {},
        css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
        js: ["panelAdmin-validation.js"],
      };

      if (erro?.name === "SequelizeValidationError") {
        return res.render("panelAdmin-add", resposta);
      }
      return res.render("panelAdmin-add", resposta);
    }
  },

  //Categorias

  adminCategorias: async (req, res) => {
    const categorias = await Categoria.findAll();

    return res.render("panelAdmin-Categoria", {
      categorias,
      css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
      js: ["panelAdmin-validation.js"],
    });
  },

  addCategoria: (req, res) => {
    res.render("panelAdmin-addCategoria", {
      erros: {},
      categorias: false,
      css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
      js: ["panelAdmin-validation.js"],
    });
  },

  createCategoria: async (req, res) => {
    const { nome } = req.body;

    await Categoria.create({ nome });

    res.redirect("/admin/categorias");
  },

  updateCategoriaView: async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    let categorias = await Categoria.findByPk(id);

    await Categoria.update({ nome }, { where: { idcategorias: id } });
    res.render("panelAdmin-addCategoria", {
      categorias,
      css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
      js: ["panelAdmin-validation.js"],
    });
  },

  updateCategoria: async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;

    await Categoria.update(
      {
        nome,
      },
      {
        where: { idcategorias: id },
      }
    );

    return res.redirect("/admin/categorias");
  },

  deleteCategoria: async (req, res) => {
    const { id } = req.params;

    await Categoria.destroy({
      where: { idcategorias: id },
    });

    res.redirect("/admin/categorias");
  },

  adminMarcas: async (req, res) => {
    const marcas = await Marca.findAll();
    return res.render("panelAdmin-Marcas", {
      marcas,
      css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
      js: ["panelAdmin-validation.js"],
    });
  },

  addMarcas: (req, res) => {
    res.render("panelAdmin-addMarcas", {
      erros: {},
      marcas: false,
      css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
      js: ["panelAdmin-validation.js"],
    });
  },

  createMarcas: async (req, res) => {
    const { nome, cnpj, endereco } = req.body;

    await Marca.create({ nome, cnpj, endereco });

    return res.redirect("/admin/marcas");
  },

  updateMarcasView: async (req, res) => {
    const { id } = req.params;
    let marcas = await Marca.findByPk(id);

    res.render("panelAdmin-addMarcas", {
      marcas,
      css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
      js: ["panelAdmin-validation.js"],
    });
  },

  updateMarcas: async (req, res) => {
    const { id } = req.params;
    const { nome, cnpj, endereco } = req.body;

    await Marca.update({ nome, cnpj, endereco }, { where: { idmarcas: id } });
    return res.redirect("/admin/marcas");
  },

  deleteMarcas: async (req, res) => {
    const { id } = req.params;

    await Marca.destroy({ where: { idmarcas: id } });

    res.redirect("/admin/marcas");
  },
};
