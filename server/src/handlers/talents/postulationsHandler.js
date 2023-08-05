const {
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
} = require("../../controllers/talents/postulationsController");

// Función handler para crear postulaciones.
const handlerCreateApplied = async (req, res) => {
  const { EventId, TalentId } = req.body;

  try {
    const createdPost = await createApplied(EventId, TalentId);

    res.status(200).json(createdPost);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Función handler para obtener todas las postulaciones.
const handlerGetAllApplied = async (req, res) => {
  try {
    const allApplied = await getAllApplied();

    res.status(200).json(allApplied);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

// const handlerGetApplicantsByName = async (req, res) => {
//   try {
//     const { name } = req.body;

//     if (!name) {
//       return res.status(400).json("Debes ingresar un nombre para aplicar la búsqueda.");
//     }

//     const appliedByName = await getApplicantByName(name);

//     if (appliedByName.length === 0) {
//       return res.status(404).json({ error: "No se encontraron postulaciones con el nombre ingresado." });
//     }

//     res.status(200).json(appliedByName);
//   } catch (error) {
//     return res.status(404).json({ error: error.message });
//   }
// };

// Función handler para obtener los aplicantes por nombre.
const handlerGetApplicantsByName = async (req, res) => {
  try {
    const { EventId } = req.params;
    const { name } = req.query;
    //console.log(req.params);
    if (!name) {
      return res
        .status(400)
        .json("Debes ingresar un nombre para aplicar la búsqueda.");
    }

    const applicantsByName = await getApplicantByName(EventId, name);

    if (typeof applicantsByName === "string") {
      return res.status(404).json({ error: applicantsByName });
    }

    return res.status(200).json(applicantsByName);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

// Función handler para obtener aplicante por Id.
const handlerGetApplicantById = async (req, res) => {
  const { id } = req.params;

  try {
    const postulation = await getApplicantById(id);

    res.status(200).json(postulation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función handler para borrar postulación por Id de Talento y por Id de Evento.
const handlerDeleteApplicantById = async (req, res) => {
  const { TalentId, EventId } = req.body;
  try {
    await deleteApplicantById(TalentId, EventId);
    res
      .status(200)
      .send(
        "El postulante ha sido rechazado correctamente. Actualice la lista para ver los cambios."
      );
  } catch (error) {
    res
      .status(400)
      .send(
        "El postulante que ha ingresado no existe o no está postulado al evento."
      );
  }
};

// Función para obtener a los aplicantes por Id de evento.
const handlerGetApplicantsForEventByFk = async (req, res) => {
  const { fk } = req.params;
  const { name } = req.query;

  if (name) {
    const applicant = await getApplicantByName(fk, name);

    res.status(200).json(applicant);
  }

  try {
    const evento = await getApplicantsForEventByFk(fk);

    res.status(200).json(evento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función para contactar un aplicante.
const handlerToContact = async (req, res) => {
  const { TalentId, EventId } = req.body;
  try {
    await applicantToContact(TalentId, EventId);
    res.status(200).send("El postulante ha sido contactado con éxito.");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Función para obtener un aplicante por Id.
const handlerGetTalentAplications = async (req, res) => {
  const { id } = req.params;

  console.log(req.params);

  try {
    const aplications = await getPostulationsByTalentId(id);

    res.status(200).json(aplications);
  } catch (error) {
    res.status(400).send("No se encontraron postulaciones de este talento");
  }
};

// Función para contratar a un aplicante.
const handlerHireTalent = async (req, res) => {
  const { TalentId, EventId } = req.body;
  try {
    await hireApplicant(TalentId, EventId);

    res.status(200).send("El aplicante ha sido contratado con éxito.");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Función para obtener a todos los aplicantes contratados.
const handlerGetAllHiredTalents = async (req, res) => {
  try {
    const hiredTalents = await getAllHiredTalents();
    res.status(200).json(hiredTalents);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función para obtener a todos los aplicantes contactados.
const handlerGetAllContactedTalents = async (req, res) => {
  try {
    const contactedTalents = await getAllContactedTalents();

    res.status(200).json(contactedTalents);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Función para obtener los nombres de las companias que han contactado a un postulante.
const handlerGetNameOfCompaniesContacted = async (req, res) => {
  try {
    const { TalentId } = req.query;
    const companies = await getNameCompanies(TalentId);

    res.status(200).json(companies);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Función para traer todos los contactados por una empresa.
const handlerGetContactedByCompany = async (req, res) => {
  const { idCompany } = req.params;
  try {
    const contactedApplicants = await getContactedByCompany(idCompany);

    res.status(200).json(contactedApplicants);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Función para traer todos los contratados por una empresa.
const handlerGetHiredByCompany = async (req, res) => {
  const { idCompany } = req.params;
  try {
    const hiredApplicants = await getHiredByCompany(idCompany);

    res.status(200).json(hiredApplicants);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  handlerGetAllApplied,
  handlerCreateApplied,
  handlerGetApplicantById,
  handlerDeleteApplicantById,
  handlerGetApplicantsForEventByFk,
  handlerGetApplicantsByName,
  handlerToContact,
  handlerGetTalentAplications,
  handlerHireTalent,
  handlerGetAllHiredTalents,
  handlerGetAllContactedTalents,
  handlerGetNameOfCompaniesContacted,
  handlerGetContactedByCompany,
  handlerGetHiredByCompany,
};
