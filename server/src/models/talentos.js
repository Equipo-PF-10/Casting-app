const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "talento",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        defaultValue: "Talento Anónimo",
        allowNull: true,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      image: {
        type: DataTypes.STRING,

        validate: {
          isUrl: true,
        },
      },

      gender: {
        type: DataTypes.ENUM("Masculino", "Femenino", "Otro"),
      },

      nationality: {
        type: DataTypes.STRING,
      },

      ubication: {
        type: DataTypes.STRING,
        
      },

      hability: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },

      weight: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },

      height: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },

      contact: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};
