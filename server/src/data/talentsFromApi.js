const axios = require("axios");
const { Talent } = require("../db");

const habilities = [
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

const randomHabilities = (habilities) => {
  const minHabilities = 1;
  const maxHabilities = Math.min(3, habilities.length);
  const numberOfHabilities =
    Math.floor(Math.random() * (maxHabilities - minHabilities + 1)) +
    minHabilities;

  const shuffledHabilities = habilities.sort(() => 0.5 - Math.random());
  return shuffledHabilities.slice(0, numberOfHabilities);
};

const randomWeightAndHeight = (min, max, precision) => {
  const random = Math.random() * (max - min) + min;
  return parseFloat(random.toFixed(precision));
};

const minWeight = 50;
const maxWeight = 100;
const weightPrecision = 2;

const minHeight = 150;
const maxHeight = 200;
const heightPrecision = 2;

const talentsFromApi = async () => {
  try {
    const response = await axios("https://randomuser.me/api/?results=100");
    const usersData = response.data.results;

    const users = await Promise.all(
      usersData.map(async (user) => {
        const name = `${user.name.first} ${user.name.last}`;
        const { email } = user;
        let { gender } = user;
        const nationality = "Argentina";
        const ubication = "Argentina";
        const password = `${user.login.password}${user.dob.age}`;
        const image = user.picture.large;
        const contact = [user.phone, user.cell];
        const available = true;
        const weight = randomWeightAndHeight(minWeight, maxWeight, weightPrecision);
        const height = randomWeightAndHeight(minHeight, maxHeight, heightPrecision);
        const hability = randomHabilities(habilities);

        if (gender === "male") {
          gender = "Masculino";
        } else if (gender === "female") {
          gender = "Femenino";
        } else {
          gender = "Otro";
        }

        const createdTalent = await Talent.create({
          name,
          email,
          password,
          image,
          gender,
          nationality,
          ubication,
          hability,
          available,
          weight,
          height,
          contact,
        });
        return createdTalent;
      })
    );
    return users;
  } catch (error) {
    return(error.message);
    //throw new Error(error.message);
  }
};

module.exports = talentsFromApi;
