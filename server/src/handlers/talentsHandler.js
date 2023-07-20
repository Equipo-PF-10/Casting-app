const {
  apiTalents,
  createTalentDb,
} = require("../controllers/talentsController");

const getTalentsHandler = async (req, res) => {
  try {
    const talents = await apiTalents();

    res.status(200).json(talents);
  } catch (error) {
    throw new Error(error.message);
  }
};

const createTalentHandler = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("Faltan datos obligatorios");
  }

  try {
    await createTalentDb(name, email, password);

    res.status(200).send("Se ha registrado correctamente");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getTalentsHandler,
  createTalentHandler,
};
