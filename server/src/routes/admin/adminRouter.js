const {
  handlerGetPremiumCompanies,
  handlerGetUserByMonth,
  handlerGetAvailableUsers,
  handlerGetTopUsers,
  handlerTopPosts,
  handlerGetByNationality,
  // handlerGetIncomes,
} = require("../../handlers/admin/adminHandlers");

const { Router } = require("express");

const adminRouter = Router();

//? Esta ruta es para obtener las companies según su número de posts (Eventos creados).
//| /admin/companies/posts
adminRouter.get("/companies/posts", handlerTopPosts);

//? Esta ruta trae todas las empresas de un plan en particular que fueron registradas a partir del mes que se pasa por param.
//| /admin/companies/premium/6  --> trae las empresas con plan premium que fueron creadas desde junio hasta la actualidad
adminRouter.get("/companies/:plan/:initialMonth", handlerGetPremiumCompanies);

//? Esta ruta trae todos los usuarios (talents o companies) con disponibilidad.
//| /admin/users/available/talents
adminRouter.get("/users/available/:userType", handlerGetAvailableUsers);

//? Esta ruta trae el top de los usuarios por número de reseñas. De mayor a menor.
//| /admin/users/top/talents
adminRouter.get("/users/top/:userType", handlerGetTopUsers);

//? Esta ruta trae usuarios según su nacionalidad.
//| /admin/users/nationality/talents/brasil
adminRouter.get(
  "/users/nationality/:userType/:country",
  handlerGetByNationality
);

//? Esta ruta es para buscar cuantos usuarios (talentos o companies) se registraron por mes.
//| /admin/users/talents/5  --> devuelve los usuarios de tipo talents que se registraron en mayo.
adminRouter.get("/users/:userType/:month", handlerGetUserByMonth);

//? Esta ruta es para obtener los ingresos totales de la app. según qué plataforma se pasa por params.
//! DUDA: ¿El modelo SubscriptionPayment es de PayPal y el de Payment es de MP?
//| /admin/income/paypal
// adminRouter.get("/income/:platform", handlerGetIncomes);

module.exports = adminRouter;
