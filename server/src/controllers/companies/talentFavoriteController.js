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
  getFavoritesTalentsById,
};
