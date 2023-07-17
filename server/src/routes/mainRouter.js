const { Router } = require("express");
const userRouter = require("./userRouter");
const profileRouter = require("./profileRouter");

const mainRouter = Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/profile", profileRouter);

module.exports = mainRouter;
