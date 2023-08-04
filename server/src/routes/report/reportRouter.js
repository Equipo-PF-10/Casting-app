const { Router } = require("express");
const {
    handlerAddReportCompany,
    handlerAddReportTalent,
    handlerGetReportsForCompany, 
    handlerGetReportsForTalent,
    handlerUpdateReport
} = require("../../handlers/reports/reportHandler")

const reportRouter = Router();

//? Ruta para obtener los reportes de un talento
reportRouter.get("/:TalentId", handlerGetReportsForTalent)

//? Ruta para crear un reporte
reportRouter.post("/", handlerAddReportCompany)

//? Obtener reportes de una Compañia
reportRouter.get("/CompanyId", handlerGetReportsForCompany);

//? Crear reportes de un talento
reportRouter.post("/",  handlerAddReportTalent)

//? Actualizar reporte

reportRouter.patch("/id", handlerUpdateReport)

module.exports = reportRouter;