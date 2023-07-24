const { Postulacion, Evento, TalentoPostulacion } = require("../db");

// Función controller para obtener todas las postulaciones
const getAllPostulations = async () => {
  const allPost = await Postulacion.findAll();
  return allPost;
};

// Función controller para crear postulaciones
const createPostulation = async (EventoId, TalentoId) => {
  try {
    // Crear la postulación en la base de datos
    const postulacion = await Postulacion.create({
      TalentoId,
      EventoId,
    });

    const findPostulacion = await Postulacion.findAll({where: {EventoId}})

  
    const PostulacionId = findPostulacion[0].dataValues.id;

    const intermedia = await TalentoPostulacion.create({
        TalentoId,
        PostulacionId
      });

    return postulacion;
  } catch (error) {
    throw new Error("Error al crear la postulación: " + error.message);
  }
};

// Función controller para obtener para ID
const getPostulationById = async (id) => {
  const postDb = await Postulacion.findByPk(id);

  if (!postDb) {
    throw new Error(`La postulación con ID ${id} no existe. Intenta de nuevo.`);
  }

  return postDb;
};

// Función controller para borrar una postulación
const deletePost = async (id) => {
  try {
    const postulacion = await Postulacion.findByPk(id);

    if (!postulacion) {
      throw new Error(
        `La postulación con ID ${id} no existe. Intenta de nuevo.`
      );
    }

    await postulacion.destroy();

    return postulacion;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getPostulationByfk = async (fk) => {
  const postulacion = await Postulacion.findAll({where: {EventoId:fk}});

  if (!postulacion) {
    throw new Error(`La postulación con ID del evento ${fk} no existe. Intenta de nuevo.`);
  }
  const id = postulacion[0].dataValues.id;
  const allPostulantes = await TalentoPostulacion.findAll({where:{PostulacionId:id} })
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
  getAllPostulations,
  createPostulation,
  getPostulationById,
  deletePost,
  getPostulationByfk
};
