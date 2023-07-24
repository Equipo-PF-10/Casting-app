const {
  getAllPostulations,
  createPostulation,
  getPostulationById,
  deletePost,
  getPostulationByfk
} = require("../controllers/postulationsController");

// Función handler para obtener todas las postulaciones
const getAllPostHandler = async (req, res) => {
  try {
    const response = await getAllPostulations();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función handler para crear postulaciones
const createPostHandler = async (req, res) => {
  const { EventoId, TalentoId } = req.body;

  try {
    const createdPost = await createPostulation(EventoId, TalentoId);

    res.status(200).json(createdPost);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Función handler para obtener por Id
const getByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const postulation = await getPostulationById(id);

    res.status(200).json(postulation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función handler para borrar postulación por Id
const deleteByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await deletePost(id);
    res
      .status(200)
      .send(`La postulación con ID ${id} ha sido borrada con éxito.`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getByFkHandler = async (req, res) => {
  const { fk } = req.params;

  try {
    const evento = await getPostulationByfk(fk);

    res.status(200).json({evento});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllPostHandler,
  createPostHandler,
  getByIdHandler,
  deleteByIdHandler,
  getByFkHandler
};
