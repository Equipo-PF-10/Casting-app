const transporter = require("../../../helpers/mailer");

  
 const  handlerRegisterTalent = async (req, res) => {
    const { email } = req.params
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Registro exitoso",
            text:"¡Bienvenido/a a CastingApp! Nos alegra tenerte aquí. Prepárate para descubrir emocionantes oportunidades en el mundo del espectáculo. Completa tu perfil y comienza tu camino hacia el éxito artístico.  ¡Éxito asegurado!.   Atentamente,  El equipo de CastingApp",   
        },(err, info) => {
            console.log(info.envelope);
            console.log(info.messageId);
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
            text:"¡Bienvenidos a CastingApp! Encuentra talento excepcional para tus proyectos artísticos. ¡Comienza a explorar ahora!.     Atentamente,     El equipo de CastingApp",   
        },(err, info) => {
            console.log(info.envelope);
            console.log(info.messageId);
        })
        res.status(200).json({ok: true, message: "Su Company se ha registrado con éxito!!!"})
    } catch (error) {

        console.log(error.message)
    }    
}


const  handlerCompanynewEvent = async (req, res) => {
    const { email } = req.params
    try {
        const result = await transporter.sendMail({
            from: "henry38b10@gmail.com",
            to:email,
            subject:"Registro de Nuevo Evento exitoso",
            text:"¡Registro Exitoso! Nuevo Evento Creado.    Estimado equipo,  Nos complace informarles que el registro del nuevo evento ha sido creado con éxito. ¡Es un paso importante hacia el éxito del proyecto! Les mantendremos informados sobre los próximos pasos.    ¡Gracias por su colaboración!           Atentamente,       El equipo de CastingApp",   
        },(err, info) => {
            console.log(info.envelope);
            console.log(info.messageId);
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
            text:"¡Es un gusto saludarle! Queríamos informarle que un talento ha enviado su postulación para participar en su evento. Estamos emocionados por la oportunidad de conectarles con artistas de gran talento y experiencia. Revisaremos cuidadosamente la postulación y le mantendremos informado/a sobre el proceso.  ¡Gracias por utilizar CastingApp!  Atentamente,       El equipo de CastingApp",   
        },(err, info) => {
            console.log(info.envelope);
            console.log(info.messageId);
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
            text:"Nos complace informarte que has sido elegido/a para participar en su evento. ¡Enhorabuena por esta emocionante oportunidad!   Pronto recibirás más detalles sobre los siguientes pasos. ¡Esperamos que tengas una experiencia increíble en este proyecto!  ¡Mucho éxito en tu carrera artística!    Atentamente,        El equipo de CastingApp",   
        },(err, info) => {
            console.log(info.envelope);
            console.log(info.messageId);
        })
        res.status(200).json({ok: true, message: "El contacto ha sido con éxito!!!"})
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
            text:"¡Atención! Su suscripción anual vence en 15 días. Asegúrese de renovarla para continuar disfrutando de nuestros servicios sin interrupciones. ¡Gracias por ser parte de nuestra comunidad!    Atentamente,        El equipo de CastingApp",   
        },(err, info) => {
            console.log(info.envelope);
            console.log(info.messageId);
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
            text:"¡Importante aviso! Ha alcanzado el límite de creación de eventos en su plan actual. Le invitamos a suscribirse a nuestro plan premium para disfrutar de publicar eventos de forma ilimitada. ¡No se pierda esta gran oportunidad de ampliar sus posibilidades!   Pronto recibirás más detalles sobre los siguientes pasos. ¡Esperamos que tengas una experiencia increíble en este proyecto!  ¡Mucho éxito!    Atentamente,        El equipo de CastingApp",   
        },(err, info) => {
            console.log(info.envelope);
            console.log(info.messageId);
        })
        res.status(200).json({ok: true, message: "Se ha dado aviso con éxito!!!"})
    } catch (error) {

        console.log(error.message)
    }    
}


  module.exports = { handlerRegisterTalent,
                     handlerRegisterCompany,
                     handlerCompanynewEvent,
                     handlerNewPostulant,
                     handlerTalentContact,
                     handlerExpirationSuscription,
                     handlerStopAdd
                    };