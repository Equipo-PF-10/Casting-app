require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { log } = require("console");
//! Pendiente revizar el tema del puerto para que tenga las dos opciones deploy y local
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DB_DEPLOY } =
  process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos las funciones al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const modelDefiner = require(path.join(__dirname, "/models", file));
    modelDefiners.push(modelDefiner(sequelize)); // Invocamos el constructor del modelo con sequelize
  });

// Creamos un objeto para almacenar los modelos y sus asociaciones
const models = {};

// Injectamos la conexion (sequelize) a todos los modelos llamando a las funciones en el arreglo modelDefiners
modelDefiners.forEach((model) => {
  models[model.name] = model;
});

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// Asociaciones entre modelos
const {
  Applied,
  Company,
  CompanySelectedAsFav,
  DisableCompany,
  DisableEvent,
  DisableTalent,
  Event,
  Messenger,
  Talent,
  TalentSelectedAsFav,
  ToContact,
  Payment,
  Review,
} = models;

//* Relaciones de tablas de Empresas************************************************
Company.hasMany(Event, { foreignKey: "CompanyId" });
Event.belongsTo(Company);

Company.belongsToMany(TalentSelectedAsFav, {
  through: "CompanySelectTalentAsFav",
});
TalentSelectedAsFav.belongsToMany(Company, {
  through: "CompanySelectTalentAsFav",
});

//? Relaciones de tablas de Talentos*************************************************
Talent.belongsToMany(Applied, { through: "TalentApplied" });
Applied.belongsToMany(Talent, { through: "TalentApplied" });

Talent.belongsToMany(CompanySelectedAsFav, {
  through: "TalentSelectCompanyAsFav",
});
CompanySelectedAsFav.belongsToMany(Talent, {
  through: "TalentSelectCompanyAsFav",
});

//! Relacion de tabla de Eventos con Postulaciones************************************
Event.hasMany(Applied, { foreignKey: "EventId" });
Applied.belongsTo(Event);

//* Relaciones de tablas de reviews************************************************
Company.hasMany(Review, { foreignKey: "CompanyId" });
Review.belongsTo(Company);

Talent.hasMany(Review, { foreignKey: "TalentId" });
Review.belongsTo(Talent);

module.exports = {
  ...models,
  conn: sequelize,
};
