const {
  addReviewCompany,
  addReviewTalent,
  getTalentReviews,
  getCompanyReviews,
  updateReview,
} = require("../../controllers/reviews/reviewsController");

// Handler para añadir una review a una empresa.
const handlerAddReviewCompany = async (req, res) => {
  try {
    const { EventId, CompanyId, rating, text } = req.body;

    const review = await addReviewCompany(EventId, CompanyId, rating, text);

    res.status(200).json(review);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Handler para añadir una review a un talento.
const handlerAddReviewTalent = async (req, res) => {
  try {
    const { EventId, TalentId, rating, text } = req.body;

    const review = await addReviewTalent(EventId, TalentId, rating, text);

    res.status(200).json(review);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Función para obtener las reviews de una empresa.
const handlerGetReviewsForCompany = async (req, res) => {
  const { idEmpresa } = req.params;
  try {
    const reviewsCompany = await getCompanyReviews(idEmpresa);

    res.status(200).json(reviewsCompany);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const handlerGetReviewsForTalent = async (req, res) => {
  const { idTalento } = req.params;

  try {
    const reviewsTalent = await getTalentReviews(idTalento);

    res.status(200).json(reviewsTalent);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const handlerUpdateReview = async (req, res) => {
  const { idReview } = req.params;
  const { text, rating, CompanyId, TalentId } = req.body;

  try {
    const updatedReview = await updateReview(
      idReview,
      text,
      rating,
      CompanyId,
      TalentId
    );

    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  handlerAddReviewCompany,
  handlerAddReviewTalent,
  handlerGetReviewsForCompany,
  handlerGetReviewsForTalent,
  handlerUpdateReview,
};
