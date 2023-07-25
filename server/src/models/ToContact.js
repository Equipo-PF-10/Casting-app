const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("ToContact",{
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      date: {
        type: DataTypes.DATE,
      },

      changeDate: {
        type: DataTypes.DATE,
      },

      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      status: {
        type: DataTypes.ENUM("Contratado", "Rechazado", "Contactado"),
        defaultValue: "Contactado",
      },

      EventId: {
        type: DataTypes.UUID,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};
