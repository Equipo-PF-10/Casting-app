const { Talento } = require("../db");

// Función controller que retorna los talentos de la database.
const getDbTalents = async () => {
  try {
    const allTalentsDb = await Talento.findAll();
    return allTalentsDb;
  } catch (error) {
    throw new Error("No existen usuarios en la Base de Datos");
  }
};

// Función controller que crea un nuevo talento en la database.
const createTalentDb = async (
  name,
  email,
  password,
  image,
  gender,
  nationality,
  ubication,
  hability,
  weight,
  height
) => {
  const [talent, created] = await Talento.findOrCreate({
    where: { email },
    defaults: {
      name,
      email,
      password,
      image,
      gender,
      nationality,
      ubication,
      hability,
      weight,
      height,
    },
  });

  // Verificar que no exista en la bdd.
  if (!created) throw new Error("El usuario con el correo ingresado ya existe");
};

const getTalentByName = async (name) => {
  try {
    const nameToLower = name.toLowerCase(); // Convertir el nombre a minúsculas

    // Si no se encuentra en la API, buscar en la base de datos
    const foundInDb = await Talento.findAll({
      where: { name: nameToLower },
      limit: 5,
    });

    if (foundInDb.length === 0) {
      throw new Error(
        `El nombre ${name} no se ha encontrado. Intenta de nuevo.`
      );
    }
    return foundInDb;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller que devuele el talent según el Id recibido por parámetro.
const getTalentById = async (id) => {
  try {
    const foundTalent = await Talento.findByPk(id);

    if (!foundTalent) throw new Error(`El Usuario con ID ${id} no existe`);
    return foundTalent;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getDbTalents,
  createTalentDb,
  getTalentByName,
  getTalentById,
};
