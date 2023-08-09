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
        handlerCompanyEditedEvent,
        handlerContacRefusedForCompany,
        handlerTalentContactForCompany,
        handlerContacHiredForCompany,
        handlerEventFinish
     } = require("../../handlers/emails/emailsHandler");

const emailRouter = Router();


// ? ////////////////////////   EMAILS TALENT   //////////////////////////////////////////////////////


// Ruta que envia email al resgistrase un nuevo Talent.                               //?ok
emailRouter.post("/registerTalent/:email", handlerRegisterTalent)                    
 
// Ruta que envia email a Talento por su postulacion.                                 //?ok
emailRouter.post("/postulationEvent/:email", handlerPostulation) 

// Ruta que envia email a Talent que ha modificado su perfil.                         //?ok
emailRouter.post("/editedPerfilTalent/:email", handlerEditedPerfilTalent)         

// Ruta que envia email a Talent que hace sido contactado.                            //?ok
emailRouter.post("/talentContac/:email", handlerTalentContact)

// Ruta que envia email a Talent que hace sido contratado.
emailRouter.post("/talenContacHired/:email", handlerTalentContactHired)

// Ruta que envia email a Talent que hace sido rechazado.                             //?ok
emailRouter.post("/talentContacRefused/:email", handlerTalentContactRefused)

// Ruta que envia email a Talent que hace sido vaneado.
emailRouter.post("/talentVanished/:email", handlerTalentContactVanished)




//? ////////////////////////////      EMAILS COMPANY   ///////////////////////////////////////////////

// Ruta que envia email al resgistrase una nueva Company.                              //?ok
emailRouter.post("/registerCompany/:email", handlerRegisterCompany)           

// Ruta que envia email a Company por el registro de un nuevo Event.                   //?ok
emailRouter.post("/companyNewEvent/:email", handlerCompanyNewEvent)

// Ruta que envia email a Company por edicion de un  Event.                           
emailRouter.post("/companyEditedEvent/:email", handlerCompanyEditedEvent)

// Ruta que envia email a Company por nuevo postulante.                                //?ok
emailRouter.post("/newPostulante/:email", handlerNewPostulant) 

// Ruta que envia email a Company que ha rechazado a un talento.                       //?ok
emailRouter.post("/talentContacRefusedForCompany/:email", handlerContacRefusedForCompany)

// Ruta que envia email a Company que ha contactado a un talento.                      //?ok
emailRouter.post("/talentContacForCompany/:email", handlerTalentContactForCompany)

// Ruta que envia email a Company que ha contratado a un talento.
emailRouter.post("/talenContacHiredForCompany/:email", handlerContacHiredForCompany)   

// Ruta que envia email a Company que ha finalizado un evento.
emailRouter.post("/eventFinish/:email", handlerEventFinish)  

// Ruta que envia email a Company de que se han agotado sus publicaciones.             //?ok
emailRouter.post("/stopAdd/:email", handlerStopAdd)

// Ruta que envia email a Company de que ya no puede publicar                          //?ok
emailRouter.post("/stop/:email", handlerStop)

 // Ruta que envia email a Company dando aviso que se suscribió al plan free.          //?ok
 emailRouter.post("/suscriptionFree/:email", handlerSuscriptionFree)             

 // Ruta que envia email a Company dando aviso que se suscribió al plan Pro.           //?ok
 emailRouter.post("/suscriptionPro/:email", handlerSuscriptionPro)               

 // Ruta que envia email a Company dando aviso que se suscribió al plan Premium.       //?ok
 emailRouter.post("/suscriptionPremium/:email", handlerSuscriptionPremium)       

// Ruta que envia email a Company dando aviso de que ha editado su perfil.             //?ok
emailRouter.post("/editedPerfilCompany/:email", handlerEditedPerfilCompany)            

 // Ruta que envia email a Company dando aviso de que en 15 días vence su suscripción.
 emailRouter.post("/expirationSuscription/:email", handlerExpirationSuscription)

// Ruta que envia email a Company que hace sido vaneada.
emailRouter.post("/companyVanished/:email", handlerCompanyVanished)


module.exports = emailRouter;
