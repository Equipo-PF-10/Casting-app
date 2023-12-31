const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Talent",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Talento Anónmimo",
      },

      dni: {
        type: DataTypes.INTEGER,
        validate: {
          min: 10000000,
          max: 99999999,
        },
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
        type: DataTypes.ENUM("Ectomorfo", "Endomorfo", "Mesomorfo"),
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
        allowNull: true,
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
        type: DataTypes.FLOAT,
      },

      reviewsCount: {
        type: DataTypes.INTEGER,
      },

      creationDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};
