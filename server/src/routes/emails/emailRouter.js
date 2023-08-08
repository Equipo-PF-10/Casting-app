require ('dotenv').config()
const { Router } = require("express");
const transporter = require("../../../helpers/mailer"); 
const port = process.env.PORT
const { handlerRegisterTalent,
        handlerRegisterCompany,
        handlerCompanyNewEvent,
        handlerNewPostulant,
        handlerPostulation,
        handlerTalentContact,
        handlerTalentContactRefused,
        handlerExpirationSuscription,
        handlerStopAdd,
        handlerEditedPerfilCompany,
        handlerTalentContactVanished,
        handlerCompanyVanished,
        handlerTalentContactHired,
        handlerEditedPerfilTalent,
        handlerSuscriptionFree,
        handlerSuscriptionPro,
        handlerSuscriptionPremium,
        handlerStop,
        handlerCompanyEditedEvent
     } = require("../../handlers/emails/emailsHandler");

const emailRouter = Router();


// ? ////////////////////////   EMAILS TALENT   //////////////////////////////////////////////////////


// Ruta que envia email al resgistrase un nuevo Talent.
emailRouter.post("/registerTalent/:email", handlerRegisterTalent)
 
// Ruta que envia email a Talento por su postulacion.
emailRouter.post("/postulationEvent/:email", handlerPostulation) 

// Ruta que envia email a Talent que hace sido contactado.                     
emailRouter.post("/talentContac/:email", handlerTalentContact)

// Ruta que envia email a Talent que hace sido contratado.
emailRouter.post("/talenContacHired/:email", handlerTalentContactHired)

// Ruta que envia email a Talent que hace sido rechazado.
emailRouter.post("/talentContacRefused/:email", handlerTalentContactRefused)

// Ruta que envia email a Talent que hace sido vaneado.
emailRouter.post("/talentVanished/:email", handlerTalentContactVanished)

// Ruta que envia email a Talent que hace modificado su perfil.
emailRouter.post("/editedPerfilTalent/:email", handlerEditedPerfilTalent)



//? ////////////////////////////      EMAILS COMPANY   ///////////////////////////////////////////////


// Ruta que envia email al resgistrase una nueva Company.
emailRouter.post("/registerCompany/:email", handlerRegisterCompany)

// Ruta que envia email a Company por el registro de un nuevo Event.
emailRouter.post("/companyNewEvent/:email", handlerCompanyNewEvent)

// Ruta que envia email a Company por ediciiont de un  Event.
emailRouter.post("/companyEditedEvent/:email", handlerCompanyEditedEvent)

// Ruta que envia email a Company por nuevo postulante.
emailRouter.post("/newPostulante/:email", handlerNewPostulant)

 // Ruta que envia email a Company dando aviso de que en 15 días vence su suscripción.
emailRouter.post("/expirationSuscription/:email", handlerExpirationSuscription)

// Ruta que envia email a Company de que se han agotado sus publicaciones.
emailRouter.post("/stopAdd/:email", handlerStopAdd)

// Ruta que envia email a Company de que ya no puede publicar
emailRouter.post("/stop/:email", handlerStop)

 // Ruta que envia email a Company dando aviso que se suscribió al plan free.
 emailRouter.post("/suscriptionFree/:email", handlerSuscriptionFree)

 // Ruta que envia email a Company dando aviso que se suscribió al plan free.
 emailRouter.post("/suscriptionPro/:email", handlerSuscriptionPro)

 // Ruta que envia email a Company dando aviso que se suscribió al plan free.
 emailRouter.post("/suscriptionPremium/:email", handlerSuscriptionPremium)

// Ruta que envia email a Company dando aviso de que ha editado su perfil.
emailRouter.post("/editedPerfilCompany/:email", handlerEditedPerfilCompany)        //ok

// Ruta que envia email a Company que hace sido vaneada.
emailRouter.post("/companyVanished/:email", handlerCompanyVanished)



module.exports = emailRouter;
