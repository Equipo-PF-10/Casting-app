const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "modelo",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      nationality: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      ubication: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      talent: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      social: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};
