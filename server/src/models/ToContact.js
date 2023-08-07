const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("ToContact",{
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
      EventId: {
        type: DataTypes.UUID,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};
