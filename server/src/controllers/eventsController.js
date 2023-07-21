const Evento = require("../db");

// Función controller que retorna los eventos de la database.
const getAllEvents = async () => {
  try {
    const allEvents = await Evento.findAll();
    return allEvents;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllEvents };
