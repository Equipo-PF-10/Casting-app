const axios = require("axios");
const { Talento } = require("../db");

const getUsersData = async () => {
  try {
    const response = await axios("https://randomuser.me/api/?results=100");
    const usersData = response.data.results;

    const users = await Promise.all(
      usersData.map(async (user) => {
        const id = uuidv4();
        const name = `${user.name.first} ${user.name.last}`;
        const nationality = user.location.country;
        const ubication = user.location.city;

        const talent = await Talento.create({
          id,
          name,
          nationality,
          ubication,
          talent: "",
          contact: [],
        });

        return talent;
      })
    );
    return users;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getUsersData;
