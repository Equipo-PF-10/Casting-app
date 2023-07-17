const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("evento", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    ubication: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    talent: {
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
