const { Router } = require("express");
const {
  handlerUpdateFormCompany,
} = require("../../handlers/forms/companiesFormHandler");

const companyFormRouter = Router();
companyFormRouter.patch("/", handlerUpdateFormCompany);

module.exports = companyFormRouter;
