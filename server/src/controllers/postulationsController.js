const { Postulacion, Evento } = require("../db");

// Función controller para obtener todas las postulaciones
const getAllPostulations = async () => {
  const allPost = await Postulacion.findAll();

  return allPost;
};

// Función controller para crear postulaciones
const createPostulation = async (date, active, status, changeDate, idEvent) => {
  const [postulacion, created] = await Postulacion.findOrCreate({
    where: { idEvento: idEvent },
    defaults: {
      date,
      active,
      status,
      changeDate,
      idEvento: idEvent,
    },
  });

  // Verificar que no exista en la bdd.
  if (!created)
    throw new Error(
      "¡Error! Ya existe una postulación con ese id en la base de datos."
    );

  const event = await Evento.findAll({ where: { id: idEvento } });
  postulacion.setTypes(event);
};

module.exports = { getAllPostulations, createPostulation };
