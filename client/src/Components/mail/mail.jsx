{/* <form action="URL_DEL_SERVIDOR" method="POST">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="mensaje">Mensaje:</label>
  <textarea id="mensaje" name="mensaje" required></textarea>

  <button type="submit">Enviar</button>
</form> */}



//////////////////////////////////</input>

// Instala los paquetes necesarios:
// npm install express nodemailer body-parser

// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3000; // Puedes cambiar el puerto según tus necesidades

// // Configura el middleware para analizar los datos del formulario
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Ruta para manejar el envío del formulario
// app.post('/enviar-email', (req, res) => {
//   const { nombre, email, mensaje } = req.body;

//   // Configura el transporte para enviar el correo electrónico
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: 'TU_CORREO_GMAIL',
//       pass: 'TU_CONTRASEÑA_GMAIL',
//     },
//   });

//   // Configura el contenido del correo electrónico
//   const mailOptions = {
//     from: 'TU_CORREO_GMAIL',
//     to: 'DESTINATARIO_DEL_CORREO',
//     subject: 'Mensaje de contacto desde el formulario de tu página web',
//     text: Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje},
//   };

//   // Envía el correo electrónico
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send('Hubo un error al enviar el correo.');
//     } else {
//       console.log('Correo enviado: ' + info.response);
//       res.send('Correo enviado correctamente.');
//     }
//   });
// });

// // Inicia el servidor
// app.listen(PORT, () => {
//   console.log(Servidor escuchando en el puerto ${PORT});
// });


