module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('Usuarios', {
    id_usuario: {
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
      allowNull: false,
      unique: true,
    },
    cpf: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    telefone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    foto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    data_criacao: {
      type: DataTypes.DATE,
      allowNull: true
    },

    carrinho_produto_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, { tablename: 'usuarios' })

  Usuarios.associate = (models) => {
    Usuarios.belongsTo(models.Carrinho, {
      constraint: true,
      foreignKey: 'carrinho_produto_id'
    })
  }

  return Usuarios;
}