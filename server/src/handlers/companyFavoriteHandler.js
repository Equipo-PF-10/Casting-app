const {/* getFavoriteCompaniesByTalentId */ addFavoriteCompany} = require("../controllers/companyFavoriteController");


  // talento agregua una empresa como favorita  
  async function handleAddFavoriteCompany (req, res)  {
    try {
      const { talentId, companyId } = req.body;
      const result = await addFavoriteCompany(talentId, companyId);
      res.status(200).json(result);
    } catch (error) { 
      res.status(400).json({ error: "Error al agregar la empresa como favorita." });
    }
  };

//companies favoritas de "un" Talento
// async function handleSearchFavoriteCompaniesByTalent(req, res) {
//     try {
//       const { talentId } = req.body;
//       const favoriteCompanies = await getFavoriteCompaniesByTalentId(talentId);
//       res.status(200).json(favoriteCompanies);
//     } catch (error) {
//       res.status(404).json({ error: "Error al buscar las compañías favoritas del talento." });
//     }
//   } 

  module.exports = {
  // handleSearchFavoriteCompaniesByTalent,
  handleAddFavoriteCompany
  };