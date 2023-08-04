const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "TalentApplied",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      TalentId: {
        type: DataTypes.UUID,
        references: {
          model: "Talent",
          key: "id",
        },
      },
      AppliedId: {
        type: DataTypes.UUID,
        references: {
          model: "Applied",
          key: "id",
        },
      },
    },
    { timestamps: false }
  );
};
