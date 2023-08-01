const { Router } = require("express");
const {
  handlerAddReviewCompany,
} = require("../../handlers/reviews/reviewsHandler");

const companyReviewRouter = Router();

//? Ruta para añadir una nueva review a una empresa, como talento.
companyReviewRouter.patch("/", handlerAddReviewCompany);

module.exports = companyReviewRouter;
