const {
  getAllEvents,
  createEvent,
  getEventById,
  getByName,
  deleteEvent,
  updateEvent,
} = require("../controllers/eventsController");

// Función handler para obtener los eventos.
const getEventsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const found = await getByName(name);

      if (!found) {
        res.status(400).send("No se ha encontrado el evento con ese nombre.");
      }
      res.status(200).json(found);
    }

    const events = await getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Función handler para obtener eventos por ID.
const getById = async (req, res) => {
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
const createEventHandler = async (req, res) => {
  const {
    name,
    image,
    active,
    ubication,
    habilityRequired,
    salary,
    shortDescription,
    contact,
    expirationDate,
    idEmpresa,
  } = req.body;

  if (!name || !image || !shortDescription) {
    res.status(400).send("Faltan datos obligatorios");
  }

  if (shortDescription.length > 130) {
    res
      .status(400)
      .send(
        "El detalle del evento no puede superar los 130 caracteres. Vuelve a intentarlo."
      );
  }

  const createdEvent = await createEvent(
    name,
    image,
    expirationDate,
    shortDescription,
    active,
    ubication,
    habilityRequired,
    salary,
    contact,
    idEmpresa
  );

  res.status(200).send("El evento ha sido creado con éxito.");
};

// Función handler para borrar un evento.
const deleteEventHandler = async (req, res) => {
  const { id } = req.params;

  try {
    // Verificar primero si el evento existe antes de intentar eliminarlo
    const event = await getEventById(id);

    // Si el evento existe, procedemos a eliminarlo
    if (event) {
      await deleteEvent(id);
    }

    res.status(200).send(`El evento con ID ${id} ha sido eliminado con éxito.`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función handler para modificar un evento
const updateEventHandler = async (req, res) => {
  const { id } = req.params;
  const { name, image, detail, active, ubication, habilityRequired, contact } =
    req.body;

  try {
    // Verificar primero si el usuario talento existe antes de intentar actualizarlo
    const event = await getEventById(id);

    // Si el usuario evento existe, procedemos a actualizarlo
    const updatedData = {
      name,
      image,
      creationDate,
      changeDate,
      expirationDate,
      shortDescription,
      detail,
      active,
      ubication,
      habilityRequired,
      habilitySalary,
      contact,
    };

    await updateEvent(id, updatedData);

    res
      .status(200)
      .send(`El evento con ID ${id} ha sido actualizado con éxito.`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getEventsHandler,
  getById,
  createEventHandler,
  deleteEventHandler,
  updateEventHandler,
};
