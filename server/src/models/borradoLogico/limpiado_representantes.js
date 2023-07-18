const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("representante", {
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

    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    relation: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    ubication: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    contact: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  }),
    { freezeTableName: true, timestamps: false };
};
