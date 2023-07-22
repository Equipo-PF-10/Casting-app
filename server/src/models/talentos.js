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

      dni: {
        type: DataTypes.INTEGER,
        validate: {
          min: 10000000,
          max: 99999999,
        },
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

      available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      aboutMe: {
        type: DataTypes.STRING,
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

      contexture: {
        type: DataTypes.ENUM("Ectomorfo", "Endomorfo", "Mesomorfo")
      },

      weight: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },

      height: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },

      ethnicOrigin: {
        type: DataTypes.STRING,
      },

      dateComeBack: {
        type: DataTypes.DATE,
      },

      socialNetwork: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },

      portfolio: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },

      contact: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },

      reviews: {
        type: DataTypes.STRING,
      },

      reviewsCount: {
        type: DataTypes.INTEGER,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};
