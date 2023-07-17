const { Router } = require("express");
const getProfileHandler = require("../handlers/getProfileHandler");

const profileRouter = Router();

profileRouter.get("/users", getProfileHandler);

module.exports = profileRouter;
