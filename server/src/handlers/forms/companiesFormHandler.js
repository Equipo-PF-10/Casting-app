const {
  updateCompany,
} = require("../../controllers/forms/companyFormController");

const handlerUpdateFormCompany = async (req, res) => {
  const {
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
    reviewsCount,
  } = req.body;
  try {
    const updatedCompany = await updateCompany(
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
    );
    
    res.status(200).send("Se ha actualizado el perfil correctamente.") //json(updatedCompany);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { handlerUpdateFormCompany };
