////////////////////////
///token  => nOBBw8qO///
////////////////////////
const axios = require('axios');
const { Empresa } = require('../db');
const response = require ("../../utilsDataApi/api2.json");

const getCompaniesData = async () => {
  try {
    // const response = await axios.get('https://api.thecompaniesapi.com/v1/companies?token=nOBBw8qO&size=20');
    // const companies = response.data; 
    //copiar ruta en navegador y copiar 20 empresas en apiData.!!!!!!!!!!!!      
    // const companies = response;     
    let companies = []; 
    const companiesMapeadas = response.companies.map((company) => {
    const comp = {};
        let nameParaMail = company.name.trim().split(" ").join("").toLowerCase()
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
        comp.email = `${nameParaMail}@${company.domain}`,
        comp.password = `${nameParaMail}${company.id}`,
        companies.push(comp)
      }); 

         
    const savedEmpresas = await Empresa.bulkCreate(companies);
  } catch (error) {
    console.error('Error en getCompaniesData', error);

    if (error.response && error.response.status === 404) {
      res.status(404).send('La API de empresas no está disponible.');
    } else {
      res.status(500).send('Error al obtener las empresas de la API: ' + error.message);
    }
  }
};

module.exports = getCompaniesData;

