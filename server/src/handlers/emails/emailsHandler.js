const transporter = require("../../../helpers/mailer");

  
 const  handlerRegisterTalent = async (req, res) => {
    const { email } = req.params
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Registro exitoso",
            text:"¡Bienvenido/a a CastingApp! Nos alegra tenerte aquí. Prepárate para descubrir emocionantes oportunidades en el mundo del espectáculo. Completa tu perfil y comienza tu camino hacia el éxito artístico. \n\n  ¡Éxito asegurado!. \n\n   Atentamente,\n  El equipo de CastingApp",   
        },(err, info) => {
        })
        res.status(200).json({ok: true, message: "Se ha registrado con éxito!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}

const  handlerRegisterCompany = async (req, res) => {
    const { email } = req.params
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Registro exitoso",
            text:"¡Bienvenidos a CastingApp! Encuentra talento excepcional para tus proyectos artísticos. \n ¡Comienza a explorar ahora!.     \n\n Atentamente,   \n  El equipo de CastingApp",   
        },(err, info) => {
        })
        res.status(200).json({ok: true, message: "Su Company se ha registrado con éxito!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}


const  handlerCompanyNewEvent = async (req, res) => {
    const { email } = req.params
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Registro de Nuevo Evento exitoso",
            text:"¡Registro Exitoso! Nuevo Evento Creado.    Estimado equipo,  Nos complace informarles que el registro del nuevo evento ha sido creado con éxito. \n ¡Es un paso importante hacia el éxito del proyecto! Les mantendremos informados sobre los próximos pasos.  \n  ¡Gracias por su colaboración!     \n\n       Atentamente,   \n    El equipo de CastingApp",   
        },(err, info) => {
        })
        res.status(200).json({ok: true, message: "Se ha registrado con éxito el Nuevo Evento!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}

const  handlerNewPostulant = async (req, res) => {
    const { email } = req.params
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Nueva postulación recibida para su evento",
            text:"¡Es un gusto saludarle! Queríamos informarle que un talento ha enviado su postulación para participar en su evento. Estamos emocionados por la oportunidad de conectarles con artistas de gran talento y experiencia. Revisaremos cuidadosamente la postulación y le mantendremos informado/a sobre el proceso. \n ¡Gracias por utilizar CastingApp! \n\n  Atentamente,  \n    El equipo de CastingApp",   
        },(err, info) => {
        })
        res.status(200).json({ok: true, message: "La nueva postulación se realizado con éxito"})
    } catch (error) {
        console.log(error.message)
    }    
}


const  handlerPostulation = async (req, res) => {
    const { email } = req.params
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Felicidades por tu postulación al evento",
            text:"¡Es un gusto saludarle! Queríamos felicitarte por tu postulación para participar en el evento. Estamos emocionados por la oportunidad de conectarte con companias de mucha experiencia. Revisaremos cuidadosamente la postulación y le mantendremos informado/a sobre el proceso. \n ¡Gracias por utilizar CastingApp!  \n\n Atentamente,  \n    El equipo de CastingApp",   
        },(err, info) => {
        })
        res.status(200).json({ok: true, message: "La nueva postulación se realizado con éxito"})
    } catch (error) {
        console.log(error.message)
    }    
}

const  handlerTalentContact = async (req, res) => {
    const { email } = req.params
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"¡Felicidades! Has sido seleccionado/a por una compañía.",
            text:"Nos complace informarte que has sido elegido/a para participar en el proceso de seleccion al evento al que te has postulado. ¡Enhorabuena por esta emocionante oportunidad!   Pronto recibirás más detalles sobre los siguientes pasos. ¡Esperamos que tengas una experiencia increíble en este proyecto! \n ¡Mucho éxito en tu carrera artística! \n\n    Atentamente,   \n     El equipo de CastingApp",   
        },(err, info) => {
        })
        res.status(200).json({ok: true, message: "Se ha enviado el contacto con éxito!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}

const  handlerTalentContactRefused = async (req, res) => {
    const { email } = req.params
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Gracias por tu interés.",
            text:"  Esperamos que te encuentres bien. Agradecemos sinceramente tu interés en participar en nuestro Evento. Lamentamos informarte que en esta ocasión no has sido seleccionado para formar parte del evento. Queremos destacar que tu talento y habilidades son realmente valiosos, y te animamos a seguir participando en futuras oportunidades. Te recomendamos que sigas trabajando en tu desarrollo profesional, ya que sin duda tendrás éxito en futuros proyectos. \n Gracias por tu tiempo y esfuerzo. Te deseamos mucho éxito en tu carrera artística.   \n\n   Atentamente,   \n     El equipo de CastingApp",   
        },(err, info) => {
        })
        res.status(200).json({ok: true, message: "Se ha dado aviso Talento, que ha sido rechazado"})
    } catch (error) {
        console.log(error.message)
    }    
}

