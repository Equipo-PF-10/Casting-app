const {
  createFavoriteTalent,
  getFavoritesTalentsById,
} = require("../../controllers/companies/talentFavoriteController");

// Empresa agrega talento como favorito
async function handleCreateFavoriteTalent(req, res) {
  try {
    const { TalentId, CompanyId } = req.body;
    const result = await createFavoriteTalent(TalentId, CompanyId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Función que devuelve todos los talentos favoritos de una empresa.
async function handleGetFavoritesTalentsById(req, res) {
  try {
    const { id } = req.params;
    const result = await getFavoritesTalentsById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  handleCreateFavoriteTalent,
  handleGetFavoritesTalentsById,
};
