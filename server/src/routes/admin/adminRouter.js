const {
  handlerGetPremiumCompanies,
} = require("../../handlers/admin/adminHandlers");

const { Router } = require("express");

const adminRouter = Router();

//? Esta ruta trae las empresas PREMIUM creadas a partir del mes que se pasa por param.
adminRouter.get("/premium/:initialMonth", handlerGetPremiumCompanies);

module.exports = adminRouter;
