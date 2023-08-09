const { Router } = require("express");
const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: "https://dev-btf5b41eu5m4dqh0.us.auth0.com/api/v2/",
  issuerBaseURL: `https://dev-btf5b41eu5m4dqh0.us.auth0.com/`,
});

const {
  getTalentsHandler,
  createTalentHandler,
  talentByIdHandler,
  talentByEmailHandler,
  deleteTalentHandler,
  updateTalentHandler,
} = require("../../handlers/talents/talentsHandler");

const talentRouter = Router();
const checkScopes = requiredScopes("read:messages");

// Rutas sin autenticación
talentRouter.post("/register", createTalentHandler);
talentRouter.get("/email/:email", talentByEmailHandler);
talentRouter.get("/", getTalentsHandler);

// Rutas con autenticación
talentRouter.get("/:id", checkJwt, checkScopes, talentByIdHandler);
talentRouter.put("/:id", checkJwt, checkScopes, updateTalentHandler);
talentRouter.delete("/:id", checkJwt, checkScopes, deleteTalentHandler);

module.exports = talentRouter;
