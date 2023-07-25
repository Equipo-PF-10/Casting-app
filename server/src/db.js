require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { log } = require("console");
//! Pendiente revizar el tema del puerto para que tenga las dos opciones deploy y local
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DB_DEPLOY } =
  process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

//Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const {
  Company,
  Event,
  Talent,
  Applied,
  TalentSelectedAsFav,
  CompanySelectedAsFav,
//   Mensaje,
//   TalentoEliminado,
//   EventoEliminado,
//   Contactado,
//   EmpresaDeshabilitada,
//   EmpresaTalentoFavorito,
} = sequelize.models;


//* Relaciones de tablas de Empresas************************************************
Company.hasMany(Event, { foreignKey: "idCompany", as: "events"});
Event.belongsTo(Company, { foreignKey: "idCompany", as: "company" });

Company.belongsToMany(TalentSelectedAsFav, { through: "CompanySelectTalentAsFav"  });
TalentSelectedAsFav.belongsToMany(Company, { through: "CompanySelectTalentAsFav"  });

//? Relaciones de tablas de Talentos*************************************************
Talent.belongsToMany(Applied, { through: "TalentApplied" });
Applied.belongsToMany(Talent, { through: "TalentApplied" });

Talent.belongsToMany(CompanySelectedAsFav, { through: "TalentSelectCompanyAsFav" });
CompanySelectedAsFav.belongsToMany(Talent, { through: "TalentSelectCompanyAsFav" });

//! Relacion de tabla de Eventos con Postulaciones************************************
Event.hasMany(Applied, { as: "EventoId" });
Applied.belongsTo(Event, { foreignKey: "EventoId" });



async function syncDB(){
  try {
    await sequelize.sync({force: false})
    console.log("DB funcional")
  } catch (error) {
    console.log({error: error.message});
  }
}

syncDB();

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
