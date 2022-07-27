module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
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
      allowNull: true
    },
    preco_oferta: {
      type: DataTypes.FLOAT,
      allowNull: false
    },


  }, { tablename: 'product' })

  Product.associate = (models) => {
    Product.belongsTo(models.Carrinho, {
      constraint: true,
      foreignKey: 'carrinho_produto_id',
    })
  }
  Product.associate = (models) => {
    Product.belongsTo(models.Fabricante, {
      constraint: true,
      foreignKey: 'fabricante_id_fabricante',
    })
  }
  Product.associate = (models) => {
    Product.belongsTo(models.Carrinho, {
      constraint: true,
      foreignKey: 'estoque_id_estoque',
    })
  }

  return Product
}

