// const bodyParser = require("body-parser");
// const jwt = require("jsonwebtoken");
// const sequelize = require('./database'); //
// const { Auth0Client } = require('@auth0/auth0-spa-js'); //
// const talento = require('./models/talentos.js'); //
// const { auth } = require('express-oauth2-jwt-bearer'); //


// server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// server.use(bodyParser.json({ limit: "50mb" }));



//AUTENTICACION
// const jwtCheck = auth({
//   audience: 'http://localhost:5173',
//   issuerBaseURL: 'https://dev-4hjyir23x5jta1gu.us.auth0.com/',
//   tokenSigningAlg: 'RS256'
// });//--> agregó agustin
// app.use(jwtCheck);
// app.get('/authorized', function (req, res) {
//   res.send('Secured Resource');
// });

// const auth0Config = {
//   domain: 'dev-4hjyir23x5jta1gu.us.auth0.com', // Reemplaza con tu dominio de Auth0
//   clientId: 'bNwYLJVwAc52r1yOO7AeOsZCUdCfJ90p', // Reemplaza con tu ID de cliente de Auth0
// };

// const auth0 = new Auth0Client(auth0Config);

// app.use(bodyParser.json());

// const verifyToken = async (req, res) => {
//   const TOKEN_KEY = "n0ynaeSN4clJ4aIOv4QpkXZBbBRSU961IQXf_AZtYBkAbPHBUZDZkuN6VXze3ZyT"; //
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (!token) {
//     res.status(401).send('Token requerido');
//     return null;
//   }
//   // Verificar el token de Auth0
//   const accessToken = await verifyToken(req, res);
//   if (!accessToken) {
//     return; // Si el token es inválido, se detiene la ejecución de la ruta
//   }
//   try {
//     await auth0.getTokenSilently();
//     return token;
//   } catch (error) {
//     console.error('Error al verificar el token de Auth0:', error);
//     res.status(403).send('Token inválido');
//     return null;
//   }
// };

// app.post('/guardarUsuario', async (req, res) => {
//   const { email } = req.body;

//   try {
//     // Crea un nuevo registro de usuario en la base de datos
//     const newUser = await User.create({ email });
//     res.status(200).json({ message: 'Usuario guardado correctamente', talento: newUser });
//   } catch (error) {
//     console.error('Error al guardar el usuario:', error);
//     res.status(500).json({ message: 'Error al guardar el usuario en la base de datos' });
//   }
//   (async () => {
//     try {
//       await sequelize.authenticate();
//       await sequelize.sync(); // Sincroniza los modelos con la base de datos
//       console.log('Conexión a la base de datos establecida correctamente.');
//     } catch (error) {
//       console.error('Error al conectar y sincronizar con la base de datos:', error);
//     }
//   })();
// });


//!************************************
////////////////////////
///token  => nOBBw8qO///
////////////////////////
    // const response = await axios.get('https://api.thecompaniesapi.com/v1/companies?token=nOBBw8qO&size=20');
    // const companies = response.data; 
    //copiar ruta en navegador y copiar 20 empresas en apiData.!!!!!!!!!!!!      
    // const companies = response;  