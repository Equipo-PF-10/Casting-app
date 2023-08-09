const { Talent, DisableTalent } = require("../../db");
const { Op } = require("sequelize");

// Función controller que retorna los talentos de la database.
const getDbTalents = async () => {
  try {
    const allTalentsDb = await Talent.findAll();
    return allTalentsDb;
  } catch (error) {
    throw new Error("No existen usuarios en la Base de Datos");
  }
};

// Función controller que crea un nuevo talento en la database.
const createTalentDb = async (email, name, image) => {
  const [talent, created] = await Talent.findOrCreate({
    where: { email },
    defaults: {
      email,
      name,
      image,
    },
  });

  // Verificar que no exista en la bdd.
  //if (!created) throw new Error("El usuario con el correo ingresado ya existe");
  return talent;
};

// Función controller para obtener talentos por nombre.
const getTalentByName = async (name) => {
  try {
    const foundInDb = await Talent.findOne({
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
    const foundTalent = await Talent.findByPk(id);

    if (!foundTalent) throw new Error(`El Usuario con ID ${id} no existe`);
    return foundTalent;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller que devuele el talent según el Id recibido por parámetro.
const getTalentByEmail = async (email) => {
  try {
    const foundTalent = await Talent.findAll({ where: { email: email } });

    if (!foundTalent)
      throw new Error(`El Usuario con Email ${email} no existe`);
    return foundTalent;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller que elimina a un talento de la base de datos.
const deleteTalent = async (id) => {
  try {
    const talent = await Talent.findByPk(id);
    if (!talent) throw new Error("El talento especificado no existe.");

    await DisableTalent.create({ ...talent.dataValues, available: false });
    await talent.destroy();

    await talent.destroy();

    return talent;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller que actualiza los datos del usuario talent.
const updateTalent = async (id, updatedData) => {
  try {
    const talentToUpdate = await Talent.findByPk(id);

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
  getTalentByEmail,
  deleteTalent,
  updateTalent,
};
