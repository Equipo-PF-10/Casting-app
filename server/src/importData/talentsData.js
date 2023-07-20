const axios = require("axios");
const { Talento } = require("../db");

let habilities = [
  "Actuación",
  "Animador/a",
  "Bailarín/a",
  "Blogger",
  "Cantante",
  "DJ",
  "Influencer",
  "Locutor/a",
  "Mago/a",
  "Músico/a",
  "Modelo",
  "Presentador/a",
  "Promotor/a",
];

const getRandomHabilities = (habilities) => {
  const minHabilities = 1;
  const maxHabilities = Math.min(3, habilities.length);
  const numberOfHabilities =
    Math.floor(Math.random() * (maxHabilities - minHabilities + 1)) +
    minHabilities;

  const shuffledHabilities = habilities.sort(() => 0.5 - Math.random());
  return shuffledHabilities.slice(0, numberOfHabilities);
};

const getApiTalents = async () => {
  try {
    const response = await axios("https://randomuser.me/api/?results=20");
    const usersData = response.data.results;

    const users = await Promise.all(
      usersData.map(async (user) => {
        const name = `${user.name.first} ${user.name.last}`;
        const { email } = user;
        let { gender } = user;
        const nationality = user.location.country;
        const ubication = user.location.city;
        const password = user.login.password;
        const image = user.picture.large;
        const contact = [user.phone, user.cell];
        const weight = null;
        const height = null;

        const hability = getRandomHabilities(habilities);

        if (gender === "male") {
          gender = "Masculino";
        } else if (gender === "female") {
          gender = "Femenino";
        } else {
          gender = "Otro";
        }

        return {
          name,
          email,
          password,
          image,
          gender,
          nationality,
          ubication,
          hability,
          weight,
          height,
          contact,
        };
      })
    );
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = getApiTalents;
