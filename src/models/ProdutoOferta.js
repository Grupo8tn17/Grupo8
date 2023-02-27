const criarProdutoOfertaModel = (sequelize, dataTypes) => {
    const colunas = {
      idprodutos_ofertas: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
  
      oferta: {
        type: dataTypes.TINYINT,
        allowNull: false
      },
      valor_oferta: {
        type: dataTypes.DECIMAL(5,2),
        allowNull: false
    },

    };
  
    const opcoes = {
      tableName: 'produtos_ofertas',
      timestamps: false
    };
  
    const ProdutoOferta = sequelize.define('ProdutoOferta', colunas, opcoes);

    
    return ProdutoOferta;
  };
  
  module.exports = criarProdutoOfertaModel;