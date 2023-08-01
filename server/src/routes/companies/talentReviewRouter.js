const { Router } = require("express");
const {
  handlerAddReviewTalent,
  handlerGetReviewsForCompany,
  handlerUpdateReview,
} = require("../../handlers/reviews/reviewsHandler");

const talentReviewRouter = Router();

//? Ruta para obtener las reviews de una empresa.
talentReviewRouter.get("/:idEmpresa", handlerGetReviewsForCompany);

//? Ruta para actualizar una review de un talento, como empresa.
talentReviewRouter.patch("/:idReview", handlerUpdateReview);

//? Ruta para añadir una nueva review a un talent, como empresa.
talentReviewRouter.post("/", handlerAddReviewTalent);

module.exports = talentReviewRouter;
