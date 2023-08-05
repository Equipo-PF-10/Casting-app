const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "DisableEvent",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      shortDescription: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 130], // Permite valores entre 0 y 130 caracteres.
        },
      },

      detail: {
        type: DataTypes.STRING,
      },

      active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },

      ubication: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      habilityRequired: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },

      habilitySalary: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },

      creationDate: {
        type: DataTypes.DATE,
      },

      expirationDate: {
        type: DataTypes.DATE,
      },

      changeDate: {
        type: DataTypes.DATE,
      },

      contact: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },

      CompanyId: {
        type: DataTypes.UUID,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};
