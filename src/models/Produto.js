const criarProdutoModel = (sequelize, dataTypes) => {
  const colunas = {
    idprodutos: {
      type: dataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    titulo: {
      type: dataTypes.STRING,
      allowNull: false
    },
    descricao: {
      type: dataTypes.STRING,
      allowNull: false
    },
    valor: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    quantidade: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    imagem: {
      type: dataTypes.STRING,
      allowNull: false
    },
    marca: {
      type: dataTypes.STRING,
      allowNull: false
    },
    ativo: {
      type: dataTypes.TINYINT,
      allowNull: false
    },
    idcategorias: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    idmarca: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    imagem2: {
      type: dataTypes.STRING,
      allowNull: false
    },
    imagem3: {
      type: dataTypes.STRING,
      allowNull: false
    }

  };

  const opcoes = {
    tableName: 'produtos',
    timestamps: false
  };

  const Produto = sequelize.define('Produto', colunas, opcoes);

  Produto.associate = (models) => {
    Produto.belongsTo(models.Carrinho, {

      as: 'carrinho',
      foreignKey: 'idcarrinho'
    });
    Produto.belongsTo(models.Categoria, {

      as: 'categorias',
      foreignKey: 'idcategorias'
    });
    Produto.belongsTo(models.Marca, {

      as: 'marcas',
      foreignKey: 'idmarcas'
    });
  }

  return Produto;
      
}


module.exports = criarProdutoModel;