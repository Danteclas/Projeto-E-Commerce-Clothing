module.exports = (sequelize, DataTypes) => {
  const Fabricante = sequelize.define('Fabricante', {
    id_fabricante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },



  }, { tablename: 'fabricante' })

  Fabricante.associate = (models) => {
    Fabricante.belongsTo(models.Carrinho, {
      constraint: true,
      foreignKey: 'produto_id',
    })
  }

  return Fabricante
}

