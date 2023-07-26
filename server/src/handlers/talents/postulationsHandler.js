const {
  getAllApplied,
  createApplied,
  getApplicantById,
  deleteApplicantById,
  getApplicantsForEventByFk,
} = require("../../controllers/talents/postulationsController");

// Función handler para obtener todas las postulaciones
// Función handler para crear postulaciones
const handlerCreateApplied = async (req, res) => {
  const { EventId, TalentId } = req.body;

  try {
    const createdPost = await createApplied(EventId, TalentId);

    res.status(200).json(createdPost);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const handlerGetAllApplied = async (req, res) => {
  try {
    const { name } = req.query;
    const allAdds = await getAllApplied();
    if (name === undefined) {
      if (typeof allAdds === "string")
        return res.status(400).json({ error: allAdds });
      return res.status(200).json(allAdds);
    }
    if (typeof name === "string" && name.length === 0)
      return res
        .status(400)
        .json({ error: "Falta ingresar el nombre del Evento " });
    else {
      const nameLowerCase = name.toLowerCase();
      const filtered = allAdds.filter((ele) =>
        ele.name.toLowerCase().includes(nameLowerCase)
      );
      if (filtered.length !== 0) return res.status(200).json(filtered);
      else
        return res.status(400).json({
          error: `No se encontró ninguna empresa con el nombre ${name}`,
        });
    }
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

// Función handler para obtener por Id
const handlerGetApplicantById = async (req, res) => {
  const { id } = req.params;

  try {
    const postulation = await getApplicantById(id);

    res.status(200).json(postulation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función handler para borrar postulación por Id
//!Pendiente definir si vas hacer o no el borrado lógico
const handlerDeleteApplicantById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await deleteApplicantById(id);
    res
      .status(200)
      .send(`La postulación con ID ${id} ha sido borrada con éxito.`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerGetApplicantsForEventByFk = async (req, res) => {
  const { fk } = req.params;

  try {
    const evento = await getApplicantsForEventByFk(fk);

    res.status(200).json(evento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handlerGetAllApplied,
  handlerCreateApplied,
  handlerGetApplicantById,
  handlerDeleteApplicantById,
  handlerGetApplicantsForEventByFk,
};
