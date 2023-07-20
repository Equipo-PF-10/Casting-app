const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "mensaje",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
      },

      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};
