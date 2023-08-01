const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Review",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },

      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      CompanyId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "Company",
          key: "id",
        },
      },
      TalentId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "Talent",
          key: "id",
        },
      },
    },
    {
      freezeTableName: false,
      timestamps: false,
    }
  );
};
