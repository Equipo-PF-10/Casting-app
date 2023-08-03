const {
  Talent,
  Company,
  CompanySelectTalentAsFav,
  TalentSelectedAsFav,
} = require("../../db");

// Empresa agrega a un talento como favorito.
const createFavoriteTalent = async (TalentId, CompanyId) => {
  try {
    // encuentra la compañia que quiere publicar un favorito
    const company = await Company.findByPk(CompanyId);
    // encuentra todos los talentos favoritos de esa compañia 
    const favorites = await company.getTalentSelectedAsFavs();
    // extraigo los ids de los talentos ya marcados como favoritos
    const intermedia = favorites.map(ele => ele.CompanySelectTalentAsFav)
    const favoritosIds = intermedia.map(ele => ele.TalentSelectedAsFavId)
    console.log(favoritosIds)
    // Busca coincidencia entre el talento que se quiere agregar a favorito y los que yaestan guardados como fav
    const validation = favoritosIds.filter(ele => ele === TalentId)
    // Si no consiguio coincidencia, Agrego el talento como favorito
    if (validation.length === 0) {
      // consigo el perfil completo del talento que se va a agregar a favoritos
      const talent = await Talent.findByPk(TalentId)
      // Crea un nuevo registro en la tabla de favoritos
      const posteo = await TalentSelectedAsFav.create(talent.dataValues);
      // asigna la posteo y el talento a la tabla intermedia
      await company.addTalentSelectedAsFav(posteo);
      //retorno el perfil agregadoa favoritos     
      return posteo;
      // como el talento ya estaba seleccionado como favorito procedo a sacarlo de ese grupo
    } else {
      // selecciono el talento que va a dejar de formar parte de los favoritos
      const desposteo = await TalentSelectedAsFav.findByPk(TalentId)
      // elimino el talento de los favoritos
      await desposteo.destroy();
      // retorno un mensaje de exito
      return({Mensaje:"El talento ha dejado de ser favorito"})
    }
 
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller que devuelve todos los talentos favoritos de una empresa.
const getFavoritesTalentsById = async (id) => {
  try {

        // encuentra la compañia que quiere publicar un favorito
        const company = await Company.findByPk(id);
        // encuentra todos los talentos favoritos de esa compañia 
        const favorites = await company.getTalentSelectedAsFavs();
        // extraigo los ids de los talentos ya marcados como favoritos

    if (!company) {
      throw new Error("Empresa no encontrada.");
    }

    return favorites;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller para obtener Talento Favorito por nombre.
const getByName = async (name, id) => {
  try {
    const nameToLower = name.toLowerCase();
    const favTalents = await getFavoritesTalentsById(id);

    const filteredTalents = await favTalents.filter((talent) =>
      talent.name.toLowerCase().includes(nameToLower)
    );

    return filteredTalents;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createFavoriteTalent,
  getFavoritesTalentsById,
  getByName,
};
