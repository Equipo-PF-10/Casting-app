const {getAllFavoritesCompaniesOfTalent, createFavoriteCompany} = require("../../controllers/talents/companyFavoriteController");


  // talento agregua una empresa como favorita  
  async function  handleCreateFavoriteCompany (req, res)  {
    try {
      const { talentId, companyId } = req.body;
      const result = await createFavoriteCompany(talentId, companyId);
      res.status(200).json(result);
    } catch (error) { 
      res.status(400).json({ error: "Error al agregar la empresa como favorita." });
    }
  };

//companies favoritas de "un" Talento
async function handleGetAllFavoritesCompaniesOfTalent(req, res) {
    try {
      const { talentId } = req.body;
      const favoriteCompanies = await getAllFavoritesCompaniesOfTalent(talentId);
      res.status(200).json(favoriteCompanies);
    } catch (error) {
      res.status(404).json({ error: "Error al buscar las compañías favoritas del talento." });
    }
  } 

  module.exports = {
    handleGetAllFavoritesCompaniesOfTalent,
    handleCreateFavoriteCompany
  };