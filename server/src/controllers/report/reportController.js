const {Reports, Talent, Company} = require("../../db");

// Función para crear un reporte de una Compañia

const addReportCompany = async (CompanyId, TalentId, report, text ) => {
    try {
        const company = await Company.findByPk(CompanyId);
        const talent = await Talent.findByPk(TalentId);

        if(!company){
            throw new Error("No se encontró la empresa")
        } else if(!talent){
            throw new Error("No se encontró el talento")
        }

        const report = await Reports.create({  report, text });

        await  report.setCompany(company);
        await report.setTalent(talent)

        //company.report

        return report
    
    } catch (error) {
        throw new Error({error: error.message})
    }
}

const addReportTalent = async (CompanyId, TalentId, report, text) => {
    try {
        const company = await Company.findByPk(CompanyId);
        const talent = await Talent.findByPk(TalentId);

        if(!company){
            throw new Error("No se encontró la empresa")
        } else if(!talent){
            throw new Error("No se encontró el talento")
        }

        const report = await Reports.create({  report, text });

        await  report.setCompany(company);
        await report.setTalent(talent)

        //talent.report

        return report
    
    } catch (error) {
        throw new Error({error: error.message})
    }
}

const getTalentReports = async (id) => {
    try {
        const report = await Reports.findAll({
            where: { TalentId: id },
            include: [Company],
          });
        
        return report;

    } catch (error) {
        throw new error({error: error.message})
    }
}

const getCompanyReports = async (id) => {
    try {
        const report = await Reports.findAll({
            where: { CompanyId: id },
            include: [Talent],
          });
        
        return report;

    } catch (error) {
        throw new error({error: error.message})
    }
}

const updateReport = async (id, CompanyId, TalentId, report, text) => {

    const [rowsUpdated] = await Report.update({CompanyId, TalentId, report, text}, {where: {id}})

    if (rowsUpdated === 0) {
        throw new Error(
          `No se encontró el reporte con ID ${id} y no se realizaron cambios.`
        );
      }
    
    const updatedReport = await Report.findByPk(id);
    return updatedReport;
}

module.exports = {
    addReportCompany,
    addReportCompany,
    getCompanyReports,
    getTalentReports,
    updateReport
}