const {
    addReportCompany,
    addReportCompany,
    getCompanyReports,
    getTalentReports,
    updateReport
} = require("../../controllers/report/reportController")


const handlerAddReportCompany = async (req, res) => {
    try {
        const {CompanyId, TalentId, report, text } = req.body;
        const response = await addReportCompany(CompanyId, TalentId, report, text )

        res.status(201).json(response)
        
    } catch (error) {
        res.status(404).json(error)
    }
}

const handlerAddReportTalent = async (req, res) => {
    try {
        const {CompanyId, TalentId, report, text } = req.body;
        const response = await addReportTalent(CompanyId, TalentId, report, text )

        res.status(201).json(response)
        
    } catch (error) {
        res.status(404).json(error)
    }

}   

const handlerGetReportsForCompany = async (req, res) => {
    try {
        const {CompanyId} = req.params
        const response = await getCompanyReports(CompanyId)
        
        res.status(200).json(response)

    } catch (error) {
        res.status(400).json(error)
    }
}

const handlerGetReportsForTalent = async (req, res) => {
    try {
        const {TalentId} = req.params
        const response = await getTalentReports(TalentId)
        
        res.status(200).json(response)

    } catch (error) {
        res.status(400).json(error)
    }
    
}

const handlerUpdateReport = async (req, res) => {
    try {

        const {id, CompanyId, TalentId, report, text} = req.body;

        const response = await updateReport(id, CompanyId, TalentId, report, text);

        res.status(201).json(response);
        
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = {
    handlerAddReportCompany,
    handlerAddReportTalent,
    handlerGetReportsForCompany, 
    handlerGetReportsForTalent,
    handlerUpdateReport
}