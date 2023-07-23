const {
  getAllPostulations,
  createPostulation,
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
  const { date, active, status, changeDate, idEvent } = req.body;

  try {
    const createdPost = await createPostulation(
      date,
      active,
      status,
      changeDate,
      idEvent
    );

    res.status(200).send("Se ha creado la postulación con éxito.");
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllPostHandler, createPostHandler };
