const {
  handlerGetPremiumCompanies,
  handlerGetUserByMonth,
} = require("../../handlers/admin/adminHandlers");

const { Router } = require("express");

const adminRouter = Router();

//? Esta ruta trae todas las empresas de un plan en particular que fueron creadas a partir del mes que se pasa por param.
//! /admin/companies/premium/6  --> trae las empresas con plan premium que fueron creadas desde junio hasta la actualidad

adminRouter.get("/companies/:plan/:initialMonth", handlerGetPremiumCompanies);

//? Esta ruta es para buscar cuantos usuarios (talentos o companies) se registraron por mes.
//! /admin/users/talents/5  --> devuelve los usuarios de tipo talents que se registraron en mayo.
adminRouter.get("/users/:userType/:month", handlerGetUserByMonth);

module.exports = adminRouter;
