const { Router } = require("express");

const { loginData } = require("../handlers/loginHandler")

const loginRouter = Router();


loginRouter.get("/login", loginData);


module.exports = loginRouter;



