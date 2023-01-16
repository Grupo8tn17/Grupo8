const { check } = require('express-validator')

module.exports = [
    check('name')
    .notEmpty().withMessage('O campo "Nome do produto" não pode estar vazio').bail()
    .isLength({ min: 3, max: 50}).withMessage('O campo "Nome" deve pussuir entre 3 e 50 caracteres'),

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
    .isCurrency(str [{ thousands_separator: ',', digits_after_decimal: [2], allow_space_after_digits: false }]).withMessage('O campo "Preço" deve ser preenchido corretamente - ex. 0,00'),

    check('images')
    .notEmpty().withMessage('Precisa inserir a imagem do produto'),
]