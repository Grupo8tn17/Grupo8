const criarProdutoHasProdutoOfertaModel = (sequelize, dataTypes) => {
  const colunas = {
    id: {
      type: dataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    idprodutos: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    idcategorias: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    idcarrinho: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    idmarca: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    idprodutos_ofertas: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },

  };

  const opcoes = {
    tableName: 'produtos_has_produto_ofertas',
    timestamps: false
  };

  const ProdutoHasProdutoOferta = sequelize.define('ProdutoHasProdutoOferta', colunas, opcoes);

  ProdutoHasProdutoOferta.associate = (models) => {
    ProdutoHasProdutoOferta.belongsTo(models.Produto, {

      as: 'produtos',
      foreignKey: 'idprodutos'
    });

    ProdutoHasProdutoOferta.belongsTo(models.Categoria, {

      as: 'categorias',
      foreignKey: 'idcategorias'
    });

    ProdutoHasProdutoOferta.belongsTo(models.Carrinho, {

      as: 'carrinho',
      foreignKey: 'idcarrinho'
    });
    ProdutoHasProdutoOferta.belongsTo(models.Marca, {

      as: 'marcas',
      foreignKey: 'idmarca'
    });

    ProdutoHasProdutoOferta.belongsTo(models.ProdutoOferta, {

      as: 'produtos_ofertas',
      foreignKey: 'idprodutos_ofertas'
    });

  };
  return ProdutoHasProdutoOferta;
}

module.exports = criarProdutoHasProdutoOfertaModel;