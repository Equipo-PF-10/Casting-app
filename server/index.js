const server = require("./src/app");
const getUsersData = require("./src/importData/usersData");
const getCompaniesData = require("./src/importData/companiesData");
const { conn } = require("./src/db");
const { PORT } = process.env;


// Syncing all the models at once.
// force is to reset my database
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log("listening at", PORT);
  });
  
  getCompaniesData();
});
