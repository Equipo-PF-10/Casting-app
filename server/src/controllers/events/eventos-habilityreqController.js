const { Event } = require("../../db");

async function obtenerEventosConHabilidadRequerida() {
  try {
    // Realizar el findAll de los eventos con la propiedad habilityRequired
    const eventos = await Event.findAll({
      where: {
        habilityRequired: {
          // La propiedad habilityRequired no es nula (not null) y no está vacía
          $not: null,
          $ne: [],
        },
      },
    });

    return eventos;
  } catch (error) {
    throw new Error("Error al obtener eventos con habilidad requerida: " + error.message);
  }
}

module.exports = {
  obtenerEventosConHabilidadRequerida,
};