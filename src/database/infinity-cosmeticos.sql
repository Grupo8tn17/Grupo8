CREATE DATABASE infinity_cosmeticos;

USE infinity_cosmeticos;

CREATE TABLE produtos (
	idprodutos INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    titulo VARCHAR(255) NOT NULL, 
    descricao LONGTEXT NOT NULL, 
    valor DECIMAL(5,2) NOT NULL, 
    quantidade INT NOT NULL, 
    imagem VARCHAR(255) NOT NULL,
    marca VARCHAR(150) NOT NULL, 
    categorias_idcategorias INT UNSIGNED NOT NULL,
    marcas_idmarca INT UNSIGNED NOT NULL,
    ativo TINYINT NOT NULL,
    imagem2 VARCHAR(255) NOT NULL,
    imagem3 VARCHAR(255) NOT NULL,
    FOREIGN KEY (categorias_idcategorias) REFERENCES categorias(idcategorias),
    FOREIGN KEY (marcas_idmarca) REFERENCES marcas(idmarca)
);


CREATE TABLE categorias (
	idcategorias INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(45) NOT NULL
);

CREATE TABLE carrinho ( 
	idcarrinho INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    valor_total DECIMAL(5,2) NOT NULL, 
    quantidade INT NOT NULL,
    usuarios_idusuarios INT UNSIGNED NOT NULL,
    cupom_desconto VARCHAR(45),
    FOREIGN KEY (usuarios_idusuarios) REFERENCES usuarios(idusuarios)
);

CREATE TABLE usuarios (
	idusuarios INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(150) NOT NULL, 
    sobrenome VARCHAR(150) NOT NULL,
    email VARCHAR(100) NOT NULL, 
    senha VARCHAR(255) NOT NULL, 
    documento_usuario INT(20) NOT NULL, 
    telefone INT(11) NOT NULL,
    data_nascimento DATE NOT NULL,
    idadmin INT NOT NULL,
    foto_usuario VARCHAR(100) NOT NULL
);

CREATE TABLE pedidos (
	idpedidos INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    codigo_pedido INT NOT NULL, 
    data_pedido DATE NOT NULL
);

CREATE TABLE historico_pedidos (
	idhistorico_pedidos INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    status_pedido VARCHAR(150) NOT NULL,
    pedidos_idpedidos INT UNSIGNED NOT NULL,
    FOREIGN KEY (pedidos_idpedidos) REFERENCES pedidos(idpedidos) 
);

CREATE TABLE forma_pagamentos (
	idforma_pagamentos INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(150) NOT NULL, 
    carrinho_idcarrinho INT UNSIGNED NOT NULL,
    carrinho_usuarios_idusuarios INT UNSIGNED NOT NULL,
    pedidos_idpedidos INT UNSIGNED NOT NULL,
    FOREIGN KEY (carrinho_idcarrinho) REFERENCES carrinho(idcarrinho),
    FOREIGN KEY (carrinho_usuarios_idusuarios) REFERENCES carrinho(usuarios_idusuarios)
);

CREATE TABLE enderecos (
	idenderecos INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    logradouro VARCHAR(150) NOT NULL, 
    endereco_numero INT(5) NOT NULL, 
    complemento VARCHAR(150),
    cep INT(8) NOT NULL, 
    bairro VARCHAR(150) NOT NULL,
    cidade VARCHAR(150) NOT NULL, 
    estado VARCHAR(2) NOT NULL, 
    pais VARCHAR(150) NOT NULL, 
    usuarios_idusuarios INT UNSIGNED NOT NULL,
    carrinho_idcarrinho INT UNSIGNED NOT NULL,
    carrinho_usuarios_idusuarios INT UNSIGNED NOT NULL,
    FOREIGN KEY (usuarios_idusuarios) REFERENCES usuarios(idusuarios),
    FOREIGN KEY (carrinho_idcarrinho) REFERENCES carrinho(idcarrinho),
    FOREIGN KEY (carrinho_usuarios_idusuarios) REFERENCES carrinho(usuarios_idusuarios)
);

CREATE TABLE marcas (
	idmarca INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(150) NOT NULL, 
    cnpj INT(20) NOT NULL,
    endereco VARCHAR(150) NOT NULL
);

CREATE TABLE produtos_ofertas (
	idprodutos_ofertas INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    oferta TINYINT NOT NULL, 
    valor_oferta DECIMAL(5,2) NOT NULL
);

CREATE TABLE produtos_has_produtos_ofertas (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    produtos_idprodutos INT UNSIGNED NOT NULL,
    produtos_categorias_idcategorias INT UNSIGNED NOT NULL,
    produtos_marcas_idmarca INT UNSIGNED NOT NULL,
    produtos_ofertas_idprodutos_ofertas INT UNSIGNED NOT NULL,
    FOREIGN KEY (produtos_idprodutos) REFERENCES produtos(idprodutos),
    FOREIGN KEY (produtos_categorias_idcategorias) REFERENCES produtos(categorias_idcategorias),
    FOREIGN KEY (produtos_marcas_idmarca) REFERENCES produtos(marcas_idmarca),
    FOREIGN KEY (produtos_ofertas_idprodutos_ofertas) REFERENCES produtos_ofertas(idprodutos_ofertas)
);


















