const {
  getAllApplied,
  createApplied,
  getApplicantById,
  deleteApplicantById,
  getApplicantsForEventByFk,
  getApplicantByName,
} = require("../../controllers/talents/postulationsController");

// Función handler para obtener todas las postulaciones
// Función handler para crear postulaciones
const handlerCreateApplied = async (req, res) => {
  const { EventId, TalentId } = req.body;

  try {
    const createdPost = await createApplied(EventId, TalentId);

    res.status(200).json(createdPost);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const handlerGetAllApplied = async (req, res) => {
  try {
    const { fk } = req.params;
    const { name } = req.query;

    if (name.length === 0)
      return res
        .status(400)
        .send("Debes ingresar un nombre para aplicar la búsqueda.");

    if (name) {
      const talentByName = await getApplicantByName(fk, name);

      if (typeof talentByName === "string")
        return res.status(400).json({ error: talentByName });

      return res.status(200).json(talentByName);
    }
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

// Función handler para obtener por Id
const handlerGetApplicantById = async (req, res) => {
  const { id } = req.params;

  try {
    const postulation = await getApplicantById(id);

    res.status(200).json(postulation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función handler para borrar postulación por Id de Talento y por Id de Evento.
const handlerDeleteApplicantById = async (req, res) => {
  const { TalentId, EventId } = req.body;
  try {
    const deletedPost = await deleteApplicantById(TalentId, EventId);
    res.status(200).json(deletedPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerGetApplicantsForEventByFk = async (req, res) => {
  const { fk } = req.params;

  try {
    const evento = await getApplicantsForEventByFk(fk);

    res.status(200).json(evento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerGetApplicantByName = (req, res) => {
  const { name } = req.query;
  try {
    const talent = getApplicantByName(name);
    res.status(200).json(talent);
  } catch (error) {
    res.status(400).send("No se encontró el postulado con ese nombre");
  }
};

module.exports = {
  handlerGetAllApplied,
  handlerCreateApplied,
  handlerGetApplicantById,
  handlerDeleteApplicantById,
  handlerGetApplicantsForEventByFk,
};
