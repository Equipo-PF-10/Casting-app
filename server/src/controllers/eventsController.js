const Evento = require("../models/events");

const getAllEvents = async (req, res) => {
  try {
    const eventos = await Evento.findAll();
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los eventos de la base de datos: " + error });
  }
};

module.exports = { getAllEvents };