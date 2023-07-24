const { Talento, Empresa, EmpresaTalentoFavorito,TalentosFavoritos } = require("../db");


// talento agrega una empresa como favorita
const addFavoriteTalent = async (talentId, companyId) => {
  try {
    const company = await Empresa.findByPk(companyId);
    if (!company) {
      throw new Error("Compañia no encontrada.");
    }
    const talentoEncontrado = await Talento.findByPk(talentId);
    if (!talentoEncontrado) {
      throw new Error("Empresa no encontrada.");
    }
    const talentoFavEncontrado = await TalentosFavoritos.create(talentoEncontrado.dataValues);  
        
    const interCompañiaTale = await EmpresaTalentoFavorito.create({TalentosFavoritoId: talentoFavEncontrado.dataValues.id, EmpresaId:companyId });
    return talentoFavEncontrado;
  } catch (error) {
    throw new Error("Error al agregar la empresa como favorita al talento.");
  }
};
const getFavoriteTalent = async (EmpresaId) => {
  try {

    const julio = await TalentosFavoritos.findAll();
    console.log(julio);




    //   include: [{
    //     model: Empresa,
    //     attributes: ['EmpresaId'],
    //     through:{
    //       attributes:[]
    //     }
    //   }]
    // })

//       dbVideogames = await Videogame.findAll({
//         include: [{
//             model: Genre,
//             attributes: ['name'],
//             through: {
//               attributes: []
//             }
//          }]
// });


    // const talentosFavEncontrado = await EmpresaTalentoFavorito.findAll({ where : { EmpresaId} });
    // console.log(talentosFavEncontrado)
    if (!julio) {
        throw new Error("Compañia no encontrada.");

    




    // const company = await Empresa.findByPk(companyId);
    }
    // const talentoEncontrado = await Talento.findByPk(talentId);
    // if (!talentoEncontrado) {
    //   throw new Error("Empresa no encontrada.");
    // }
    // const talentoFavEncontrado = await TalentosFavoritos.create(talentoEncontrado.dataValues);  
        
    // const interCompañiaTale = await EmpresaTalentoFavorito.create({TalentosFavoritoId: talentoFavEncontrado.dataValues.id, EmpresaId:companyId });
    // return talentoFavEncontrado;





  } catch (error) {
    throw new Error("Error al agregar la empresa como favorita al talento.");
  }
};

module.exports = {
  addFavoriteTalent,
  getFavoriteTalent
};