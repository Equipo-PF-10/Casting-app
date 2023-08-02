const { Router } = require("express");
const talentRouter = require("./talents/talentRouter");
const eventRouter = require("./events/eventRouter");
const companyRouter = require("./companies/companyRouter");
const companyFavoriteRouter = require("./talents/companyFavoriteRouter");
const talentsFavoriteRouter = require("./companies/talentsFavoriteRouter");
const postulationRouter = require("./talents/postulationRouter");
const emailRouter = require("./emails/emailRouter");
const talentFormRouter = require("../routes/forms/talentFormRouter");
const companyFormRouter = require("./forms/companyFormRouter");
const eventFormRouter = require("../routes/forms/eventFormRouter");
const companyReviewRouter = require("./talents/companyReviewRouter");
const talentReviewRouter = require("./companies/talentReviewRouter");

const paymentRouter = require("./payments/paymentRouter");
const companyPaymentsRouter = require("./payments/companyPaymentsRouter");

const companyTalentContact = require("./companies/companyTalentRouter");
const adminRouter = require("./admin/adminRouter");


//const loginSignupRouter = require("./login-sigup/loginSignupRouter");
//const accessApiRouter = require("./access/accessApiRouter");
//const ensureToken = require("../handlers/token/tokenValidator");

const conditionPlanRouter = require("./companies/conditionPlanRouter");

const mainRouter = Router();

//* Rutas de Empresas
mainRouter.use("/companies/favorites", talentsFavoriteRouter);
mainRouter.use("/companies/plan", conditionPlanRouter);
mainRouter.use("/companies/reviews", talentReviewRouter);
mainRouter.use("/companies/contact", companyTalentContact);
mainRouter.use("/companies", companyRouter);

//? Rutas de Talentos
mainRouter.use("/talents/favorites", companyFavoriteRouter);
mainRouter.use("/talents/reviews", companyReviewRouter);
mainRouter.use("/talents", talentRouter);

//todo: Rutas de Eventos
mainRouter.use("/events", eventRouter);

//todo: Rutas de Postulaciones
mainRouter.use("/applied", postulationRouter);

//todo: Rutas de Emails
mainRouter.use("/email", emailRouter);

//!Ruta de Formularios
mainRouter.use("/forms/talents", talentFormRouter);
mainRouter.use("/forms/companies", companyFormRouter);
mainRouter.use("/forms/events", eventFormRouter);


//Rutas de Pagos
mainRouter.use("/payments", paymentRouter);
mainRouter.use("/company/payments", companyPaymentsRouter);

//* Rutas de Admin.
mainRouter.use("/admin", adminRouter);


module.exports = mainRouter;
