const { Postulacion, Evento } = require("../db");

// Función controller para obtener todas las postulaciones
const getAllPostulations = async () => {
  const allPost = await Postulacion.findAll();
  return allPost;
};

// Función controller para crear postulaciones
const createPostulation = async (date, active, status, changeDate, idEvent) => {
  try {
    // Crear la postulación en la base de datos
    const postulacion = await Postulacion.create({
      date,
      active,
      status,
      changeDate,
    });

    // Asociar la postulación al evento correspondiente usando el idEvent recibido
    const evento = await Evento.findByPk(idEvent);
    if (!evento) {
      throw new Error("No se encontró el evento con el id proporcionado.");
    }

    await postulacion.setEvento(evento);

    return postulacion;
  } catch (error) {
    throw new Error("Error al crear la postulación: " + error.message);
  }
};

// Función controller para obtener para ID
const getPostulationById = async (id) => {
  const postDb = await Postulacion.findByPk(id);

  if (!postDb) {
    throw new Error(`La postulación con ID ${id} no existe. Intenta de nuevo.`);
  }

  return postDb;
};

// Función controller para borrar una postulación
const deletePost = async (id) => {
  try {
    const postulacion = await Postulacion.findByPk(id);

    if (!postulacion) {
      throw new Error(
        `La postulación con ID ${id} no existe. Intenta de nuevo.`
      );
    }

    await postulacion.destroy();

    return postulacion;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllPostulations,
  createPostulation,
  getPostulationById,
  deletePost,
};
