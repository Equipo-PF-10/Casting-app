const getUserHandler = (req, res) => {
  res.status(200).send("Aqui estan todos los usuarios");
};

module.exports = getUserHandler;
