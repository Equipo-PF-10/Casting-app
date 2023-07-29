const {
  getAllEvents,
  createEvent,
  getEventById,
  getEventsByName,
  deleteEventById,
  updateEventById,
} = require("../../controllers/events/eventsController");

// Función handler para obtener los eventos.
async function handlerGetAllEvents(req, res) {
  try {
    const { name } = req.query;
    const allEvents = await getAllEvents(name);
    if (name === undefined) {
      if (typeof allEvents === "string")
        return res.status(400).json({ error: allEvents });
      return res.status(200).json(allEvents);
    }
    if (typeof name === "string" && name.length === 0)
      return res
        .status(400)
        .json({ error: "Falta ingresar el nombre del Evento." });
    else {
      const nameLowerCase = name.toLowerCase();
      const filtered = allEvents.filter((ele) =>
        ele.name.toLowerCase().includes(nameLowerCase)
      );
      if (filtered.length !== 0) return res.status(200).json(filtered);
      else
        return res.status(400).json({
          error: `No se encontró ningún evento con el nombre ${name}`,
        });
    }
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}

// Función handler para obtener eventos por ID.
const handlerGetEventById = async (req, res) => {
  const { id } = req.params;

  try {
    const found = await getEventById(id);

    if (!found) {
      res
        .status(400)
        .send("El evento con el ID proporcionado, no ha sido encontrado. ");
    }

    res.status(200).json(found);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función handler para crear eventos.
const handlerCreateEvent = async (req, res) => {
  const {
    name,
    image,
    active,
    ubication,
    habilityRequired,
    salary,
    shortDescription,
    description,
    contact,
    expirationDate,
    CompanyId,
  } = req.body;

  console.log("Body: ", req.body);

  if (!name || !image || !ubication || !habilityRequired) {
    return res.status(400).send("Faltan datos obligatorios");
  }

  // Transforma CompanyId de String a UUID
  const createdEvent = await createEvent(
    name,
    image,
    expirationDate,
    shortDescription,
    description,
    active,
    ubication,
    habilityRequired,
    salary,
    contact,
    CompanyId
  );

  res.status(200).json(createdEvent);
};

// Función handler para borrar un evento.
const handlerDeleteEventById = async (req, res) => {
  const { id } = req.params;

  try {
    // Verificar primero si el evento existe antes de intentar eliminarlo
    const event = await getEventById(id);

    // Si el evento existe, procedemos a eliminarlo
    if (event) {
      const eventDeleted = await deleteEventById(id);
    }

    res.status(200).send(`El evento con ID ${id} ha sido eliminado con éxito.`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función handler para modificar un evento
const handlerUpdateEventById = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    image,
    detail,
    active,
    ubication,
    habilityRequired,
    contact,
    shortDescription,
    description,
    salary,
    expirationDate,
  } = req.body;

  try {
    // Verificar primero si el usuario talento existe antes de intentar actualizarlo
    const event = await getEventById(id);

    // Si el usuario evento existe, procedemos a actualizarlo
    const updatedData = {
      name,
      image,
      expirationDate,
      shortDescription,
      detail,
      description,
      active,
      ubication,
      habilityRequired,
      salary,
      contact,
    };
    const eventUpdated = await updateEventById(id, updatedData);

    res.status(200).send(eventUpdated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handlerGetAllEvents,
  handlerGetEventById,
  handlerCreateEvent,
  handlerDeleteEventById,
  handlerUpdateEventById,
};
