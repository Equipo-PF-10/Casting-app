const {
  createFavoriteTalent,
  getFavoritesTalentsById,
  getByName,
  deleteFavoriteTalent,
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

// Empresa borra a un talento como favorito
const handleDeleteFavoriteTalent = async (req, res) => {
  const { TalentId, CompanyId } = req.body;

  try {
    const deletedFav = await deleteFavoriteTalent(TalentId, CompanyId);
    res
      .status(200)
      .send("Se ha borrado correctamene al talento como favorito.");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

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
  handleDeleteFavoriteTalent,
};
