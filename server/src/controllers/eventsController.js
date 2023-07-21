const { Evento } = require("../db");

// Función controller que retorna los eventos de la database.
const getAllEvents = async () => {
  try {
    const allEvents = await Evento.findAll();
    return allEvents;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createEvent = async (
  name,
  image,
  detail,
  active,
  ubication,
  habilityRequired,
  contact
) => {
  try {
    const [event, created] = await Evento.findOrCreate({
      where: { name },
      defaults: {
        name,
        image,
        detail,
        active,
        ubication,
        habilityRequired,
        contact,
      },
    });

    // Verificar que no exista en la bdd.
    if (!created)
      throw new Error(
        "Error! Ya existe un evento con ese nombre en la base de datos."
      );
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllEvents, createEvent };
