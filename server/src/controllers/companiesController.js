const Empresa = require("../models/companies");

const getAllCompanies = async (req, res) => {
  try {
    const empresas = await Empresa.findAll();
    res.status(200).json(empresas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las empresas de la base de datos: " + error });
  }
};

module.exports = { getAllCompanies };
