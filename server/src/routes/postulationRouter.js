const { Router } = require("express");
const {
  getAllPostHandler,
  createPostHandler,
  getByIdHandler,
  deleteByIdHandler,
  getByFkHandler,
} = require("../handlers/postulationsHandler");

const postulationRouter = Router();

postulationRouter.get("/", getAllPostHandler);
postulationRouter.get("/:fk",getByFkHandler)
postulationRouter.post("/", createPostHandler);
postulationRouter.get("/:id", getByIdHandler);
postulationRouter.delete("/:id", deleteByIdHandler);

module.exports = postulationRouter;
