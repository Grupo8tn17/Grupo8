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
<<<<<<< HEAD
    },

    
=======
    }, 
>>>>>>> 94bfb64d30aa369b04f6b05df116e8409650e2cf
};
