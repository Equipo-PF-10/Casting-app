const { EmpresaFavorita, Talento, Empresa, TalentoEmpresaFavorita } = require("../db");


// talento agrega una empresa como favorita
const addFavoriteCompany = async (talentId, companyId) => {
  try {
    const talent = await Talento.findByPk(talentId);    
      if (!talent) {
      throw new Error("Talento no encontrado.");
    }
    const empresaEncontrada = await Empresa.findByPk(companyId);
    if (!empresaEncontrada) {
      throw new Error("Empresa no encontrada.");
    }
    const empresaFavEncontrada = await EmpresaFavorita.create(empresaEncontrada.dataValues);  
    
    const interTalentComp = await TalentoEmpresaFavorita.create({TalentoId: talentId, EmpresaFavoritumId: empresaFavEncontrada.dataValues.id });
    return empresaFavEncontrada;
  } catch (error) {
    throw new Error("Error al agregar la empresa como favorita al talento.");
  }
};




// companies favoritas de un talento
// async function getFavoriteCompaniesByTalentId(talentId) {
//   try {
//     const talent = await Talento.findByPk(talentId);
//      if (!talent) {
//       throw new Error("Talento no encontrado.");
//     }
//     return talent.EmpresaFavorita;
//   } catch (error) {
//     throw new Error("Error al buscar las compañías favoritas del talento.");
//   }
// }

module.exports = {
  // getFavoriteCompaniesByTalentId,
  addFavoriteCompany
};