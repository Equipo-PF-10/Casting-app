const { Event, DisableEvent } = require("../../db");
const { Op } = require("sequelize");

// Función controller que retorna los eventos de la database.
const getAllEvents = async () => {
  try {
    const allEvents = await Event.findAll();
    return allEvents;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getEventsByName = async (name) => {
  try {
    const foundInDb = await Event.findOne({
      where: { name: { [Op.iLike]: `%${name}%` } },
    });

    if (!foundInDb) {
      throw new Error(
        `El nombre ${name} no se ha encontrado. Intenta de nuevo.`
      );
    }
    return foundInDb;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller que devuelve un evento que coincida con el ID pasado por params.
const getEventById = async (id) => {
  try {
    const foundInDb = await Event.findByPk(id);

    if (!foundInDb) throw new Error("No existe evento con ese ID.");

    return foundInDb;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller que crea un nuevo evento en la database.
const createEvent = async (
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
  idCompany
) => {
  try {
    const event = await Event.create({
      name: name,
      image: image,
      expirationDate,
      shortDescription: shortDescription,
      description: description,
      active,
      ubication: ubication,
      habilityRequired: habilityRequired,
      salary: salary,
      contact: contact,
      idCompany: idCompany,
    });
    return event;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller para eliminar un evento de la base de datos según el id pasado.
const deleteEventById = async (id) => {
  try {
    const eventToDelete = await Event.findByPk(id);

    if (!eventToDelete) {
      throw new Error(`El Evento con ID ${id} no existe`);
    }

    await DisableEvent.create({
      name: eventToDelete.name,
      image: eventToDelete.image,
      creationDate: eventToDelete.creationDate,
      changeDate: eventToDelete.changeDate,
      expirationDate: eventToDelete.expirationDate,
      shortDescription: eventToDelete.shortDescription,
      detail: eventToDelete.detail,
      active: eventToDelete.active,
      ubication: eventToDelete.ubication,
      habilityRequired: eventToDelete.habilityRequired,
      habilitySalary: eventToDelete.habilitySalary,
      contact: eventToDelete.contact,
    });

    await eventToDelete.destroy();

    return eventToDelete;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller para actualizar un evento
const updateEventById = async (id, updatedData) => {
  try {
    const eventToUpdate = await Event.findByPk(id);

    if (!eventToUpdate) {
      throw new Error(`El Usuario con ID ${id} no existe`);
    }

    // Actualizar los campos del talento con los datos proporcionados
    await eventToUpdate.update(updatedData);

    return eventToUpdate;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllEvents,
  getEventById,
  getEventsByName,
  createEvent,
  deleteEventById,
  updateEventById,
};
