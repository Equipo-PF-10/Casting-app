const { Applied, TalentApplied, Talent } = require("../../db");

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
   const eventsIds = applieds.map(ele => ele.EventId)
   // Busca coincidencia entre el evento que se quiere postular y los ya postulados
   const validation = eventsIds.filter(ele => ele === EventId)
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
   return {error: "Error al crear la postulación: Este talento ya se ha postulado para este Evento"};
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
    let postulacionesIds = [];
    let talentsIds = [];
    let talents = [];
    if (!postulacion) {
      throw new Error(
        `La postulación con ID del evento ${fk} no existe. Intenta de nuevo.`
      );
    }

    for (let i = 0; i < postulacion.length; i++) {
      postulacionesIds.push(postulacion[i].dataValues.id);
    }

    for (let i = 0; i < postulacionesIds.length; i++) {
      let postulante = await TalentApplied.findAll({
        where: { AppliedId: `${postulacionesIds[i]}` },
      });
      talentsIds.push(postulante[0].dataValues.TalentId);
      console.log(talentsIds); // tengo el id de los talentos
    }
    for (let i = 0; i < talentsIds.length; i++) {
      let postulante = await Talent.findByPk(`${talentsIds[i]}`);
      console.log(postulante);
      talents.push(postulante.dataValues);
    }
    return talents;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Obtener aplicantes por name.
const getApplicantByName = async (fk, name) => {
  try {
    const nameToLower = name.toLowerCase();

    const applicants = await getApplicantsForEventByFk(fk);

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
          return postulationToContact;
        }
      }
    }
    return "No ha sido posible seleccionar al aspirante a contactar.";
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
};
