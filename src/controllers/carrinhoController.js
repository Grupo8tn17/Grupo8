const { pesquisaPorCep } = require("../services/request/endereco");

const ERRO_500 = 'Erro interno do servidor!';
const ERRO_404 = 'Cep não encontrado!';
const ERRO_400 = 'Request inválido!';

const valoresFretePorRegiao = {
    'SP': 'R$ 19,90',
    'RS': 'R$ 39,90',
    'Outros': 'R$ 49,90'    
}

module.exports = {
    mostraCarrinho: (req, res) => {
        res.render('carrinho', {css: ['style.css', 'carrinho.css', 'cabecalho-alternativo.css'], js: ["carrinho.js"], valorFrete: null})
    },

    

   obterEnderecoPorCep: async (req, res) => {
    try {
      const { cep } = req.query;
      const endereco = await pesquisaPorCep(cep);

      return res.render('carrinho', endereco);
      
    } catch (erro) {
      console.log(erro);
      if (erro?.name === "NOT_FOUND") {
        return res.status(404).json({ mensagem: erro.message });
      }

      return res.status(500).json({ mensagem: ERRO_500 });
    }
  },

   calcularFrete: async (req, res) => {
    try {
        const { cep } = req.query;
        const { uf } = await pesquisaPorCep(cep);
        const regiaoConhecida = uf in valoresFretePorRegiao;
        const valorFrete = valoresFretePorRegiao [regiaoConhecida ? uf : 'Outros'];

        return res.render('carrinho', {css: ['style.css', 'carrinho.css', 'cabecalho-alternativo.css'], js: ["carrinho.js"], valorFrete});
        
    } catch (erro) {
        console.log(erro);
        if (erro?.name === "NOT_FOUND") {
        return res.status(404).json({ mensagem: erro.message });
      }

      return res.status(500).json({ mensagem: ERRO_500 });
    }       
    
  }
};
