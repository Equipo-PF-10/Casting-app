const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Empresa",
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
      
      logo: {                         
        type: DataTypes.STRING,
        allowNull: true,
      },

      domain: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      descriptionShort: {
        type: DataTypes.STRING,
        allowNull: false,        
      },      

      socialNetworks: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },

      country: {
        type: DataTypes.STRING,
        allowNull: false,
        },

    },
    { freezeTableName: true, timestamps: false }
  );
};
