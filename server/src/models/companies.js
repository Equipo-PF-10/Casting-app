const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Empresa",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
      },

      name: {
        type: DataTypes.STRING,
        get(){
          return `${this.email}`
        }
      },
      
      logo: {                         
        type: DataTypes.STRING,
        allowNull: true, 
      },
          
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Argentina",  
        },

      domain: {
        type: DataTypes.STRING,
        allowNull: true,
      },     

      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      descriptionShort: {
        type: DataTypes.STRING,
        allowNull: true,  
      },      

      instagram: {
        type: DataTypes.STRING,
        allowNull: true,   
      },

      facebook: {
        type: DataTypes.STRING,
        allowNull: true,   
      },

      linkedin: {
        type: DataTypes.STRING,
        allowNull: true,   
      },

      twitter: {
        type: DataTypes.STRING,
        allowNull: true,   
      },

      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      }

    },
        
    { freezeTableName: true, timestamps: false,
            
  }
  )}; 
