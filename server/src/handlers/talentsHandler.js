const { Talento } = require("../db")
const { Op } = require("sequelize");


const allTalents = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      talentsController.searchTalents(req, res);
    } else {
      const talents = await Talento.findAll();
      res.status(200).json(talents);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los talentos de la base de datos // ALL TALENTS" + error });
  }
};


const searchTalentsBySkill = async (req, res) => {
  const { skill } = req.query;
  try {
    const talents = await Talento.findAll({
      where: {
        habilidad: {
          [Op.iLike]: `%${skill}%`,
        },
      },
    });
    if (talents.length === 0) {
      res.status(404).json({ error: "No se encontró ningún talento con la habilidad: " + skill });
    } else {
      res.status(200).json(talents);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los talentos de la base de datos // SEARCH TALENTS BY SKILL " + error });
  }
};


const searchTalentsByLocation = async (req, res) => {
  const { location } = req.query;
  try {
    const talents = await Talento.findAll({
      where: {
        ubicacion: {
          [Op.iLike]: `%${location}%`,
        },
      },
    });
    if (talents.length === 0) {
      res.status(404).json({ error: "No se encontró ningún talento en la ubicación: " + location });
    } else {
      res.status(200).json(talents);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los talentos de la base de datos // SEARCH TALENTS BY LOCATION " + error });
  }
};

module.exports = {
  allTalents,
  searchTalentsBySkill,
  searchTalentsByLocation,
};