const  handlerExpirationSuscription = async (req, res) => {
    const { email } = req.params
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Suscripción CastingApp .",
            text: "¡Atención! Su suscripción anual vence en 15 días. Asegúrese de renovarla para continuar disfrutando de nuestros servicios sin interrupciones.\n¡Gracias por ser parte de nuestra comunidad!\n\nAtentamente,\nEl equipo de CastingApp",   
        },(err, info) => {
        })
        res.status(200).json({ok: true, message: "Se ha dado aviso con éxito!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}

const  handlerStopAdd = async (req, res) => {
    const { email } = req.params
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Límite de creación de eventos.",
            text:"¡Importante aviso! Estas a punto de alcanzar el límite de creación de eventos en tu plan actual. Le invitamos a suscribirse a nuevo plan, para disfrutar de publicar eventos de forma ilimitada. ¡No se pierda esta gran oportunidad de ampliar sus posibilidades!   Pronto recibirás más detalles sobre los siguientes pasos. \n ¡Esperamos que tengas una experiencia increíble en este proyecto! \n ¡Mucho éxito!  \n\n   Atentamente,  \n      El equipo de CastingApp",   
        },(err, info) => {
        })
        res.status(200).json({ok: true, message: "Se ha dado aviso con éxito!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}


const  handlerStop = async (req, res) => {
    const { email } = req.params
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Ha alcanzado su limite de anuncios.",
            text:"¡Importante aviso! Ya has utilizado el total de los eventos publicados disponibles segùn tu plan. Le invitamos a suscribirse a nuestro plan Premium para disfrutar de publicar eventos de forma ilimitada. ¡No se pierda esta gran oportunidad de ampliar sus posibilidades!   Pronto recibirás más detalles sobre los siguientes pasos. \n ¡Esperamos que tengas una experiencia increíble en este proyecto! \n ¡Mucho éxito!  \n\n   Atentamente,  \n      El equipo de CastingApp",   
        },(err, info) => {
        })
        res.status(200).json({ok: true, message: "Se ha dado aviso con éxito!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}


const  handlerEditedPerfilCompany = async (req, res) => {
    const { email } = req.params
    console.log(email);
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Perfil actualizado con éxito!!.",
            text:"Has actualizado con éxito tu perfil. ¡Esperamos que tengas una experiencia increíble en este proyecto! \n ¡Mucho éxito!    Atentamente,   \n\n      El equipo de CastingApp",   
        },(err, info) => {
        })
         return res.status(200).json({ok: true, message: "Se ha dado aviso con éxito!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}


const  handlerTalentContactVanished = async (req, res) => {
    const { email } = req.params
    console.log(email);
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Usuario Suspendido!!.",
            text:"Estimado usuario, lamentamos informarte que tu cuenta ha sido suspendida debido a malas prácticas. Por favor, contacta a nuestro equipo de soporte para más información. Gracias.\n\n    Atentamente,    \n    El equipo de CastingApp",   
        },(err, info) => {
        })
         return res.status(200).json({ok: true, message: "Se ha dado aviso con éxito!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}


const  handlerCompanyVanished = async (req, res) => {
    const { email } = req.params
    console.log(email);
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Usuario Suspendido!!.",
            text:"Estimado usuario, lamentamos informarte que tu cuenta ha sido suspendida debido a malas prácticas. Por favor, contacta a nuestro equipo de soporte para más información. Gracias.\n\n    Atentamente,    \n    El equipo de CastingApp",   
        },(err, info) => {
        })
         return res.status(200).json({ok: true, message: "Se ha dado aviso con éxito!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}

const  handlerTalentContactHired = async (req, res) => {
    const { email } = req.params
    console.log(email);
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Felicidades has sido contratado para el evento!!.",
            text:"Felicitaciones, has sido contratado para el puesto. ¡Esperamos que tengas una experiencia laboral exitosa!. Gracias.\n\n    Atentamente,    \n    El equipo de CastingApp",   
        },(err, info) => {
        })
         return res.status(200).json({ok: true, message: "Se ha dado aviso con éxito!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}

const  handlerEditedPerfilTalent = async (req, res) => {
    const { email } = req.params
    console.log(email);
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Perfil actualizado con éxito!!.",
            text:"Has actualzado con éxito tu perfil. ¡Esperamos que tengas una experiencia increíble en este proyecto! \n ¡Mucho éxito!    Atentamente,   \n\n      El equipo de CastingApp",   
        },(err, info) => {
        })
         return res.status(200).json({ok: true, message: "Se ha dado aviso con éxito!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}

const handlerSuscriptionFree = async (req, res) => {
    const { email } = req.params
    console.log(email);
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Te has suscrito al Prueba Gratis!!.",
            text:"Bienvenido/a! Te has suscrito al Prueba Gratis. Descubre nuestras funcionalidades básicas sin costo alguno. Publica hasta 2 eventos y recibe alertas por correo electrónico. $0 GRATIS. \n ¡Esperamos que tengas una experiencia increíble en este proyecto! \n ¡Mucho éxito!    Atentamente,   \n\n      El equipo de CastingApp",   
        },(err, info) => {
        })
         return res.status(200).json({ok: true, message: "Se ha dado aviso con éxito!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}

const handlerSuscriptionPremium = async (req, res) => {
    const { email } = req.params
    console.log(email);
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Te has suscrito al plan Básico!!..",
            text:"Felicidades por elegir el plan Básico! Obtén herramientas esenciales para encontrar talento de manera efectiva. Publica hasta 20 eventos y recibe notificaciones en tiempo real cuando nuevos talentos postulen a tus vacantes. ¡Esperamos que tengas una experiencia increíble en este proyecto! \n ¡Mucho éxito!    Atentamente,   \n\n      El equipo de CastingApp",   
        },(err, info) => {
        })
         return res.status(200).json({ok: true, message: "Se ha dado aviso con éxito!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}

const handlerSuscriptionPro = async (req, res) => {
    const { email } = req.params
    console.log(email);
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Te has suscrito al plan Premium!!..",
            text:"¡Bienvenido/a al exclusivo Plan Premium! Lleva tu experiencia de búsqueda de talento al siguiente nivel con nuestras ventajas Premium: Publica oportunidades laborales de forma ilimitada y obtén una mayor visibilidad al resaltar tus eventos en la página principal. ¡Potencia tu empresa con el Plan Premium!. ¡Esperamos que tengas una experiencia increíble en este proyecto! \n ¡Mucho éxito!    Atentamente,   \n\n      El equipo de CastingApp",   
        },(err, info) => {
        })
         return res.status(200).json({ok: true, message: "Se ha dado aviso con éxito!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}

const handlerCompanyEditedEvent = async (req, res) => {
    const { email } = req.params
    console.log(email);
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Has modificado exitosamente tu evento!!..",
            text:"¡Evento modificado exitosamente! Los cambios han sido guardados.!. ¡Esperamos que tengas una experiencia increíble en este proyecto! \n ¡Mucho éxito!    Atentamente,   \n\n      El equipo de CastingApp",   
        },(err, info) => {
        })
         return res.status(200).json({ok: true, message: "Se ha dado aviso con éxito!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}

const handlerContacRefusedForCompany = async (req, res) => {
    const { email } = req.params
    console.log(email);
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Has rechazado a un postulante!!..",
            text:"Has rechazado a un postulante para tu evento!.  \n ¡Mucho éxito!    Atentamente,   \n\n      El equipo de CastingApp",   
        },(err, info) => {
        })
         return res.status(200).json({ok: true, message: "Se ha dado aviso con éxito!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}


const handlerTalentContactForCompany = async (req, res) => {
    const { email } = req.params
    console.log(email);
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"¡Felicidades! Has seleccionado a un Talento.!!..",
            text:"Nos complace informarte que has elegido a un postulante para participar en tu evento. ¡Enhorabuena por esta  oportunidad!!.  \n ¡Mucho éxito!    Atentamente,   \n\n      El equipo de CastingApp",   
        },(err, info) => {
        })
         return res.status(200).json({ok: true, message: "Se ha dado aviso con éxito!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}

const  handlerContacHiredForCompany = async (req, res) => {
    const { email } = req.params
    console.log(email);
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Felicidades, has contratado a un talento!!.",
            text:"Felicitaciones, has contratado a un talento para tu evento!!. ¡Esperamos que tengas una experiencia laboral exitosa!. Gracias.\n\n    Atentamente,    \n    El equipo de CastingApp",   
        },(err, info) => {
        })
         return res.status(200).json({ok: true, message: "Se ha dado aviso con éxito!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}

const   handlerEventFinish = async (req, res) => {
    const { email } = req.params
    console.log(email);
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Tu evento a finalizado!!.",
            text:"Ha finalizado tu evento!!. ¡Esperamos que hayas tenido una experiencia exitosa!. Gracias.\n\n    Atentamente,    \n    El equipo de CastingApp",   
        },(err, info) => {
        })
         return res.status(200).json({ok: true, message: "Se ha dado aviso con éxito!!!"})
    } catch (error) {
        console.log(error.message)
    }    
}



  module.exports = { handlerRegisterTalent,
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
                    };