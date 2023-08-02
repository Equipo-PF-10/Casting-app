const {
    getPaymentsDb,
    createPaymentDb,
    getPaymentByIdDb
} = require("../../controllers/payments/paymentsController");

const getAllPayments = async (req, res) => {
    try {
        const payments = await getPaymentsDb();
        return res.status(200).json(payments);
    } catch(error) {
        res.status(400).json(error.message);
    }
}

const createPayment = async (req, res) => {
    const { paymentId, CompanyId, planType, paymentDate, expirationDate, price, taxes } = req.body;
    if (!paymentId || !CompanyId || !planType || !paymentDate || !expirationDate || !price || !taxes) return res.status(400).send("Faltan datos obligatorios");
    try {
        const newPayment = await createPaymentDb(paymentId, CompanyId, planType, paymentDate, expirationDate, price, taxes);
        return res.status(200).send("Subscription payment saved succesfully.");
    } catch(error) {
        res.status(400).json(error.message);
    } 
}

const getPaymentById = async (req, res) => {
    const { id } = req.params;
    try {
        const foundPayment = await getPaymentByIdDb(id);
        if (!foundPayment) return res.status(400).send("El pago no existe.")
        return res.status(200).json(foundPayment);
    } catch(error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllPayments,
    createPayment,
    getPaymentById
}