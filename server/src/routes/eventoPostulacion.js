const { obtenerEventos } = require("../handlers/eventos-habilityreqHandler");

// Ruta para obtener los eventos con la propiedad habilityRequired
eventRouter.get("/eventos", obtenerEventos);
