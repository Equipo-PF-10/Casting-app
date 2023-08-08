const { Router } = require("express");
const {
  getTalentsHandler,
  createTalentHandler,
  talentByIdHandler,
  talentByEmailHandler,
  deleteTalentHandler,
  updateTalentHandler,
} = require("../../handlers/talents/talentsHandler");
const jwt = require("jsonwebtoken");

// Authorization: Bearer <token>
const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (!bearerHeader) {
    return res.status(403).send("Acceso no autorizado");
  }

  const bearerToken = bearerHeader.split(" ")[1];
  jwt.verify(bearerToken, "secretkey", (err, decoded) => {
    if (err) {
      return res.status(403).send("Token inválido");
    }
    req.user = decoded.user;
    next();
  });
};

const talentRouter = Router();

//? Esta ruta registra un nuevo talento.
talentRouter.post("/register", createTalentHandler);

//? Esta ruta obtiene un talento por email.
talentRouter.get("/email/:email", talentByEmailHandler);

//? Esta ruta obtiene un talento por id.
talentRouter.get("/:id", talentByIdHandler);

//? Esta ruta actualiza el perfil de un talento por id.
talentRouter.put("/:id", verifyToken, updateTalentHandler);

//? Esta ruta elimina el perfil de un talento por id.
talentRouter.delete("/:id", verifyToken, deleteTalentHandler);

//? Esta ruta busca todos los talentos.
talentRouter.get("/", getTalentsHandler);

module.exports = talentRouter;
