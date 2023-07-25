const { Applied, TalentApplied } = require("../../db");

// Función controller para obtener todas las postulaciones
const getAllAdds = async () => {
  const allPost = await Applied.findAll();
  return allPost;
};

// Función controller para crear postulaciones
const createAdd = async (EventoId, TalentoId) => {
  try {
    // Crear la postulación en la base de datos
    const postulacion = await Applied.create({
      TalentoId,
      EventId,
    });

    const findPostulacion = await Applied.findAll({where: {EventId}})

  
    const PostulacionId = findPostulacion[0].dataValues.id;

    const intermedia = await TalentApplied.create({
        TalentoId,
        PostulacionId
      });

    return postulacion;
  } catch (error) {
    throw new Error("Error al crear la postulación: " + error.message);
  }
};

// Función controller para obtener para ID
const getApplicantsById = async (id) => {
  const postDb = await Applied.findByPk(id);

  if (!postDb) {
    throw new Error(`La postulación con ID ${id} no existe. Intenta de nuevo.`);
  }

  return postDb;
};

// Función controller para borrar una postulación
const deleteApplicantById = async (id) => {
  try {
    const postulacion = await Applied.findByPk(id);

    if (!postulacion) {
      throw new Error(
        `La postulación con ID ${id} no existe. Intenta de nuevo.`
      );
    }

    await Applied.destroy();

    return postulacion;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAddByFk = async (fk) => {
  const postulacion = await Applied.findAll({where: {EventId:fk}});

  if (!postulacion) {
    throw new Error(`La postulación con ID del evento ${fk} no existe. Intenta de nuevo.`);
  }
  const id = postulacion[0].dataValues.id;
  const allPostulantes = await TalentApplied.findAll({where:{PostulacionId:id} })
  //console.log(allPostulantes[0].dataValues.TalentoId)

  const postulantesIds=[];
  
  if (allPostulantes.length>0){
    
    for (const key in allPostulantes) {

      postulantesIds.push(allPostulantes[key].dataValues.TalentoId)
    }

  }else throw new Error(`La postulación con ID del evento ${fk} no cuenta con postulantes aún.`);

  return postulantesIds;
};


module.exports = {
  getAllAdds,
  createAdd,
  getApplicantsById,
  deleteApplicantById,
  getAddByFk
};
