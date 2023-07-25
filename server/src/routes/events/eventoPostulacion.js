const { obtenerEventos } = require("../../handlers/events/eventos-habilityreqHandler");

// Ruta para obtener los eventos con la propiedad habilityRequired
eventRouter.get("/eventos", obtenerEventos);
