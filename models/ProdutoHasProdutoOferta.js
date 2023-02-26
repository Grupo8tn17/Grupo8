const criarProdutoHasProdutoOfertaModel = (sequelize, dataTypes) => {
    const colunas = {
      id: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

    };
  
    const opcoes = {
      tableName: 'produtos_has_produto_ofertas',
      timestamps: false
    };
  
    const ProdutoHasProdutoOferta = sequelize.define('ProdutoHasProdutoOferta', colunas, opcoes);
  
    return ProdutoHasProdutoOferta;
  };
  
  module.exports = criarProdutoHasProdutoOfertaModel;