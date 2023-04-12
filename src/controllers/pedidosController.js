const { log } = require("console");
const {
  Produto,
  Categoria,
  Marca,
  Usuario,
  Endereco,
  Pedido,
  ProdutosPedidos,
} = require("../models");
const { Op } = require("sequelize");

module.exports = {
  compra: async (req, res) => {
    try {
      if(req.session.login) {
        let { produtos, frete, prazo } = req.body;

    if (frete) {
      let parsedProdutos = JSON.parse(produtos);
      req.session.produtos = parsedProdutos;
      req.session.frete = frete;
      req.session.prazo = prazo;
      console.log(parsedProdutos)
      if (req.session.login) {
        let idUsuario = req.session.login;
        let enderecos = await Endereco.findAll({
          include: [{ model: Usuario, as: "usuarios" }],
          where: { usuarios_idusuarios: idUsuario },
        });
        let usuario = await Usuario.findAll({where: {idusuarios: idUsuario}});
        return res.render("compra", {
          enderecos,
          usuario,
          produtos: parsedProdutos,
          frete,
          prazo,
          css: ["style.css", "compra.css"],
          js: ["compra.js"],
        });
      } else {
        return res.render("login-carrinho", {
          erro: {},
          errors: {},
          css: ["style.css", "login.css"],
          js: "",
        });
      }
    } else {
      let erro = {
        msg: "Favor preencher o campo de Frete",
      };
      return res.render("carrinho", {
        css: ["style.css", "carrinho.css", "cabecalho-alternativo.css"],
        js: ["carrinho.js"],
        valorFrete: null,
        prazo: null,
        erro,
      });
    }
      } else {
        return res.redirect('/login-carrinho');
      }
      
    } catch (error) {
     console.log(error) 
    }
  },

  finalizacaoCompra: async (req, res) => {
    try {
      const {
        subtotal,
        total,
        valor_frete,
        data_pedido,
        Arrayidprodutos,
        Arrayquantidades,
        produtosLocal,
      } = req.body;
      let produtosParsed = JSON.parse(produtosLocal);
      var idprodutos
      let numeroPedido = Math.floor(Math.random() * 65536);
      if(typeof Arrayidprodutos == "string") {
        idprodutos = [Arrayidprodutos];
      } else {
        idprodutos = Arrayidprodutos;
      }
      console.log(idprodutos);
      console.log(Arrayquantidades);
  
      //Adiciona na tabela de pedido
      if (req.session.login) {
        var endereco = await Endereco.findAll({
          include: [{ model: Usuario, as: "usuarios" }],
          where: { usuarios_idusuarios: req.session.login },
        });
        var pedidos = await Pedido.create({
          subtotal,
          total,
          valor_frete,
          data_pedido,
          usuarios_idusuarios: req.session.login,
          codigo_pedido: numeroPedido,
        });
        var findPedido = await Pedido.findAll({
          where: { codigo_pedido: numeroPedido },
        });
        console.log(findPedido[0].idpedidos);
  
        if (findPedido) {
            for (let index = 0; index < idprodutos.length; index++) {
              const idproduto = idprodutos[index];
              await ProdutosPedidos.create({
                produtos_idprodutos: idproduto,
                usuarios_idusuarios: req.session.login,
                pedidos_idpedidos: findPedido[0].idpedidos,
              });
              console.log("Deu certo");
  
            }
  
              produtosParsed.forEach(async produtoParsed => {
                await Produto.increment({quantidade: -produtoParsed.quantity}, {where: {idprodutos: produtoParsed.id}});
              });
            }
  
  
        
      } else {
        res.redirect("/login");
        console.log("não adicionou no banco");
      }

      res.render("finalizacao-compra", {
        produtos: produtosParsed,
        Arrayquantidades,
        findPedido,
        endereco,
        css: ["style.css", "finaliza-compra.css"],
        js: ["finalizacao-compra.js", "compra.js"],
      });
    } catch (error) {
      console.log(error);
    }
  },

  resumoPedido: async (req, res) => {
    try {
      const {id} = req.params;
      console.log('id',id)
      // const pedidos = await Pedido.findAll({
      //   where:{ idpedidos: id}
      // });
      // console.log('pedidos',pedidos);
      const produtosPedidos = await ProdutosPedidos.findAll({include: [{model: Produto, as: 'produtos'}, {model: Pedido, as: 'pedidos'}],
        where: {pedidos_idpedidos: id}
      });
      console.log('aqui é produtos pedidos', produtosPedidos);
      // console.log('produtosPedidos: idprodutos', produtosPedidos[0].produtos_idprodutos);
      // const produtos = await Produto.findAll();
      // console.log('produto. id', produtos[0].idprodutos);
      // const produtosDoPedido = produtos.map(() => {

      // })


      res.render("resumo-pedido", {
        produtosPedidos,
        css: ["style.css", "finaliza-compra.css"],
        js: []
      })


    } catch (error) {
      console.log(error);
    }
  }
};
