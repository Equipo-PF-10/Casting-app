const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("SubscriptionPlan",{
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.ENUM("BASICO", "PREMIUM"),
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};