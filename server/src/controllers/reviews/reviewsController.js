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

    // talent.reviews =
    //   (talent.reviews * talent.reviewsCount + rating) /
    //   (talent.reviewsCount + 1);
    // talent.reviewsCount += 1;
    // await talent.save();

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

    // company.reviews =
    //   (company.reviews * company.reviewsCount + rating) /
    //   (company.reviewsCount + 1);
    // company.reviewsCount += 1;
    // await company.save();

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

module.exports = { addReviewCompany, addReviewTalent };
