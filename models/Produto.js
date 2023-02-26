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
        type: DataTypes.DECIMAL(10, 2),
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
        type: DataTypes.TINYINT,
        allowNull: false
    },

    
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

        Produto.associate = (models) => {
            Produto.hasMany(models.Categoria, {
                             
              as: 'categorias', 
              foreignKey: 'idcategorias'
            });

      Produto.associate = (models) => {
          Produto.hasMany(models.Marca, {
                                 
             as: 'marcas', 
            foreignKey: 'idmarcas'
            });

    return Produto;
  };
  }
  }
  }
  module.exports = criarProdutoModel;