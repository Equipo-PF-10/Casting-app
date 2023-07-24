const { Empresa, TalentosFavoritos, Talento } = require("../db")

async function agregarTalentoFavorito(idEmpresa, idTalento) {

  try {
    const empresa = await Empresa.findByPk(idEmpresa);
   
    if (!empresa) {
      throw new Error('Empresa no encontrada');
    }

    const talentoEncontrado = await Talento.findByPk(idTalento);

    if (!talentoEncontrado) {
      throw new Error('Talento no encontrado');
    }

   const favoritoAgregado = await TalentosFavoritos.create(talentoEncontrado.dataValues);

    return {favoritoAgregado};
  } catch (error) {
    throw new Error('Error al agregar el talento como favorito: ' + error.message);
  }
}

async function obtenerTalentosFavoritosDeEmpresa(idEmpresa) {
  try {
    const empresa = await Empresa.findByPk(idEmpresa, {
      include: {
        model: TalentosFavoritos,
        attributes: ["description"],
      },
    });

    if (!empresa) {
      throw new Error('Empresa no encontrada');
    }

    return empresa.TalentosFavoritos;
  } catch (error) {
    throw new Error('Error al obtener talentos favoritos de la empresa: ' + error.message);
  }
}

module.exports = {
  agregarTalentoFavorito,
  obtenerTalentosFavoritosDeEmpresa,
};