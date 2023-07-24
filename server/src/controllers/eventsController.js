const { Evento, EventoEliminado } = require("../db");
const { Op } = require("sequelize");

// Función controller que retorna los eventos de la database.
const getAllEvents = async () => {
  try {
    const allEvents = await Evento.findAll();
    return allEvents;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getByName = async (name) => {
  try {
    const foundInDb = await Evento.findOne({
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
    const foundInDb = await Evento.findByPk(id);

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
  detail,
  active,
  ubication,
  habilityRequired,
  habilitySalary,
  contact,
  idEmpresa
) => {
  try {
    const event = await Evento.create({
      name,
      image,
      expirationDate,
      shortDescription,
      detail,
      active,
      ubication,
      habilityRequired,
      habilitySalary,
      contact,
      idEmpresa,
    });
    return event;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller para eliminar un evento de la base de datos según el id pasado.
const deleteEvent = async (id) => {
  try {
    const eventToDelete = await Evento.findByPk(id);

    if (!eventToDelete) {
      throw new Error(`El Evento con ID ${id} no existe`);
    }

    await EventoEliminado.create({
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
const updateEvent = async (id, updatedData) => {
  try {
    const eventToUpdate = await Evento.findByPk(id);

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
  getByName,
  createEvent,
  deleteEvent,
  updateEvent,
};
