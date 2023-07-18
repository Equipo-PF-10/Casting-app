const axios = require("axios");
const { Talento } = require("../db");

const getUsersData = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=100");
    const users = response.data;

    const allUsers = users.map((user) => {
      return {
        name: user.name.first,
        nationality: user.location.country,
        // relation,
        // ubication,
        // talent,
      };
    });

    const savedUsers = await Talento.bulkCreate(allUsers);
    return savedUsers;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getUsersData;
