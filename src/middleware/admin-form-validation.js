const { check } = require('express-validator');

module.exports = [
    check('name')
    .notEmpty().withMessage('O campo "Nome do produto" não pode estar vazio').bail()
    .isLength({ min: 2, max: 100}).withMessage('O campo "Nome" deve pussuir entre 2 e 100 caracteres'),

    check('category')
    .notEmpty().withMessage('O campo "Categoria" não pode estar vazio'),

    check('brand')
    .notEmpty().withMessage('O campo "Marca" não pode estar vazio'),

    check('description')
    .notEmpty().withMessage('O campo "Descrição do Produto" não pode estar vazio').bail()
    .isLength({ min: 10}).withMessage('O campo "Descrição do Produto" deve pussuir no mínimo 10 caracteres'),

    check('stock')
    .notEmpty().withMessage('O campo "Estoque Disponível" não pode estar vazio'),

    check('price')
    .notEmpty().withMessage('O campo "Preço" não pode estar vazio').bail()
    .isCurrency({ thousands_separator: '.', decimal_separator: ',', digits_after_decimal: [2] }).withMessage('O campo "Preço" deve ser preenchido corretamente - ex. 0,00')  
]