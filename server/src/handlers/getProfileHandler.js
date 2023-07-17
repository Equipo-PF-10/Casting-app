const getProfileHandler = (req, res) => {
  res.status(200).send("Aqui estan todos los perfiles");
};

module.exports = getProfileHandler;
