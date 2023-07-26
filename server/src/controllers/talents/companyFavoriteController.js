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

//companies favoritas de un talento
async function getAllFavoritesCompaniesOfTalent(talentId) {
  try {
    const talent = await Talent.findByPk(talentId);
    if (!talent) {
      throw new Error("Talento no encontrado.");
    }
    return talent.CompanySelectedAsFav;
  } catch (error) {
    throw new Error("Error al buscar las compañías favoritas del talent.");
  }
}

module.exports = {
  getAllFavoritesCompaniesOfTalent,
  createFavoriteCompany,
};
