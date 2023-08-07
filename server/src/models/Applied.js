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
        type: DataTypes.ENUM(
          "Contactado",
          "Contratado",
          "Rechazado",
          "Pendiente"
        ),
        defaultValue: "Pendiente",
      },
      Talentreviews: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue:null,
      },
      TalentreviewsComentary: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue:null,
      },
      Companyreviews: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue:null,
      },
      CompanyreviewsComentary: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue:null,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};
