const { Router } = require("express");
const getUserHandler = require("../handlers/getTalentsHandler");

const userRouter = Router();

userRouter.get("/users", getUserHandler);

module.exports = userRouter;
