const { check } = require('express-validator');

module.exports = [
    check('nome')
        .notEmpty().withMessage('O campo Nome não pode estar vazio').bail(),

    check('sobrenome')
    .notEmpty().withMessage('O campo Sobrenome não pode estar vazio'),

    check('documento_usuario')
    .notEmpty().withMessage('O campo CPF não pode estar vazio').bail()
    .isLength({ min: 11, max: 11}).withMessage('O campo CPF precisa ter 11 digitos'),

    check('telefone')
        .notEmpty().withMessage('O campo telefone não pode estar vazio').bail()
        .isLength({ min: 11, max: 11}).withMessage('O campo telefone precisa ter 11 digitos'),


    check('email')
        .notEmpty().withMessage('O campo email não pode estar vazio').bail()
        .isEmail().withMessage('Esse não é um email válido'),

    check('senha')
        .notEmpty().withMessage('O campo senha não pode estar vazio').bail()
        .isLength({ min: 8}).withMessage('Campo senha precisa ter pelo menos 8 caracteres'),
        

    check('senha2')
        .notEmpty().withMessage('O campo senha não pode estar vazio').bail()
        .isLength({ min: 8}).withMessage('Campo senha precisa ter pelo menos 8 caracteres')
]