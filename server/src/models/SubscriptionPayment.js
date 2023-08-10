const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("SubscriptionPayment",{
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      paymentId: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      planType: {
        type: DataTypes.ENUM("PRUEBA GRATIS", "BASICO", "PREMIUM"),
        allowNull: false,
      },

      paymentDate: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },

      expirationDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      taxes: {
        type: DataTypes.FLOAT,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};