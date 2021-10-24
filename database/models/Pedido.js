module.exports = function (sequelize, DataTypes) {
  const Pedido = sequelize.define(
    'Pedido',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
      },

      numero_pedido: {
        allowNull: false,
        type: DataTypes.BIGINT.UNSIGNED
      },

      itens: {
        allowNull: false,
        type: DataTypes.JSON
      },

      data: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      tableName: 'pedido',
      timestamps: false
    }
  )

  Pedido.associate = function (db) {
    Pedido.belongsTo(db.Usuario, {
      as: 'usuario',
      foreignKey: 'usuario_id'
    })
  }

  Pedido.associate = function (db) {
    Pedido.belongsTo(db.EnderecoEntrega, {
      as: 'endereco_entrega',
      foreignKey: 'endereco_entrega_id'
    })
  }

  return Pedido
}
