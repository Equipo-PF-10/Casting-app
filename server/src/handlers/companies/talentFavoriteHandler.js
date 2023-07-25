const { createFavoriteTalent,getFavoritesTalentsById} = require("../../controllers/companies/talentFavoriteController");


  // talento agregua una empresa como favorita  
  async function handleCreateFavoriteTalent (req, res)  {
    try {
      const { talentId, companyId } = req.body;
      const result = await createFavoriteTalent(talentId, companyId);
      res.status(200).json(result);
    } catch (error) { 
      res.status(400).json({ error: "Error al agregar el talento como favorito." });
    }
  };
  async function handleGetFavoritesTalentsById (req, res)  {
    try {
      const { EmpresaId } = req.body;
      const result = await getFavoritesTalentsById(EmpresaId);
      res.status(200).json(result);
    } catch (error) { 
      res.status(400).json({ error: "Error al encontrar los talentos favorito." });
    }
  };

  module.exports = {
    handleCreateFavoriteTalent,
    handleGetFavoritesTalentsById
  };