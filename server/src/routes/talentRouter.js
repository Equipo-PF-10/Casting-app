const { Router } = require("express");
const getUserHandler = require("../handlers/talentsHandler");

const userRouter = Router();

userRouter.get("/users", getUserHandler);

module.exports = userRouter;
