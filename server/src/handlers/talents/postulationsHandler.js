const {
  getAllPostulations,
  createAdd,
  getApplicantsById,
  deleteApplicantById,
  getAddByFk
} = require("../../controllers/talents/postulationsController");

// Función handler para obtener todas las postulaciones
const handlerGetAllAdds = async (req, res) => {
  try {
    const response = await getAllAdds();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función handler para crear postulaciones
const handlerCreateAdd = async (req, res) => {
  const { EventId, TalentId } = req.body;

  try {
    const createdPost = await createAdd(EventId, TalentId);

    res.status(200).json(createdPost);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Función handler para obtener por Id
const handlerGetApplicantById = async (req, res) => {
  const { id } = req.params;

  try {
    const postulation = await getApplicantsById(id);

    res.status(200).json(postulation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función handler para borrar postulación por Id
const handlerDeleteApplicantById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await deleteApplicantById(id);
    res
      .status(200)
      .send(`La postulación con ID ${id} ha sido borrada con éxito.`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerGetAddByFk = async (req, res) => {
  const { fk } = req.params;

  try {
    const evento = await getAddByFk(fk);

    res.status(200).json({evento});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handlerGetAllAdds,
  handlerCreateAdd,
  handlerGetApplicantById,
  handlerDeleteApplicantById,
  handlerGetAddByFk
};
