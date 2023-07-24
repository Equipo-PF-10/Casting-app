const { obtenerEventosConHabilidadRequerida } = require("../controllers/eventos-habilityreqController");

async function obtenerEventos(req, res) {
  try {
    // Lógica para obtener los eventos con la propiedad habilityRequired
    const eventos = await obtenerEventosConHabilidadRequerida();
    
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" });
  }
}

module.exports = {
  obtenerEventos,
};
