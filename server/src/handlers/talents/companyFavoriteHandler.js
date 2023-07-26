const {
  getAllFavoritesCompaniesOfTalent,
  createFavoriteCompany,
} = require("../../controllers/talents/companyFavoriteController");

// Talento agrega una company como favorita
async function handleCreateFavoriteCompany(req, res) {
  const { talentId, companyId } = req.body;

  try {
    const result = await createFavoriteCompany(talentId, companyId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}

// Favorites Companies de un Talento
async function handleGetAllFavoritesCompaniesOfTalent(req, res) {
  const { id } = req.params;

  try {
    const favoriteCompanies = await getAllFavoritesCompaniesOfTalent(id);
    res.status(200).json(favoriteCompanies);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

module.exports = {
  handleGetAllFavoritesCompaniesOfTalent,
  handleCreateFavoriteCompany,
};
