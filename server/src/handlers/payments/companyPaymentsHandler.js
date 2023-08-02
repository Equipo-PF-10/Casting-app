const {
    getAllCompanyPaymentsDb
} = require("../../controllers/payments/companyPaymentsController");

const getAllCompanyPayments = async (req, res) => {
    const { id } = req.params;
    try {
        const company = await getAllCompanyPaymentsDb(id);
        if (!company) return res.status(400).send("La empresa no existe.")
        return res.status(200).json(company);
    } catch(error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllCompanyPayments
}