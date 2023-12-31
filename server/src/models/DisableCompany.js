const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "DisableCompany",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        get() {
          return `${this.email}`;
        },
      },

      image: {
        type: DataTypes.STRING,
        defaultValue: "default_logo.png",
      },

      country: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Argentina",
      },

      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      domain: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      descriptionShort: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      instagram: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      facebook: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      numberPosts: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },

      plan: {
        type: DataTypes.ENUM("PENDIENTE", "PRUEBA GRATIS", "BASICO", "PREMIUM"),
        allowNull: true,
        defaultValue: "PENDIENTE",
      },

      conditionPlan: {
        // FREE = 3 | BASICO = 30 | PREMIUM = ∞
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: 0,
        },
      },

      linkedin: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      twitter: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
      },

      industryMain: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      creationDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },

      expirationDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },

      reviews: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },

      reviewsCount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
