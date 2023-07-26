const { Applied, TalentApplied, Talent } = require("../../db");

// Función controller para obtener todas las postulaciones
const getAllApplied = async () => {
  const allPost = await Applied.findAll();
  return allPost;
};

// Función controller para crear postulaciones
const createApplied = async (EventId, TalentId) => {
  try {
    // Crear la postulación en la base de datos
    const postulacion = await Applied.create({
      TalentId,
      EventId,
    });

    const findPostulacion = await Applied.findAll({ where: { EventId } });

    const AppliedId = findPostulacion[0].dataValues.id;

    const intermedia = await TalentApplied.create({
      TalentId,
      AppliedId: postulacion.id,
    });

    return postulacion;
  } catch (error) {
    throw new Error("Error al crear la postulación: " + error.message);
  }
};

// Función controller para obtener para ID
const getApplicantById = async (id) => {
  const postDb = await Applied.findByPk(id);

  if (!postDb) {
    throw new Error(`La postulación con ID ${id} no existe. Intenta de nuevo.`);
  }

  return postDb;
};
// Función controller para borrar una postulación
//!Pendiente definir si vas hacer o no el borrado lógico
const deleteApplicantById = async (id) => {
  try {
    const postulacion = await Applied.findByPk(id);

    if (!postulacion) {
      throw new Error(
        `La postulación con ID ${id} no existe. Intenta de nuevo.`
      );
    }

    const deleted = await Applied.destroy({
      where: {
        id: id
      }
    });

    return postulacion;
  } catch (error) {
    throw new Error(error.message);
  }

};

const getApplicantsForEventByFk = async (fk) => {
  try {
    const postulacion = await Applied.findAll({ where: { EventId: fk } });
    let postulacionesIds = [];
    let talentsIds = [];
    let talents = [];
    if (!postulacion) {
      throw new Error(`La postulación con ID del evento ${fk} no existe. Intenta de nuevo.`);
    }
  
    for (let i=0 ; i<postulacion.length;i++){
      postulacionesIds.push(postulacion[i].dataValues.id)
    } 
    console.log(postulacionesIds)//[dos ids de postulaciones]
    for (let i = 0; i < postulacionesIds.length; i++) {
      let postulante = await TalentApplied.findAll({
        where: {  AppliedId: `${postulacionesIds[i]}` },
      });
      talentsIds.push(postulante[0].dataValues.TalentId)
      console.log(talentsIds);// tengo el id de los talentos
    }
    for (let i=0; i<talentsIds.length;i++){
      let postulante = await Talent.findByPk(`${talentsIds[i]}`);
      console.log(postulante);
      talents.push(postulante.dataValues)
    }
    return talents;
    
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
};
