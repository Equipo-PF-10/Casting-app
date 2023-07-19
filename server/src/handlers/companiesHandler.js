const Empresa = require("../models/Empresa");


const searchByName = async (req, res) => {
  try {
    const nombre = req.params.nombre;
    const empresas = await Empresa.find({ nombre: { $like: "%" + nombre + "%" } });
    res.status(200).json(empresas);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar empresas por nombre: " + error });
  }
};


const searchByLocation = async (req, res) => {
  try {
    const ubicacion = req.params.ubicacion;
    const empresas = await Empresa.find({ ubicacion: { $like: "%" + ubicacion + "%" } });
    res.status(200).json(empresas);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar empresas por ubicación: " + error });
  }
};

module.exports = {
  searchByName,
  searchByLocation,
};