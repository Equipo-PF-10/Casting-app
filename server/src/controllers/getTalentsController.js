const { Talento } = require("../db");
const getUsersData = require("../importData/usersData");
const axios = require("axios");

const getTalents = async (req, res) => {
  try {
    const users = await getUsersData();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = getTalents;
