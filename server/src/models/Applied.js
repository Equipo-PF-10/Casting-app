const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Applied",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      date: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date(),
      },

      changeDate: {
        type: DataTypes.DATEONLY,
        defaultValue: null,
      },

      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      status: {
        type: DataTypes.ENUM("Contactado", "Rechazado", "Pendiente"),
        defaultValue: "Pendiente",
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
    { freezeTableName: true, timestamps: false }
  );
};
