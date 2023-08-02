const { Company } = require("../../db");

const getAllCompanyPaymentsDb = (id) => {
    try {
        const company = Company.findByPk(id, {
            include: ["payments"]
        });
        return company;
    } catch(error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllCompanyPaymentsDb
}