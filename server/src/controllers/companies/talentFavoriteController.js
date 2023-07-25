const { Talent, Company, CompanySelectTalentAsFav,TalentSelectedAsFav } = require("../../db");


// talento agrega una empresa como favorita
const createFavoriteTalent = async (talentId, companyId) => {
  try {
    const company = await Company.findByPk(companyId);
    if (!company) {
      throw new Error("Compañia no encontrada.");
    }
    const talentoEncontrado = await Talent.findByPk(talentId);
    if (!talentoEncontrado) {
      throw new Error("Empresa no encontrada.");
    }
    const talentoFavCreado = await TalentSelectedAsFav.create(talentoEncontrado.dataValues);  
        
    const interCompañiaTale = await CompanySelectTalentAsFav.create({TalentosFavoritoId: talentoFavCreado.dataValues.id, EmpresaId:companyId });
    return talentoFavCreado;
  } catch (error) {
    throw new Error("Error al agregar la empresa como favorita al talento.");
  }
};

//! *****************************************************************************************
//! Julio Tiene Pendiente terminar esta ruta*************************************************
//! *****************************************************************************************
const getFavoritesTalentsById = async (EmpresaId) => {
  try {

    const julio = await TalentSelectedAsFav.findAll();
    console.log(julio);
    if (!julio) {
      throw new Error("Compañia no encontrada.");
    }
    
      } catch (error) {
        throw new Error("Error al agregar la empresa como favorita al talento.");
      }
    };


// async function obtenerTalentosFavoritosDeEmpresa(idEmpresa) {
//   try {
//     const empresa = await Company.findByPk(idEmpresa, {
//       include: {
//         model: TalentosFavoritos,
//         attributes: ["description"],
//       },
//     });

//     if (!empresa) {
//       throw new Error('Empresa no encontrada');
//     }

//     return empresa.TalentosFavoritos;
//   } catch (error) {
//     throw new Error('Error al obtener talentos favoritos de la empresa: ' + error.message);
//   }
// }



module.exports = {
  createFavoriteTalent,
  getFavoritesTalentsById
};