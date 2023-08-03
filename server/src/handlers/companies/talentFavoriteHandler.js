const {
  createFavoriteTalent,
  getFavoritesTalentsById,
  getByName,
} = require("../../controllers/companies/talentFavoriteController");

// Empresa agrega talento como favorito
async function handleCreateFavoriteTalent(req, res) {
  const { TalentId, CompanyId } = req.body;
  try {
    const result = await createFavoriteTalent(TalentId, CompanyId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Función que devuelve todos los talentos favoritos de una empresa.
async function handleGetFavoritesTalentsById(req, res) {
  const { name } = req.query;
  const { id } = req.params;

  try {
    if (name) {
      const searchByName = await getByName(name, id);
      return res.status(200).json(searchByName);
    }

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
