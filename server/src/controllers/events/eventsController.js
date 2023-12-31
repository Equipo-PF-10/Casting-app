const { Event, DisableEvent, Company, Applied } = require("../../db");
const {
  getCompaniesByPlan,
} = require("../../controllers/companies/companiesController");
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
    let foundInDb = await Event.findOne({
      where: { name: { [Op.iLike]: `%${name}%` } },
    });

    if (!foundInDb) {
      foundInDb = await DisableEvent.findOne({
        where: { name: { [Op.iLike]: `%${name}%` } },
      });
    }

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

const createEvent = async (data) => {
  try {
    let allowedPosts = 0;
    const company = await Company.findByPk(data.CompanyId);

    if (!company) {
      throw new Error("La compañía asociada al evento no existe.");
    }

    if (company.numberPosts >= company.conditionPlan) {
      throw new Error(
        "Has alcanzado el límite de eventos que puedes crear con tu plan actual."
      );
    }
    // Añadimos la fecha de creación y expiración al objeto data.
    data.creationDate = new Date();
    data.expirationDate = new Date(data.creationDate);
    data.expirationDate.setFullYear(data.expirationDate.getFullYear() + 1);

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

    // let postulations = await Applied.findAll({ where: { id } });

    // if (postulations) {
    //   await Promise.all(
    //     postulations.map(async (postulation) => {
    //       if (
    //         postulation.status === "Contactado" ||
    //         postulation.status === "Contratado"
    //       ) {
    //         await postulation.update({ EventId: null, DisableEventId: id });
    //       }
    //     })
    //   );
    // }

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
        creationDate: updatedData.creationDate,
        changeDate: updatedData.creationDate,
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

// Función controller que devuelve un evento que coincida con el ID pasado por params.
const getEventByCompanyId = async (companyId) => {
  try {
    //const foundInDb = await Event.findByPk(id)
    const foundInDb = await Company.findByPk(companyId);

    const events = await Event.findAll({
      where: {
        CompanyId: companyId,
      },
    });

    if (events.length === 0) {
      events = await DisableEvent.findAll({
        where: {
          CompanyId: companyId,
        },
      });
    }

    if (!foundInDb || events.length === 0)
      throw new Error(
        "No existe empresa con ese ID que haya creado un evento."
      );

    return events;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getEventsByCompanyId = async (companyId) => {
  try {
    const events = await Event.findAll({ where: { CompanyId: companyId } });

    if (!events.length) {
      throw new Error(`No existen eventos para la empresa con ID ${companyId}`);
    }

    return events;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getPremiumEvents = async () => {
  try {
    const premiumCompanies = await getCompaniesByPlan("PREMIUM");
    let allPremiumEvents = [];

    for (let company of premiumCompanies) {
      const events = await getEventsByCompanyId(company.id);

      allPremiumEvents = allPremiumEvents.concat(events);
    }

    return allPremiumEvents;
  } catch (error) {
    throw new Error(error.message);
  }
};

//se encargará de buscar los eventos según la habilidad requerida
const getEventForHability = async (hability) => {
  try {
    const events = await Event.findAll({
      where: {
        habilityRequired: {
          [Op.contains]: [hability],
        },
      },
    });
    return events;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller que busca un evento por su Id.
const getEventById = async (id) => {
  try {
    let foundEvent = await Event.findByPk(id);

    if (!foundEvent) {
      foundEvent = await DisableEvent.findByPk(id);
      if (!foundEvent) throw new Error(`No existe un evento con ID ${id}`);
    }

    return foundEvent;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller para traer todos los Disable Events.
const getDisable = async () => {
  try {
    const disableEvents = await DisableEvent.findAll();
    return disableEvents;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllEvents,
  getEventByCompanyId,
  getEventsByName,
  createEvent,
  deleteEventById,
  updateEventById,
  getPremiumEvents,
  getEventForHability,
  getEventById,
  getDisable,
};
