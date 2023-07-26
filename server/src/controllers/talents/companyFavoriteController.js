const {
  CompanySelectedAsFav,
  Talent,
  Company,
  TalentSelectCompanyAsFav,
} = require("../../db");

// talento agrega una empresa como favorita
const createFavoriteCompany = async (talentId, companyId) => {
  try {
    const talent = await Talent.findByPk(talentId);
    if (!talent) {
      throw new Error("Talento no encontrado.");
    }
    const empresaEncontrada = await Company.findByPk(companyId);
    if (!empresaEncontrada) {
      throw new Error("Empresa no encontrada.");
    }
    const favoriteCompany = await CompanySelectedAsFav.create(
      empresaEncontrada.dataValues
    );

    const interTalentComp = await TalentSelectCompanyAsFav.create({
      TalentId: talentId,
      CompanySelectedAsFavId: favoriteCompany.id,
    });
    return favoriteCompany;
  } catch (error) {
    throw new Error(
      "Error. La empresa no ha podido ser agregada como favorita."
    );
  }
};

// Favorites Companies de un Talento.
async function getAllFavoritesCompaniesOfTalent(id) {
  try {
    const talent = await Talent.findByPk(id);
    if (!talent) {
      throw new Error("Talento no encontrado.");
    }

    const favCompanys = TalentSelectCompanyAsFav.findAll({
      where: { TalentId: id },
    });

    return favCompanys;
  } catch (error) {
    throw new Error(
      `Error. No se ha podido encontrar las companías favoritas del Talento con ID ${id}`
    );
  }
}

module.exports = {
  getAllFavoritesCompaniesOfTalent,
  createFavoriteCompany,
};
