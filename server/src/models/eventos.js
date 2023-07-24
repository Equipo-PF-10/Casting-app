const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Evento = sequelize.define(
    "Evento",
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

      shortDescription: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 130], // Permite valores entre 0 y 130 caracteres.
        },
      },

      detail: {
        type: DataTypes.STRING,
      },

      active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },

      ubication: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      habilityRequired: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },

      habilitySalary: {
        type: DataTypes.ARRAY(DataTypes.FLOAT),
        allowNull: true,
        // validate: misma length que habilityRequried
      },

      creationDate: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },

      expirationDate: {
        type: DataTypes.DATEONLY,
      },

      changeDate: {
        type: DataTypes.DATEONLY,
      },

      contact: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },

      // idEmpresa: {
      //   type: DataTypes.UUID,
      //   references: {
      //     model: "Empresa", // Nombre del modelo que será referenciado
      //     key: "id", // Nombre de la columna que es la clave primaria del modelo referenciado
      //   },
      // },
    },
    { freezeTableName: true, timestamps: false }
  );

  return Evento;
};
