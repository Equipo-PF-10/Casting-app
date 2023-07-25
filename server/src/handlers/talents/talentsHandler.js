const {
  createTalentDb,
  getTalentByName,
  getTalentById,
  getDbTalents,
  deleteTalent,
  updateTalent,
} = require("../../controllers/talents/talentsController");

// Función handler que devuelve los talentos.
const getTalentsHandler = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const talentByName = await getTalentByName(name);
      res.status(200).json(talentByName);
    } else {
      const talents = await getDbTalents();
      res.status(200).json(talents);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función handler que crea los talentos.
const createTalentHandler = async (req, res) => {
  const {
    name,
    dni,
    email,
    password,
    available,
    dateComeBack,
    image,
    portfolio,
    gender,
    aboutMe,
    nationality,
    ubication,
    hability,
    contexture,
    ethnicOrigin,
    weight,
    height,
    contact,
    socialNetwork,
    reviews,
    reviewsCount,
  } = req.body;

  if (!email || !password) {
    return res.status(400).send("Faltan datos obligatorios");
  }


  const dateVerification = dateComeBack instanceof Date ? dateComeBack : null;

  try {
    await createTalentDb(
      name,
      isNaN(parsedDni) ? null : parsedDni,
      email,
      password,
      available,
      dateVerification,
      image,
      dni,
      portfolio,
      gender,
      aboutMe,
      nationality,
      ubication,
      hability,
      contexture,
      ethnicOrigin,
      weight,
      height,
      contact,
      socialNetwork,
      reviews,
      reviewsCount
    );

    res.status(200).send("Se ha registrado correctamente");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Función handler para obtener talento por ID.
const talentByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const talentById = await getTalentById(id);
    res.status(200).json(talentById);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función handler para eliminar talento.
const deleteTalentHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const talent = await getTalentById(id);

    if (talent) {
      await deleteTalent(id);
    }

    res
      .status(200)
      .send(`El usuario con ID ${id} ha sido eliminado con éxito.`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función handler para modificar un usuario talento mediante su ID.
const updateTalentHandler = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    dni,
    email,
    password,
    available,
    dateComeback,
    image,
    portfolio,
    gender,
    aboutMe,
    nationality,
    ubication,
    hability,
    contexture,
    ethnicOrigin,
    weight,
    height,
    contact,
    socialNetwork,
    reviews,
    reviewsCount,
  } = req.body;

  try {
    // Verificar primero si el usuario talento existe antes de intentar actualizarlo
    const talent = await getTalentById(id);

    // Si el usuario talento existe, procedemos a actualizarlo
    if (talent) {
      const updatedData = {
        name,
        dni,
        email,
        password,
        available,
        dateComeback,
        image,
        portfolio,
        gender,
        aboutMe,
        nationality,
        ubication,
        hability,
        contexture,
        ethnicOrigin,
        weight,
        height,
        contact,
        socialNetwork,
        reviews,
        reviewsCount,
      };

      await updateTalent(id, updatedData);

      res
        .status(200)
        .send(`El usuario con ID ${id} ha sido actualizado con éxito.`);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTalentsHandler,
  createTalentHandler,
  talentByIdHandler,
  deleteTalentHandler,
  updateTalentHandler,
};
