const { Event, DisableEvent, Company } = require("../../db");
const { Op } = require("sequelize");

// Función controller que retorna los eventos de la database.
async function getAllEvents(name) {
  try {
    const allEvents = await Event.findAll();
    return allEvents;
  } catch (error) {
    throw new Error("Error al obtener datos");
  }
}

// Función controller que retorna evento por nombre.
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

const createEvent = async (data) => {
  try {
    let allowedPosts = 0;
    const company = await Company.findByPk(data.CompanyId);

    if (!company) {
      throw new Error("La compañía asociada al evento no existe.");
    }

    if (company.plan === "BASIC") {
      allowedPosts = 3;
    } else if ((company.plan = "PREMIUM")) {
      allowedPosts = 30;
    } else if ((company.plan = "PRO")) {
      allowedPosts = Infinity;
    } else if ((company.plan = "PENDIENTE")) {
      throw new Error(
        "¡Debes seleccionar un plan para poder crear eventos! Elige entre: BASIC - PREMIUM - PRO"
      );
    }

    if (company.numberPosts >= allowedPosts) {
      throw new Error(
        "Has alcanzado el límite de eventos que puedes crear con tu plan actual."
      );
    }

    const event = await Event.create(data);
    company.numberPosts += 1;
    await company.save();

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
      id: eventToDelete.id,
      CompanyId: eventToDelete.CompanyId,
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
      throw new Error(`El Evento con ID ${id} no existe`);
    }

    const updated = await Event.update(
      {
        name: `${updatedData.name}`,
        image: `${updatedData.image}`,
        shortDescription: `${updatedData.shortDescription}`,
        description: `${updatedData.description}`,
        active: `${updatedData.active}`,
        ubication: `${updatedData.ubication}`,
        habilityRequired: updatedData.habilityRequired,
        salary: updatedData.salary,
        expirationDate: `${updatedData.expirationDate}`,
        contact: updatedData.contact,
        updateAt: Date.now(),
      },
      {
        where: {
          id: `${id}`,
        },
      }
    );

    return updated;
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
