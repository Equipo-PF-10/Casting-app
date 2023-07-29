const {
  Talent,
  Company,
  CompanySelectTalentAsFav,
  TalentSelectedAsFav,
} = require("../../db");

// Empresa agrega a un talento como favorito.
const createFavoriteTalent = async (TalentId, CompanyId) => {
  try {
    const company = await Company.findByPk(CompanyId);
    if (!company) {
      throw new Error(error.message);
    }
    const talentoEncontrado = await Talent.findByPk(TalentId);
    if (!talentoEncontrado) {
      throw new Error("Empresa no encontrada.");
    }
    const talentoFavCreado = await TalentSelectedAsFav.create(
      talentoEncontrado.dataValues
    );

    const interCompanyTale = await CompanySelectTalentAsFav.create({
      TalentSelectedAsFavId: talentoFavCreado.dataValues.id,
      CompanyId: CompanyId,
    });
    return talentoFavCreado;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller que devuelve todos los talentos favoritos de una empresa.
const getFavoritesTalentsById = async (id) => {
  try {
    const company = await Company.findByPk(id);

    if (!company) {
      throw new Error("Empresa no encontrada.");
    }

    const favTalents = await CompanySelectTalentAsFav.findAll({
      where: { CompanyId: id },
    });

    const talentIds = favTalents.map(
      (favTalent) => favTalent.TalentSelectedAsFavId
    );
    const talents = await Promise.all(
      talentIds.map((talentId) => Talent.findByPk(talentId))
    );

    return talents;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller para obtener Talento Favorito por nombre.
const getByName = async (name, id) => {
  const nameToLower = name.toLowerCase();
  const favTalents = await getFavoritesTalentsById(id);

  const filteredTalents = await favTalents.filter((talent) =>
    talent.name.toLowerCase().includes(nameToLower)
  );

  return filteredTalents;
};

module.exports = {
  createFavoriteTalent,
  getFavoritesTalentsById,
  getByName,
};
