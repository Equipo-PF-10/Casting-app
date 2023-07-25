const { Empresa } = require('../db');
const companiesFullData = require ("./companiesFromApi.json");

const companiesFromApi = async () => {
  try {
   
    let companies = []; 
    const companiesMapeadas = companiesFullData.companies.map((company) => {
      const comp = {};
      let nameForEmail = company.name.trim().split(" ").join("").toLowerCase()
      comp.id = company.cca3,
      comp.name = company.name,
      comp.logo = company.logo,
      comp.domain = company.domain,
      comp.phoneNumber = company.phoneNumber,
      comp.descriptionShort = company.descriptionShort, 
      comp.description = company.description,
      comp.industryMain = company.industryMain,
      comp.instagram = company.socialNetworks.hasOwnProperty("instagram")?company.socialNetworks["instagram"]:null,  
      comp.facebook = company.socialNetworks.hasOwnProperty("facebook")?company.socialNetworks["facebook"]:null,  
      comp.twitter = company.socialNetworks.hasOwnProperty("twitter")?company.socialNetworks["twitter"]:null,  
      comp.linkedin = company.socialNetworks.hasOwnProperty("linkedin")?company.socialNetworks["linkedin"]:null,  
      comp.country = "Argentina", 
      comp.email = `${nameForEmail}@${company.domain}`,
      comp.password = `${nameForEmail}${company.id}`,
      companies.push(comp)
    }); 

    const savedEmpresas = await Empresa.bulkCreate(companies);
  } catch (error) {

    if (error.response && error.response.status === 404) {
      return ('La API de empresas no está disponible. status (404)');
    } else {
      return ('Error al obtener las empresas de la API. stastus (505');
    }
  }
};

module.exports = companiesFromApi;

