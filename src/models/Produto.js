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
    imagem2: {
      type: dataTypes.STRING,
      allowNull: true
    },
    imagem3: {
      type: dataTypes.STRING,
      allowNull: true
    },
    categorias_idcategorias: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    marcas_idmarca: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },

  };

  const opcoes = {
    tableName: 'produtos',
    timestamps: false
  };

  const Produto = sequelize.define('Produto', colunas, opcoes);

  Produto.associate = (models) => {
    Produto.belongsTo(models.Categoria, {

      as: 'categorias',
      foreignKey: 'categorias_idcategorias'
    });


    Produto.belongsTo(models.Marca, {

      as: 'marcas',
      foreignKey: 'marcas_idmarca'
    });
  }

  return Produto;
};

module.exports = criarProdutoModel;
