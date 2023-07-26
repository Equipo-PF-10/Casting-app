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
    const empresaFavEncontrada = await CompanySelectedAsFav.create(
      empresaEncontrada.dataValues
    );

    const interTalentComp = await TalentSelectCompanyAsFav.create({
      TalentoId: talentId,
      EmpresaFavoritumId: empresaFavEncontrada.id,
    });
    return empresaFavEncontrada;
  } catch (error) {
    throw new Error("Error al agregar la empresa como favorita al talent.");
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
