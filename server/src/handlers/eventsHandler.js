const Evento = require("../models/events");
const { Op } = require("sequelize");

const findEventsByCompanies = async (req, res) => {
  const { companies } = req.query;
  try {
    const eventos = await Evento.findAll({
      where: {
        companies: {
          [Op.iLike]: `%${companies}%`,
        },
      },
    });
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar eventos por empresas: " + error });
  }
};

const findEventsByUbication = async (req, res) => {
  const { ubication } = req.query;
  try {
    const eventos = await Evento.findAll({
      where: {
        ubication: {
          [Op.iLike]: `%${ubication}%`,
        },
      },
    });
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar eventos por ubicación: " + error });
  }
};

const findEventsByHability = async (req, res) => {
  const { hability } = req.query;
  try {
    const eventos = await Evento.findAll({
      where: {
        hability: {
          [Op.iLike]: `%${hability}%`,
        },
      },
    });
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar eventos por habilidad: " + error });
  }
};

const findEventsByMonthAndYear = async (req, res) => {
  const { month, year } = req.query;
  try {
    const eventos = await Evento.findAll({
      where: {
        month: parseInt(month),
        year: parseInt(year),
      },
    });
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar eventos por mes y año: " + error });
  }
};

const findEventsByTypeEvents = async (req, res) => {
  const { typeEvents } = req.query;
  try {
    const eventos = await Evento.findAll({
      where: {
        typeEvents: {
          [Op.iLike]: `%${typeEvents}%`,
        },
      },
    });
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar eventos por tipo de eventos: " + error });
  }
};

module.exports = {
  findEventsByCompanies,
  findEventsByUbication,
  findEventsByHability,
  findEventsByMonthAndYear,
  findEventsByTypeEvents,
};
