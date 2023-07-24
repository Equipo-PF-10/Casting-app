require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DB_DEPLOY } =
  process.env;

const sequelize = new Sequelize(
  // DB_DEPLOY ||
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
    // dialectOptions: {
    //   ssl: {
    //     require: false,
    //   },
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
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
  Empresa,
  Evento,
  Mensaje,
  Talento,
  Postulacion,
  TalentoEliminado,
  EventoEliminado,
  TalentosFavoritos,
  EmpresaDeshabilitada,
  EmpresaFavorita
} = sequelize.models;


Empresa.belongsToMany(Talento, { through: "TalentoEmpresa" });
Talento.belongsToMany(Empresa, { through: "TalentoEmpresa" });
Talento.belongsToMany(Postulacion, { through: "TalentoPostulacion" });
Postulacion.belongsToMany(Talento, { through: "TalentoPostulacion" });
Empresa.hasMany(Evento);
Evento.belongsTo(Empresa);
Evento.hasMany(Postulacion, { foreignKey: "idEvento" });

// Empresa.belongsTo(EmpresaDeshabilitada, { through: "EmpresaDeshabilitada/Empresa" });
// EmpresaDeshabilitada.belongsTo(Empresa, { through: "Talento/EmpresaDeshabilitada" });

Talento.belongsToMany(EmpresaFavorita, { through: "TalentoEmpresaFavorita" });
EmpresaFavorita.belongsToMany(Talento, { through: "TalentoEmpresaFavorita" });


module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
