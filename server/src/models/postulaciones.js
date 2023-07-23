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
      },

      changeDate: {
        type: DataTypes.DATE,
      },

      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      status: {
        type: DataTypes.ENUM("Contratado", "Rechazado", "Pendiente"),
        defaultValue: "Pendiente",
      },

      idEvento: {
        type: DataTypes.UUID,
        references: {
          model: "Evento", // Nombre del modelo que será referenciado
          key: "id", // Nombre de la columna que es la clave primaria del modelo referenciado
        },
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};
