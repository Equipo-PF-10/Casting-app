const { Talento } = require("../db")

const searchTalents = async (req, res) => {
  const { name } = req.query;
  try {
    const talents = await Talento.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`, 
        },
      },
    });
    if (talents.length === 0) {
      res.status(404).json({ error: "No se encontró ningún talento que coincida con: " + name });
    } else {
      res.status(200).json(talents);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los talento de la base de datos // SEARCH TALENTS " + error });
  }
};

module.exports = {searchTalents};


