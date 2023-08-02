const { Router } = require("express");

const {
    getAllCompanyPayments
} = require("../../handlers/payments/companyPaymentsHandler");

const companyPaymentsRouter = Router();

//Esta ruta obtiene todos los pagos de una compañía por id.
companyPaymentsRouter.get("/:id", getAllCompanyPayments);

module.exports = companyPaymentsRouter;