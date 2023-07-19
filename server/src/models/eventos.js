const { DataTypes } = require("sequelize");

// Función twoWeeks() que retorna el valor de dos semanas en el futuro a partir de hoy.
const twoWeeks = () => new Date(Date.now() + 2 * 7 * 24 * 60 * 60 * 1000);

module.exports = (sequelize) => {
  const Evento = sequelize.define(
    "evento",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      castingDuration: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: twoWeeks(),
      },

      eventTypes: {
        type: DataTypes.ENUM(
          "Deporte",
          "Humor",
          "Arte",
          "Música",
          "Magia",
          "Baile",
          "Animación",
          "Otro"
        ),
        allowNull: false,
      },

      selectedEventTypes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
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

  // Hook de Sequelize para guardar los eventos seleccionados en un array de info.
  Evento.beforeSave((evento, _options) => {
    evento.selectedEventTypes = evento.eventTypes;
  });

  return Evento;
};
