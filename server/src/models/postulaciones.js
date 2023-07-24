const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Postulacion",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      date: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },

      changeDate: {
        type: DataTypes.DATE,
      },

      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      status: {
        type: DataTypes.ENUM("Contactado", "Rechazado", "Pendiente"),
        defaultValue: "Pendiente",
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};
