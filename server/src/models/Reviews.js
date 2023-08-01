const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Review",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          min: 0,
          max: 5,
        },
      },

      text: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};
