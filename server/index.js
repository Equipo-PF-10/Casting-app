const server = require("./src/app");
const { conn } = require("./src/db");
const { PORT } = process.env;
const getApiTalents = require("./src/importData/talentsData");
const getCompaniesData = require("./src/importData/companiesData");
const getEvents = require("./src/importData/eventsData");

// Syncing all the models at once.
// force is to reset my database
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log("listening at", PORT);
  });
  getCompaniesData();
  getApiTalents();
  getEvents();
});
