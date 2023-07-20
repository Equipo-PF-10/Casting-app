const {
  getAllTalents,
  createTalentDb,
  getTalentByName,
  getTalentById,
} = require("../controllers/talentsController");

// Función handler que devuelve los talentos.
const getTalentsHandler = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const talentByName = await getTalentByName(name);
      res.status(200).json(talentByName);
    } else {
      const talents = await getAllTalents();
      res.status(200).json(talents);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función handler que crea los talentos.
const createTalentHandler = async (req, res) => {
  console.log(req.body);
  const {
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
  } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("Faltan datos obligatorios");
  }

  try {
    await createTalentDb(
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
    );

    res.status(200).send("Se ha registrado correctamente");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const talentByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const talentById = await getTalentById(id);
    res.status(200).json(talentById);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTalentsHandler,
  createTalentHandler,
  talentByIdHandler,
};
