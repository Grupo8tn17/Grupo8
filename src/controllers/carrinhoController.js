const { pesquisaPorCep } = require("../services/request/endereco");
const { Produto, Categoria, Marca } = require('../models');

const ERRO_500 = "Erro interno do servidor!";
const ERRO_404 = "Cep não encontrado!";
const ERRO_400 = "Request inválido!";

let fretePorEstado = [
  { uf: "BA", frete: 47.0, prazo: "23 dia úteis" },
  { uf: "SE", frete: 50.0, prazo: "22 dia úteis" },
  { uf: "AL", frete: 53.0, prazo: "24 dia úteis" },
  { uf: "PB", frete: 52.0, prazo: "21 dia úteis" },
  { uf: "PE", frete: 49.0, prazo: "23 dia úteis" },
  { uf: "RN", frete: 48.9, prazo: "22 dia úteis" },
  { uf: "MA", frete: 47.9, prazo: "25 dia úteis" },
  { uf: "CE", frete: 49.0, prazo: "22 dia úteis" },
  { uf: "PI", frete: 50.0, prazo: "24 dia úteis" },
  { uf: "PA", frete: 44.5, prazo: "20 dia úteis" },
  { uf: "AP", frete: 47.0, prazo: "20 dia úteis" },
  { uf: "AM", frete: 43.9, prazo: "20 dia úteis" },
  { uf: "RR", frete: 42.5, prazo: "20 dia úteis" },
  { uf: "AC", frete: 46.0, prazo: "23 dia úteis" },
  { uf: "RO", frete: 45.5, prazo: "23 dia úteis" },
  { uf: "TO", frete: 48.0, prazo: "23 dia úteis" },
  { uf: "DF", frete: 34.5, prazo: "15 dia úteis" },
  { uf: "GO", frete: 35.0, prazo: "15 dia úteis" },
  { uf: "MT", frete: 36.9, prazo: "15 dia úteis" },
  { uf: "MS", frete: 38.5, prazo: "15 dia úteis" },
  { uf: "ES", frete: 14.5, prazo: "5 dia úteis" },
  { uf: "SP", frete: 10.0, prazo: "5 dia úteis" },
  { uf: "RJ", frete: 16.9, prazo: "5 dia úteis" },
  { uf: "MG", frete: 18.5, prazo: "5 dia úteis" },
  { uf: "RS", frete: 26.9, prazo: "10 dia úteis" },
  { uf: "PR", frete: 20.0, prazo: "10 dia úteis" },
  { uf: "SC", frete: 24.5, prazo: "10 dia úteis" },
];

module.exports = {
  mostraCarrinho: (req, res) => {
    res.render("carrinho", {
      css: ["style.css", "carrinho.css", "cabecalho-alternativo.css"],
      js: ["carrinho.js"],
      valorFrete: null,
      prazo: null, 
      erro: []      
    });
  },

  calcularFrete: async (req, res) => {
    try {
      const { cep } = req.query;
      const { uf } = await pesquisaPorCep(cep);
      const selecaoEstado = fretePorEstado.filter((item) => item.uf === uf);
      
      let valorFrete = selecaoEstado[0]?.frete;
      let prazo = selecaoEstado[0]?.prazo; 
          
      return res.render("carrinho", {
        css: ["style.css", "carrinho.css", "cabecalho-alternativo.css"],
        js: ["carrinho.js"],
        valorFrete,
        prazo,
        erro: []
      });
    } catch (erro) {
      console.log(erro?.code);
      if (erro?.name === "NOT_FOUND") {
        return res.status(404).json({ mensagem: erro.message });
      }
      if (erro?.code === "ERR_BAD_REQUEST") {
        valorFrete = null;
        prazo = null;
        return res.render("carrinho", {
          css: ["style.css", "carrinho.css", "cabecalho-alternativo.css"],
          js: ["carrinho.js"],
          valorFrete,
          prazo,                   
        });        
      }

      return res.status(500).json({ mensagem: ERRO_500 });
    }
  },

};
