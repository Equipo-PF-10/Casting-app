////////////////////////
///token  => nOBBw8qO///
////////////////////////
const axios = require('axios');
const { Empresa } = require('../db');
const response = require ("../../utilsDataApi/api.json");

const getCompaniesData = async () => {
  try {
    // const response = await axios.get('https://api.thecompaniesapi.com/v1/companies?token=nOBBw8qO&size=20');
    // const companies = response.data; 
    //copiar ruta en navegador y copiar 20 empresas en apiData.!!!!!!!!!!!!      
    const companies = response;        
    const companiesMapeadas = companies.companies.map((company) => {
      const companiesMapeadas = {
        id: company.cca3,
        name: company.name,
        logo: company.logo,
        domain: company.domain,
        descriptionShort: company.descriptionShort[0],
        socialNetworks: Object.values(company.socialNetworks),
        country: "Argentina",  
      };
      return companiesMapeadas;
    }); 
    
    const savedEmpresas = await Empresa.bulkCreate(companiesMapeadas);
  } catch (error) {
    console.error('Error en getCompaniesData', error);

    // if (error.response && error.response.status === 404) {
    //   res.status(404).send('La API de empresas no está disponible.');
    // } else {
    //   res.status(500).send('Error al obtener las empresas de la API: ' + error.message);
    // }
  }
};

module.exports = getCompaniesData;

