const {
  Talent,
  Applied,
  Company,
  Event,
  TalentApplied,
  ToContact,
} = require("../../db");

// Función controller para obtener todas las postulaciones
const getAllApplied = async () => {
  const allPost = await Applied.findAll();
  return allPost;
};

// Función controller para crear postulaciones
const createApplied = async (EventId, TalentId) => {
  try {
    // encuentra el perfil que se quiere postular
    const talent = await Talent.findByPk(TalentId);
    // encuentra las postulaciones de ese perfil
    const applieds = await talent.getApplieds();
    // extraigo los ids de los eventos ya postulados
    const eventsIds = applieds.map((ele) => ele.EventId);
    // Busca coincidencia entre el evento que se quiere postular y los ya postulados
    const validation = eventsIds.filter((ele) => ele === EventId);
    // Si no consiguio coincidencia, postula al talento
    if (validation.length === 0) {
      // crea una nueva postulacion con el talento y el evento asignado
      const postulacion = await Applied.create({
        TalentId,
        EventId,
      });
      // asigna la postulacion y el talento a la tabla intermedia
      await talent.addApplied(postulacion);
      //retorno la postulacion creada
      return postulacion;
    }
    // como el talento ya estaba postulad a ese evento retorna mensaje advirtiendo
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
            { where: { talentId: TalentId, EventId } }
          );

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
    const postulacion = await Applied.findAll({
      where: {
        EventId: fk,
        status: "Pendiente",
      },
    });
    let talents = [];
    if (!postulacion) {
      throw new Error(
        `La postulación con ID del evento ${fk} no existe. Intenta de nuevo.`
      );
    }

    for (let i = 0; i < postulacion.length; i++) {
      let postu = postulacion[i];
      let postulante = await postu.getTalents();

      talents.push(postulante[0]);
    }

    return talents;
  } catch (error) {
    throw new Error(error.message);
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
    const postulations = await Applied.findAll({ where: { EventId } });
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
    const postulations = await Applied.findAll({ where: { EventId } });
    const idPostulations = await TalentApplied.findAll({ where: { TalentId } });

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
    throw new Error(error.message);
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

// Función para obtener todos los contactados por una empresa.
const getContactedByCompany = async (idCompany) => {
  try {
    const events = await Event.findAll({
      where: { CompanyId: idCompany },
      include: [
        {
          model: Applied,
          where: { status: "Contactado" },
          include: {
            model: Talent,
          },
        },
      ],
    });
    const response = events[0].Applieds[0].Talents;
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller para obtener todos los contratados de una empresa.
const getHiredByCompany = async (idCompany) => {
  try {
    const events = await Event.findAll({
      where: { CompanyId: idCompany },
      include: [
        {
          model: Applied,
          where: { status: "Contratado" },
          include: {
            model: Talent,
          },
        },
      ],
    });

    return events[0].Applieds;
  } catch (error) {
    throw new Error(error.message);
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
  getContactedByCompany,
  getHiredByCompany,
};
