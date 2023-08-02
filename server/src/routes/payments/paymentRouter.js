const { Router } = require("express");

const {
    getAllPayments,
    createPayment,
    getPaymentById
} = require("../../handlers/payments/paymentsHandler");

const paymentRouter = Router();

//Esta ruta obtiene todos los pagos.
paymentRouter.get("/", getAllPayments);

//Esta ruta registra un nuevo pago en la base de datos.
paymentRouter.post("/", createPayment);

//Esta ruta obtiene un pago por id.
paymentRouter.get("/:id", getPaymentById);

module.exports = paymentRouter;