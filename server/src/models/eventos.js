const { DataTypes } = require("sequelize");

// Función twoWeeks() que retorna el valor de dos semanas en el futuro a partir de hoy.
// const twoWeeks = () => new Date(Date.now() + 2 * 7 * 24 * 60 * 60 * 1000);

module.exports = (sequelize) => {
  const Evento = sequelize.define(
    "evento",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      detail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 90], // solo permite valores entre 2 y 90
        },
      },

      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      ubication: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      habilityRequired: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },

      contact: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  return Evento;
};

// castingDuration: {
//   type: DataTypes.DATE,
//   allowNull: false,
//   defaultValue: twoWeeks(),
// },

// selectedEventTypes: {
//   type: DataTypes.ARRAY(DataTypes.STRING),
//   allowNull: false,
// },

// Hook de Sequelize para guardar los eventos seleccionados en un array de info.
// Evento.beforeSave((evento, _options) => {
//   evento.selectedEventTypes = evento.eventTypes;
// });
