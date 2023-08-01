const { Router } = require("express");
const {
  handlerAddReviewTalent,
} = require("../../handlers/reviews/reviewsHandler");

const talentReviewRouter = Router();

//? Ruta para añadir una nueva review a un talent, como empresa.
talentReviewRouter.patch("/", handlerAddReviewTalent);

module.exports = talentReviewRouter;
