const getTalentsController = require("../controllers/getTalentsController");

const getTalentsHandler = async (req, res) => {
  const talents = await getTalentsController();

  res.status(200).json(talents);
};

module.exports = getTalentsHandler;
