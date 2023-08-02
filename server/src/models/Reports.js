const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define(
        "Report",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false
            },

            text:{
                type: DataTypes.STRING,
                allowNull: false
            },
            report:{
                type: DataTypes.ENUM("Pagos", "Mal Comportamiento"), 
                allowNull: false
            },
            
            CompanyId: {
                type: DataTypes.UUID,
                allowNull: true,
                references: {
                  model: "Company",
                  key: "id",
                },
              },
              TalentId: {
                type: DataTypes.UUID,
                allowNull: true,
                references: {
                  model: "Talent",
                  key: "id",
                },
              },
        }
    )
}