const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("talento", {
    id: {
      type: DataTypes.UUID,
      defaulValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },

    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    ubication: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    hability: {
      type: DataTypes.ENUM(
        "Actuación",
        "Animador/a",
        "Bailarín/a",
        "Blogger",
        "Cantante",
        "DJ",
        "Influencer",
        "Locutor/a",
        "Mago/a",
        "Músico/a",
        "Modelo",
        "Presentador/a",
        "Promotor/a"
      ),
      allowNull: false,
    },

    contact: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  }),
    { freezeTableName: true, timestamps: false };
};
