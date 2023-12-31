const {
  Talent,
  Applied,
  Event,
  TalentApplied,
  DisableEvent,
  ToContact,
  Company,
} = require("../../db");

// Función controller para obtener todas las postulaciones
const getAllApplied = async () => {
  const allPost = await Applied.findAll();
  return allPost;
};

// Función controller para crear postulaciones
const createApplied = async (EventId, TalentId) => {
  try {
    const talent = await Talent.findByPk(TalentId);
    const applieds = await talent.getApplieds();
    const eventsIds = applieds.map((ele) => ele.EventId);
    const validation = eventsIds.filter((ele) => ele === EventId);
    if (validation.length === 0) {
      const postulacion = await Applied.create({
        TalentId,
        EventId,
      });

      await talent.addApplied(postulacion);
      return postulacion;
    }
    return {
      error:
        "Error al crear la postulación: Este talento ya se ha postulado para este Evento",
    };
  } catch (error) {
    throw new Error("Error al crear la postulación: " + error.message);
  }
};

// Función controller para obtener por ID
const getApplicantById = async (id) => {
  const postDb = await Applied.findByPk(id);

  if (!postDb) {
    throw new Error(`La postulación con ID ${id} no existe. Intenta de nuevo.`);
  }

  return postDb;
};

// Función controller para rechazar aplicante.
const deleteApplicantById = async (TalentId, EventId) => {
  try {
    const postulations = await Applied.findAll({ where: { EventId } });
    const idPostulations = await TalentApplied.findAll({ where: { TalentId } });

    for (let i = 0; i < postulations.length; i++) {
      let idPostulation = postulations[i].dataValues.id;

      for (let j = 0; j < idPostulations.length; j++) {
        let idPostulationInter = idPostulations[j].dataValues.AppliedId;

        if (idPostulationInter === idPostulation) {
          const postulationDeleted = await Applied.update(
            { status: "Rechazado" },
            {
              where: {
                id: idPostulationInter,
              },
            }
          );

          // Actualizar también el estado en la tabla ToContact
          await ToContact.update(
            { status: "Rechazado" },
            { where: { id: idPostulationInter } }
          );

          if (!postulationDeleted) return "No hay postulaciones activas.";
          return postulationDeleted;
        }
      }
    }

    return "El talento con ese ID no ha aplicado a ese evento.";
  } catch (error) {
    throw new Error(error.message);
  }
};

// Obtener aplicantes por id de evento.
const getApplicantsForEventByFk = async (fk) => {
  try {
    //console.log(fk, "soy fk");
    const postulacion = await Applied.findAll({
      where: {
        EventId: fk,
        status: "Pendiente",
      },
    });
    let talents = [];
    //console.log(postulacion);
    if (!postulacion) {
      return `La postulación con ID del evento ${fk} no existe. Intenta de nuevo.`;
    }

    for (let i = 0; i < postulacion.length; i++) {
      let postu = postulacion[i];
      let postulante = await postu.getTalents();

      talents.push(postulante[0]);
    }
    //console.log(talents);
    return talents;
  } catch (error) {
    return error.message;
  }
};

