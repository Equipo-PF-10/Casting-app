const { Empresa } = require ("../db");

const searchByName = async (req, res) => {
  try {
    const nombre = req.query.nombre;
    const empresas = await Empresa.find({ nombre: { $like: "%" + nombre + "%" } });
   return res.status(200).json(empresas);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar empresas por nombre: " + error });
  }
};


const searchByLocation = async (req, res) => {
  try {
    const ubicacion = req.query.ubicacion;
    const empresas = await Empresa.find({ ubicacion: { $like: "%" + ubicacion + "%" } });
    res.status(200).json(empresas);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar empresas por ubicación: " + error });
  }
};


const createCompany = async (req, res) => {
  try {
    const { name, descriptionShort, domain, logo, socialNetworks, country } = req.body;
    const newCompany = {
      name,
      descriptionShort,
      domain,
      logo,
      socialNetworks,
      country,
    };

    const companyCreate = await Empresa.create(newCompany);

    res.status(201).json(companyCreate);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la empresa: " + error });
  }
};

module.exports = {
  searchByName,
  searchByLocation,
  createCompany,
};

