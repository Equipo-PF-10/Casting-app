const { Talent } = require('../../db');

const updateFormTalent = async (
  id,
  name,
  email,
  password,
  dni,
  available,
  dateComeBack,
  image,
  portfolio,
  gender,
  aboutMe,
  nationality,
  ubication,
  hability,
  contexture,
  ethnicOrigin,
  weight,
  height,
  contact,
  socialNetwork,
  reviews,
  reviewsCount
) => {
  const [rowsUpdated] = await Talent.update(
    {
      name,
      dni,
      email,
      password,
      available,
      dateComeBack,
      image,
      portfolio,
      gender,
      aboutMe,
      nationality,
      ubication,
      hability,
      contexture,
      ethnicOrigin,
      weight,
      height,
      contact,
      socialNetwork,
      reviews,
      reviewsCount,
    },
    {
      where: { id },
    }
  );

  // Verifica si se encontró el talento y se actualizó correctamente
  if (rowsUpdated === 0) {
    throw new Error(`No se encontró el talento con ID ${id} o no se realizaron cambios.`);
  }

  // Opcionalmente, puedes cargar el talento actualizado desde la base de datos
  const updatedTalent = await Talent.findByPk(id);
  return updatedTalent;
};

module.exports = { updateFormTalent };

// const {Talent} = require('../../db');
// const createFormTalent = async (id, name, email, password, dni, available, dateComeBack, image,
//     portfolio,
//     gender,
//     aboutMe,
//     nationality,
//     ubication,
//     hability,
//     contexture,
//     ethnicOrigin,
//     weight,
//     height,
//     contact,
//     socialNetwork,
//     reviews,
//     reviewsCount) => {

//     const talent = await Talent.update({
//     where:  {
               
//               name,
//               dni,
//               email,
//               password,
//               available,
//               dateComeBack,
//               image,
//               portfolio,
//               gender,
//               aboutMe,
//               nationality,
//               ubication,
//               hability,
//               contexture,
//               ethnicOrigin,
//               weight,
//               height,
//               contact,
//               socialNetwork,
//               reviews,
//               reviewsCount,
//             }})
// return talent;
// }

// module.exports = {createFormTalent};