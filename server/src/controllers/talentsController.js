const { Talento } = require("../db");
const getTalentsApi = require("../importData/talentsData.js");

const apiTalents = async () => {
  try {
    const talentsApi = await getTalentsApi();
    return talentsApi;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createTalentDb = async (name, email, password) => {
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
    },
  });

  // Verificar que no exista en la bdd.
  if (!created) throw new Error("El usuario con el correo ingresado ya existe");
};

module.exports = { apiTalents, createTalentDb };
