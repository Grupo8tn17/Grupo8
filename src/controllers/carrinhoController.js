const { pesquisaPorCep } = require("../services/request/endereco");

const ERRO_500 = 'Erro interno do servidor!';
const ERRO_404 = 'Cep não encontrado!';
const ERRO_400 = 'Request inválido!';

let fretePorEstado = [
  {uf: "BA", frete: 47.00, prazo: "23 dia úteis" },
  {uf: "SE", frete: 50.00, prazo: "22 dia úteis" },
  {uf: "AL", frete: 53.00, prazo: "24 dia úteis" },
  {uf: "PB", frete: 52.00, prazo: "21 dia úteis" },
  {uf: "PE", frete: 49.00, prazo: "23 dia úteis" },
  {uf: "RN", frete: 48.90, prazo: "22 dia úteis" },
  {uf: "MA", frete: 47.90, prazo: "25 dia úteis" },
  {uf: "CE", frete: 49.00, prazo: "22 dia úteis" },
  {uf: "PI", frete: 50.00, prazo: "24 dia úteis" },
  {uf: "PA", frete: 44.50, prazo: "20 dia úteis" },
  {uf: "AP", frete: 47.00, prazo: "20 dia úteis" },
  {uf: "AM", frete: 43.90, prazo: "20 dia úteis" },
  {uf: "RR", frete: 42.50, prazo: "20 dia úteis" },
  {uf: "AC", frete: 46.00, prazo: "23 dia úteis" },
  {uf: "RO", frete: 45.50, prazo: "23 dia úteis" },
  {uf: "TO", frete: 48.00, prazo: "23 dia úteis" },
  {uf: "DF", frete: 34.50, prazo: "15 dia úteis" },
  {uf: "GO", frete: 35.00, prazo: "15 dia úteis" },
  {uf: "MT", frete: 36.90, prazo: "15 dia úteis" },
  {uf: "MS", frete: 38.50, prazo: "15 dia úteis"},
  {uf: "ES", frete: 14.50, prazo: "5 dia úteis" },
  {uf: "SP", frete: 10.00, prazo: "5 dia úteis" },
  {uf: "RJ", frete: 16.90, prazo: "5 dia úteis" },
  {uf: "MG", frete: 18.50, prazo: "5 dia úteis" },
  {uf: "RS", frete: 26.90, prazo: "10 dia úteis" },
  {uf: "PR", frete: 20.00, prazo: "10 dia úteis" },
  {uf: "SC", frete: 24.50, prazo: "10 dia úteis" },  
];


module.exports = {
  mostraCarrinho: (req, res) => {
    res.render("carrinho", {
      css: ["style.css", "carrinho.css", "cabecalho-alternativo.css"],
      js: ["carrinho.js"],
      valorFrete: null,
    });
  },

  calcularFrete: async (req, res) => {
    try {
      const { cep } = req.query;
      const { uf } = await pesquisaPorCep(cep);
      const valorFrete = fretePorEstado.filter((item) => item.uf === uf);
      return res.render("carrinho", {
        css: ["style.css", "carrinho.css", "cabecalho-alternativo.css"],
        js: ["carrinho.js"],
        valorFrete,
      });
    } catch (erro) {
      console.log(erro);
      if (erro?.name === "NOT_FOUND") {
        return res.status(404).json({ mensagem: erro.message });
      }

      return res.status(500).json({ mensagem: ERRO_500 });
    }
  },
};
