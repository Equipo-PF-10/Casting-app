const { Review, Company, Talent } = require("../../db");

// Función controller para añadir review a una company.
const addReviewCompany = async (CompanyId, TalentId, rating, text) => {
  try {
    const company = await Company.findByPk(CompanyId);
    const talent = await Talent.findByPk(TalentId);

    if (!company || !talent) {
      throw new Error("Error al encontrar la empresa o el talento.");
    }

    const review = await Review.create({ rating, text });

    await review.setCompany(company);
    await review.setTalent(talent);

    company.reviews =
      (company.reviews * company.reviewsCount + rating) /
      (company.reviewsCount + 1);
    company.reviewsCount += 1;
    await company.save();

    return review;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller para añadir un review a un talento.
const addReviewTalent = async (CompanyId, TalentId, rating, text) => {
  try {
    const company = await Company.findByPk(CompanyId);
    const talent = await Talent.findByPk(TalentId);

    if (!company || !talent) {
      throw new Error("Error al encontrar la empresa o el talento.");
    }

    const review = await Review.create({ rating, text });

    await review.setCompany(company);
    await review.setTalent(talent);

    talent.reviews =
      (talent.reviews * talent.reviewsCount + rating) /
      (talent.reviewsCount + 1);
    talent.reviewsCount += 1;
    await talent.save();

    return review;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller para obtener reviews de una empresa.
const getCompanyReviews = async (id) => {
  const reviews = await Review.findAll({
    where: { CompanyId: id },
    include: [Talent],
  });

  return reviews;
};

// Función controller para obtener las reviews.
const getTalentReviews = async (id) => {
  try {
    const reviews = await Review.findAll({
      where: { TalentId: id },
      include: [Company],
    });

    return reviews;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateReview = async (id, text, rating, CompanyId, TalentId) => {
  const [rowsUpdated] = await Review.update(
    {
      text,
      rating,
      CompanyId,
      TalentId,
    },
    {
      where: { id },
    }
  );

  if (rowsUpdated === 0) {
    throw new Error(
      `No se encontró el review con ID ${id} y no se realizaron cambios.`
    );
  }

  // Opcionalmente, puedes cargar el talento actualizado desde la base de datos
  const updatedReview = await Review.findByPk(id);
  return updatedReview;
};

module.exports = {
  addReviewCompany,
  addReviewTalent,
  getCompanyReviews,
  getTalentReviews,
  updateReview,
};
