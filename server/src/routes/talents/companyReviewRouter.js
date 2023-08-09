const { Router } = require("express");
const {
  handlerAddReviewCompany,
  handlerGetReviewsForTalent,
  handlerUpdateReview,
  handlerGetCommentsByTalents,
} = require("../../handlers/reviews/reviewsHandler");

const companyReviewRouter = Router();

//? Ruta para obtener las reviews de un talento.
companyReviewRouter.get("/:idTalento", handlerGetReviewsForTalent);

//? Ruta para actualizar una review de una empresa, como talento.
companyReviewRouter.patch("/:idReview", handlerUpdateReview);

//? Ruta para obtener comentarios hechos por talento.
companyReviewRouter.get("/", handlerGetCommentsByTalents);

//? Ruta para añadir una nueva review a una empresa, como talento.
companyReviewRouter.post("/", handlerAddReviewCompany);

module.exports = companyReviewRouter;
