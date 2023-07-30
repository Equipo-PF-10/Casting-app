const { updateFormTalent
} = require("../../controllers/forms/talentFormController");

const handlerUpdateFormTalent = async (req, res) => {
  const { id, ...updatedFields } = req.body;
  console.log("Body: ", req.body);

  try {
    const updateTalent = await updateFormTalent(id, updatedFields);
    res.status(200).json(updateTalent);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
    handlerUpdateFormTalent
};
