const { Router } = require("express");
const {
  getAllPostHandler,
  createPostHandler,
} = require("../handlers/postulationsHandler");

const postulationRouter = Router();

postulationRouter.get("/", getAllPostHandler);
postulationRouter.post("/", createPostHandler);

module.exports = postulationRouter;
