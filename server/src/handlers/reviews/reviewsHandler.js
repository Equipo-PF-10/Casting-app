const {
  addReviewCompany,
  addReviewTalent,
} = require("../../controllers/reviews/reviewsController");

// Handler para añadir una review a una empresa.
const handlerAddReviewCompany = async (req, res) => {
  try {
    const { CompanyId, TalentId, rating, text } = req.body;

    const review = await addReviewCompany(CompanyId, TalentId, rating, text);

    res.status(200).json(review);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Handler para añadir una review a un talento.
const handlerAddReviewTalent = async (req, res) => {
  try {
    const { CompanyId, TalentId, rating, text } = req.body;

    const review = await addReviewTalent(CompanyId, TalentId, rating, text);

    res.status(200).json(review);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { handlerAddReviewCompany, handlerAddReviewTalent };
