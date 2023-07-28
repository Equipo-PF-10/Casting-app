const { Router } = require("express");
const {handlerUpdateFormEvent} = require("../../handlers/forms/eventFormHandler");

const eventRouter = Router();
eventRouter.patch("/", handlerUpdateFormEvent);
module.exports = eventRouter;