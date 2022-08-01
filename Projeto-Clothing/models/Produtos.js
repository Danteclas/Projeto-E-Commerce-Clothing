module.exports = (sequelize, DataTypes) => {
  const Produtos = sequelize.define('Produtos', {
    produto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome_produto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tamanho: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    preco_oferta: {
      type: DataTypes.FLOAT,
      allowNull: true
    }

  }, { tablename: 'produtos' })

  Produtos.associate = (models) => {
    Produtos.belongsTo(models.Carrinho, {
      constraint: true,
      foreignKey: 'carrinho_produto_id',
    })
  }
  Produtos.associate = (models) => {
    Produtos.belongsTo(models.Fabricante, {
      constraint: true,
      foreignKey: 'fabricante_id_fabricante',
    })
  }
  Produtos.associate = (models) => {
    Produtos.belongsTo(models.Estoque, {
      constraint: true,
      foreignKey: 'estoque_estoque_id',
    })
  }

  return Produtos;
}

