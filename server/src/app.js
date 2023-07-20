const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/mainRouter");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const TOKEN_KEY = "n0ynaeSN4clJ4aIOv4QpkXZBbBRSU961IQXf_AZtYBkAbPHBUZDZkuN6VXze3ZyT";
const cors = require("cors");

app.use(morgan("dev"));

// server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// server.use(bodyParser.json({ limit: "50mb" }));

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split('')[1];
  console.log(authHeader);
  if(token==null)
  return res.status(401).send("Token requerido");
  jwt.verify(token, TOKEN_KEY, (err, user) => {
      if(err) return res.status(403).send("Token invalido");
      console.log(user);
      req.user = user;
      next();
  });
}
// Ruta para guardar los datos del usuario en tu base de datos local
app.post("/guardarUsuario", verifyToken, (req, res) => {
  const usuario = req.body;
  // Aquí puedes guardar los datos del usuario en tu base de datos local
  // Por ejemplo, usando un ORM o una consulta a la base de datos
 
  res.status(200).json({ usuario });
});

// ... Resto de las rutas y configuraciones ...

// Asegúrate de exportar tu app



app.use("/", mainRouter);

module.exports = app;
