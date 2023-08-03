const {
  handlerGetPremiumCompanies,
  handlerGetUserByMonth,
  handlerGetAvailableUsers,
  handlerGetTopUsers,
} = require("../../handlers/admin/adminHandlers");

const { Router } = require("express");

const adminRouter = Router();

//? Esta ruta trae todas las empresas de un plan en particular que fueron registradas a partir del mes que se pasa por param.
//| /admin/companies/premium/6  --> trae las empresas con plan premium que fueron creadas desde junio hasta la actualidad
adminRouter.get("/companies/:plan/:initialMonth", handlerGetPremiumCompanies);

//? Esta ruta trae todos los usuarios (talents o companies) con disponibilidad.
//| /admin/users/available/talents
adminRouter.get("/users/available/:userType", handlerGetAvailableUsers);

//? Esta ruta trae el top de los usuarios por número de reseñas. De mayor a menor.
//| /admin/users/top/talents
adminRouter.use("/users/top/:userType", handlerGetTopUsers);

//? Esta ruta es para buscar cuantos usuarios (talentos o companies) se registraron por mes.
//| /admin/users/talents/5  --> devuelve los usuarios de tipo talents que se registraron en mayo.
adminRouter.get("/users/:userType/:month", handlerGetUserByMonth);

module.exports = adminRouter;
