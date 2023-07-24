const { agregarTalentoFavorito, obtenerTalentosFavoritosDeEmpresa,
} = require('../controllers/talentosFavoritosController');

async function agregarTalentoFavoritoHandler(req, res) {
  try {
    const { idEmpresa, idTalento } = req.body;

    const result = await agregarTalentoFavorito(idEmpresa, idTalento);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function obtenerTalentosFavoritosDeEmpresaHandler(req, res) {
  try {
    const { idEmpresa } = req.params;

    const talentosFavoritos = await obtenerTalentosFavoritosDeEmpresa(idEmpresa);
    res.status(200).json(talentosFavoritos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = {
  agregarTalentoFavoritoHandler,
  obtenerTalentosFavoritosDeEmpresaHandler
};