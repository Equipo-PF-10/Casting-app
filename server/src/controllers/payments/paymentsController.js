const { SubscriptionPayment, Company } = require("../../db");

const getPaymentsDb = () => {
    try {
        const payments = SubscriptionPayment.findAll({ 
            include: [{
                model: Company, as: "company",
                attributes: ['email'],
             }]
         });
        return payments;
    } catch (error) {
        throw new Error(error.message);
    }
}

const createPaymentDb = async (paymentId, CompanyId, planType, paymentDate, expirationDate, price, taxes) => {
    try {
        const [ existingPayment, newPayment] = await SubscriptionPayment.findOrCreate({
            where: {paymentId},
            defaults: {
                paymentId,
                planType,
                paymentDate,
                expirationDate,
                price,
                taxes,
                CompanyId
            }
        });
        if (!newPayment) throw new Error("Payment already exists in the database.");
        return newPayment;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getPaymentByIdDb = (id) => {
    try {
        const paymentById = SubscriptionPayment.findByPk(id, {
            include: [{
                model: Company, as: "company",
                attributes: ['email'],
             }]
        });
        return paymentById;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    getPaymentsDb,
    createPaymentDb,
    getPaymentByIdDb
}