const {
  getAllApplied,
  createApplied,
  getApplicantById,
  deleteApplicantById,
  getApplicantsForEventByFk,
  getApplicantByName,
  applicantToContact,
  getPostulationsByTalentId
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
    const allApplied = await getAllApplied();

    res.status(200).json(allApplied);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const handlerGetApplicantsByName = async (req, res) => {
  try {
    const { EventId, name } = req.body;

    if (!name) {
      return res
        .status(400)
        .send("Debes ingresar un nombre para aplicar la búsqueda.");
    }

    const applicantsByName = await getApplicantByName(fk, name);

    if (typeof applicantsByName === "string") {
      return res.status(404).json({ error: applicantsByName });
    }

    return res.status(200).json(applicantsByName);
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
    res.status(200).send("El postulante ha sido rechazado correctamente. Actualice la lista para ver los cambios.");
  } catch (error) {
    res
      .status(400)
      .send(
        "El postulante que ha ingresado no existe o no está postulado al evento."
      );
  }
};

const handlerGetApplicantsForEventByFk = async (req, res) => {
  const { fk } = req.params;
  const { name } = req.query;

  if (name) {
    const applicant = await getApplicantByName(fk, name);

    res.status(200).json(applicant);
  }

  try {
    const evento = await getApplicantsForEventByFk(fk);

    res.status(200).json(evento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerToContact = async (req, res) => {
  const { TalentId, EventId } = req.body;
  try {
    const toContact = await applicantToContact(TalentId, EventId);
    res
      .status(200)
      .send("El postulante ha sido seleccionado para contactar correctamente.");
  } catch (error) {
    res
      .status(400)
      .send("El postulante no ha podido ser aceptado para contactar.");
  }
};

const handlerGetTalentAplications = async (req, res) => {
  const {id} = req.params;

  console.log(req.params);

  try {
    const aplications = await getPostulationsByTalentId(id)

    res.status(200).json(aplications)

  } catch (error) {
    res.status(400).send("No se encontraron postulaciones de este talento")
  }
}

module.exports = {
  handlerGetAllApplied,
  handlerCreateApplied,
  handlerGetApplicantById,
  handlerDeleteApplicantById,
  handlerGetApplicantsForEventByFk,
  handlerGetApplicantsByName,
  handlerToContact,
  handlerGetTalentAplications
};
