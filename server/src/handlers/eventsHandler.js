const {
  getAllEvents,
  createEvent,
} = require("../controllers/eventsController");

// Función handler para obtener los eventos.
const getEventsHandler = async (req, res) => {
  try {
    const events = await getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createEventHandler = async (req, res) => {
  const { name, image, detail, active, ubication, habilityRequired, contact } =
    req.body;

  if (!name || !image || !detail) {
    res.status(400).send("Faltan datos obligatorios");
  }

  const createdEvent = await createEvent(
    name,
    image,
    detail,
    active,
    ubication,
    habilityRequired,
    contact
  );

  res.status(200).json(createdEvent);
};

module.exports = {
  getEventsHandler,
  createEventHandler,
};
