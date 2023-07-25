const { DataTypes } = require("sequelize");
//const Company = require("./Company");

module.exports = (sequelize) => {
  sequelize.define("Event",{
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      // CompanyId: {
      //   type: DataTypes.UUID,
      //   allowNull: false,
      // },

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

      description: {
        type: DataTypes.STRING,
      },

      active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },

      ubication: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      habilityRequired: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },

      salary: {
        type: DataTypes.STRING,
        allowNull: true,
        // validate: misma length que habilityRequried
      },

      creationDate: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },

      expirationDate: {
        type: DataTypes.DATEONLY,
      },

      changeDate: {
        type: DataTypes.DATEONLY,
      },

      contact: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },

    },
    { freezeTableName: true, timestamps: false }
  );
};
