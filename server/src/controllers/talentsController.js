const { Talento } = require("../db");
const getTalentsApi = require("../importData/talentsData.js");

// Función controller que retorna los talentos de la API.
const apiTalents = async () => {
  try {
    const talentsApi = await getTalentsApi();
    return talentsApi;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller que retorna los talentos de la database.
const getDbTalents = async () => {
  try {
    const allTalentsDb = await Talento.findAll();
    return allTalentsDb;
  } catch (error) {
    throw new Error("No existen usuarios en la Base de Datos");
  }
};

// Función controller que retorna todos los talentos (API y database).
const getAllTalents = async () => {
  const talentsDb = await getDbTalents();
  const talentsApi = await apiTalents();

  try {
    const combinedTalents = [...talentsDb, ...talentsApi];
    return combinedTalents;
  } catch (error) {
    throw new Error("Error al intentar obtener los usuarios");
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
  const talentsApi = await getTalentsApi();

  const existingTalentsApi = talentsApi.find(
    (talentApi) => talentApi.email === email
  );

  if (existingTalentsApi) {
    throw new Error("El usuario con el correo ingresado ya existe");
  }

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

    // Buscar el talento en la API
    const talentsApi = await apiTalents();
    const foundInApi = talentsApi.filter(
      (talent) => talent.name.toLowerCase() === nameToLower
    );

    if (foundInApi.length > 0) {
      return foundInApi;
    }

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

module.exports = { getAllTalents, createTalentDb, getTalentByName };
