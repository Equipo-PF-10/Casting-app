const { Company } = require("../../db");

const updateCompany = async (
  id,
  name,
  image,
  country,
  available,
  domain,
  descriptionShort,
  instagram,
  facebook,
  linkedin,
  twitter,
  password,
  email,
  industryMain,
  description,
  phoneNumber,
  plan,
  conditionPlan,
  creationDate,
  expirationDate,
  reviews,
  reviewsCount
) => {
  const [rowsUpdated] = await Company.update(
    {
      name,
      image,
      country,
      available,
      domain,
      descriptionShort,
      instagram,
      facebook,
      linkedin,
      twitter,
      password,
      email,
      industryMain,
      description,
      phoneNumber,
      plan,
      conditionPlan,
      creationDate,
      expirationDate,
      reviews,
      reviewsCount,
    },
    {
      where: { id },
    }
  );

  if (rowsUpdated === 0) {
    throw new Error(
      `No se encontró la empresa con ID ${id} o no se realizaron los cambios.`
    );
  }
  const updatedCompany = await Company.findByPk(id);
  return updatedCompany;
};

module.exports = {
  updateCompany,
};
