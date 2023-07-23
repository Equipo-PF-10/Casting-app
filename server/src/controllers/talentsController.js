const { Talento, TalentoEliminado } = require("../db");
const { Op } = require("sequelize");

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

// Función controller para obtener talentos por nombre.
const getTalentByName = async (name) => {
  try {
    const foundInDb = await Talento.findOne({
      where: { name: { [Op.iLike]: `%${name}%` } },
    });

    if (!foundInDb) {
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

// Función controller que elimina a un talento de la base de datos.
const deleteTalent = async (id) => {
  try {
    const talentToDelete = await Talento.findByPk(id);

    if (!talentToDelete) {
      throw new Error(`El Usuario con ID ${id} no existe`);
    }

    await TalentoEliminado.create({
      id: talentToDelete.id,
      email: talentToDelete.email,
      name: talentToDelete.name,
      dni: talentToDelete.dni,
      password: talentToDelete.password,
      image: talentToDelete.image,
      gender: talentToDelete.gender,
      nationality: talentToDelete.nationality,
      ubication: talentToDelete.ubication,
      hability: talentToDelete.hability,
      weight: talentToDelete.weight,
      height: talentToDelete.height,
    });

    await talentToDelete.destroy();

    return talentToDelete;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller que actualiza los datos del usuario talento.
const updateTalent = async (id, updatedData) => {
  try {
    const talentToUpdate = await Talento.findByPk(id);

    if (!talentToUpdate) {
      throw new Error(`El Usuario con ID ${id} no existe`);
    }

    // Actualizar los campos del talento con los datos proporcionados
    await talentToUpdate.update(updatedData);

    return talentToUpdate;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getDbTalents,
  createTalentDb,
  getTalentByName,
  getTalentById,
  deleteTalent,
  updateTalent,
};
