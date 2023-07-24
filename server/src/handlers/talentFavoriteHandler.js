const { addFavoriteTalent,getFavoriteTalent} = require("../controllers/talentFavoriteController");


  // talento agregua una empresa como favorita  
  async function handleAddFavoriteTalent (req, res)  {
    try {
      const { talentId, companyId } = req.body;
      const result = await addFavoriteTalent(talentId, companyId);
      res.status(200).json(result);
    } catch (error) { 
      res.status(400).json({ error: "Error al agregar el talento como favorito." });
    }
  };
  async function handleGetFavoriteTalent (req, res)  {
    try {
      const { EmpresaId } = req.body;
      console.log(EmpresaId);
      const result = await getFavoriteTalent(EmpresaId);
      res.status(200).json(result);
    } catch (error) { 
      res.status(400).json({ error: "Error al encontrar los talentos favorito." });
    }
  };

  module.exports = {
  handleAddFavoriteTalent,
  handleGetFavoriteTalent
  };