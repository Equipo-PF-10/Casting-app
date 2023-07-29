require ('dotenv').config()
const { Router } = require("express");
const transporter = require("../../../helpers/mailer"); 
const port = process.env.PORT
const { handlerRegisterTalent,
        handlerRegisterCompany,
        handlerCompanynewEvent,
        handlerNewPostulant,
        handlerTalentContact,
        handlerExpirationSuscription,
        handlerStopAdd
     } = require("../../handlers/emails/emailsHandler");

const emailRouter = Router();

// Ruta que envia email al resgistrase un nuevo Talent.
emailRouter.post("/registerTalent/:email", handlerRegisterTalent)
 
// Ruta que envia email al resgistrase una nueva Company.
emailRouter.post("/registerCompany/:email", handlerRegisterCompany)

// Ruta que envia email a Company por el registro de un nuevo Event.
emailRouter.post("/companyNewEvent/:email", handlerCompanynewEvent)

// Ruta que envia email a Company por nuevo postulante.
emailRouter.post("/newPostulante/:email", handlerNewPostulant)

// Ruta que envia email a Talent que hace sido contactado.
emailRouter.post("/talentContac/:email", handlerTalentContact)

// Ruta que envia email a Company dando aviso de que en 15 días vence su suscripción.
emailRouter.post("/expirationSuscription/:email", handlerExpirationSuscription)

// Ruta que envia email a Company de que se han agotado sus publicaciones.
emailRouter.post("/stopAdd/:email", handlerStopAdd)



module.exports = emailRouter;