//Obtener aplicantes por name.
const getApplicantByName = async (EventId, name) => {
  try {
    const nameToLower = name.toLowerCase();
    //console.log(EventId);
    const applicants = await getApplicantsForEventByFk(EventId);

    const applicantsByName = applicants.filter((applicant) =>
      applicant.name.toLowerCase().includes(nameToLower)
    );

    if (applicantsByName.length === 0)
      return "No hubo coincidencias con el nombre ingresado.";

    return applicantsByName;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller para cambiar el status a Contactado.
const applicantToContact = async (TalentId, EventId) => {
  try {
    let postulations = await Applied.findAll({ where: { EventId } });

    // if (!postulations) {
    //   postulations = await Applied.findAll({
    //     where: { DisableEventId: EventId },
    //   });
    // }

    const idPostulations = await TalentApplied.findAll({ where: { TalentId } });

    for (let i = 0; i < postulations.length; i++) {
      let idPostulation = postulations[i].dataValues.id;

      for (let j = 0; j < idPostulations.length; j++) {
        let idPostulationInter = idPostulations[j].dataValues.AppliedId;

        if (idPostulationInter === idPostulation) {
          const postulationToContact = await Applied.update(
            {
              status: "Contactado",
            },
            {
              where: {
                id: idPostulationInter,
              },
            }
          );

          const updatedPostulation = await Applied.findByPk(idPostulationInter);

          const event = await Event.findByPk(EventId);

          if (!event) {
            event = await DisableEvent.findByPk(DisableEvent);
          }

          const CompanyId = event.CompanyId;

          await ToContact.create({
            id: updatedPostulation.id,
            date: updatedPostulation.date,
            changeDate: new Date(),
            active: updatedPostulation.active,
            companyId: CompanyId,
            status: updatedPostulation.status,
            EventId: updatedPostulation.EventId,
          });

          return postulationToContact;
        }
      }
    }
    return "No ha sido posible seleccionar al aspirante a contactar.";
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función para encontrar postulaciones de un talento
const getPostulationsByTalentId = async (TalentId) => {
  try {
    const postulations = await Talent.findByPk(TalentId, {
      include: [
        {
          model: Applied,
          through: {
            attributes: [],
          },
        },
      ],
    });

    if (!postulations) {
      throw new Error("No se encontraron postulaciones de este talento");
    }

    return postulations.Applieds;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función para agregar un talento a contratado.
const hireApplicant = async (TalentId, EventId) => {
  try {
    let postulations = await Applied.findAll({ where: { EventId } });

    // if (!postulations) {
    //   postulations = await Applied.findAll({
    //     where: { DisableEventId: EventId },
    //   });
    // }
    const idPostulations = await TalentApplied.findAll({ where: { TalentId } });
    console.log(postulations)
    for (let i = 0; i < postulations.length; i++) {
      let idPostulation = postulations[i].dataValues.id;

      for (let j = 0; j < idPostulations.length; j++) {
        let idPostulationInter = idPostulations[j].dataValues.AppliedId;

        if (idPostulationInter === idPostulation) {
          const postulationHired = await Applied.update(
            { status: "Contratado" },
            { where: { id: idPostulationInter } }
          );

          // Actualizar también el estado en la tabla ToContact
          await ToContact.update(
            { status: "Contratado" },
            { where: { EventId } }
          );
          return postulationHired;
        }
      }
    }

    return "No ha sido posible seleccionar al aspirante como contratado.";
  } catch (error) {
    return(error.message);
  }
};

// Función controller para obtener todos los talentos contratados.
const getAllHiredTalents = async () => {
  try {
    const hiredTalents = await Talent.findAll({
      include: {
        model: Applied,
        where: { status: "Contratado" },
      },
    });

    return hiredTalents;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller para obtener a todos los talentos contactados.
const getAllContactedTalents = async () => {
  try {
    const contactedTalents = await Talent.findAll({
      include: {
        model: Applied,
        where: { status: "Contactado" },
      },
    });

    return contactedTalents;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getNameCompanies = async (appliedId) => {
  try {
    const talentWithApplied = await Talent.findOne({
      where: { id: appliedId },
      include: [
        {
          model: Applied,
          where: { status: "Contactado" },
          include: {
            model: Event,
            include: Company,
          },
        },
      ],
    });

    if (!talentWithApplied || talentWithApplied.Applieds.length === 0) {
      throw new Error(
        "El appliedId no corresponde a ninguna postulación o no se encontró la información."
      );
    }
    const companies = talentWithApplied.Applieds.map(
      (applied) => applied.Event.Company.name
    );
    return companies;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función para obtener todos los contactados por una empresa.
const getContactedByCompany = async (idCompany) => {
  try {
    let events = await Event.findAll({
      where: { CompanyId: idCompany },
      include: [
        {
          model: Applied,
          where: { status: "Contactado", Companyreviews: null },
          include: {
            model: Talent,
          },
        },
      ],
    });

    if (events.length === 0) {
      events = await DisableEvent.findAll({
        where: { CompanyId: idCompany },
        include: [
          {
            model: Applied,
            where: { status: "Contactado", Companyreviews: null },
            include: {
              model: Talent,
            },
          },
        ],
      });
    }

    const response = events.map((event) => {
      return {
        ...event.get({ plain: true }),
        Applieds: event.Applieds.map((applied) => applied.Talents),
      };
    });

    return response;
  } catch (error) {
    return error.message;
  }
};

// Función controller para obtener todos los contratados de una empresa.
const getHiredByCompany = async (idCompany) => {
  try {
    let events = await Event.findAll({
      where: { CompanyId: idCompany },
      include: [
        {
          model: Applied,
          where: { status: "Contratado", Companyreviews: null },
          include: {
            model: Talent,
          },
        },
      ],
    });

    if (events.length === 0) {
      events = await DisableEvent.findAll({
        where: { CompanyId: idCompany },
        include: [
          {
            model: Applied,
            where: { status: "Contratado", Companyreviews: null },
            include: {
              model: Talent,
            },
          },
        ],
      });
    }

     //const response = events[0].Applieds;
    const response = events.map((event) => {
      return {
        ...event.get({ plain: true }),
        Applieds: event.Applieds.map((applied) => applied.Talents),
      };
    });

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller para obtener todos los aplicantes que tiene una empresa.
const getApplicantsByCompany = async (idCompany) => {
  try {
    const events = await Event.findAll({
      where: { CompanyId: idCompany },
      include: [
        {
          model: Applied,
          where: { status: "Pendiente" },
          include: {
            model: Talent,
          },
        },
      ],
    });
    
    const response = events[0].Applieds;
    
    
    return response;
  } catch (error) {
    return(error.message);
  }
};

module.exports = {
  getAllApplied,
  createApplied,
  getApplicantById,
  deleteApplicantById,
  getApplicantsForEventByFk,
  getApplicantByName,
  applicantToContact,
  getPostulationsByTalentId,
  hireApplicant,
  getAllHiredTalents,
  getAllContactedTalents,
  getNameCompanies,
  getContactedByCompany,
  getHiredByCompany,
  getApplicantsByCompany,
};
