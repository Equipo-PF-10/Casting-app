const {
  getAllEvents,
  createEvent,
  getEventById,
  getEventsByName,
  deleteEventById,
  updateEventById,
  getPremiumEvents,
  getEventForHability
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
  //console.log(id + 'soy id');

  try {
    const found = await getEventById(id);
    if (!found) {
      res.status(400).json(error.message);
    }

    res.status(200).json(found);
  } catch (error) {
    res.status(400).json({error: error.message});
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

  if (!name || !ubication || !habilityRequired) {
    //|| !image
    return res.status(400).send("Faltan datos obligatorios");
  }

  try {
    const createdEvent = await createEvent({
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
    });

    res.status(200).json(createdEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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

const handlerGetPremiumEvents = async (req, res) => {
  try {
    const premiumEvents = await getPremiumEvents();

    res.status(200).json(premiumEvents);
  } catch (error) {
    res.status(400).json(error.message);
  }
};


//obtener los eventos según la habilidad requerida
const handlerHabilityRequerid = async (req, res) => {
  try {
    const { hability } = req.query;

    if (!hability) {
      return res.status(400).json({ error: 'Debes proporcionar la habilidad requerida.' });
    }

    const events = await getEventForHability(hability);

    if (events.length === 0) {
      return res.status(404).json({ error: 'No se encontraron eventos para la habilidad requerida.' });
    }

    res.status(200).json(events);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};



module.exports = {
  handlerGetAllEvents,
  handlerGetEventById,
  handlerCreateEvent,
  handlerDeleteEventById,
  handlerUpdateEventById,
  handlerGetPremiumEvents,
  handlerHabilityRequerid
};
