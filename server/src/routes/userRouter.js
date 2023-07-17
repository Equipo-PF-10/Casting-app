const { Router } = require("express");
const getUserHandler = require("../handlers/getUserHandler");

const userRouter = Router();

userRouter.get("/users", getUserHandler);

module.exports = userRouter;
