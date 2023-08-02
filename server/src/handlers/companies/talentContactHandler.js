const { getTalentContacts } = require("../../controllers/companies/talentContactController");

const handlerFindAdsByStatus  = async (req, res) => {
    const { talentId } = req.params;
  
    try {
      const talentContacts = await getTalentContacts(talentId);
      res.status(200).json(talentContacts);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };



  module.exports = { handlerFindAdsByStatus };