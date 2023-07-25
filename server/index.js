const app = require("./src/app"); //
const { conn } = require("./src/db");
const { PORT } = process.env;
const talentsFromApi = require("./src/data/talentsFromApi");
const companiesFromApi = require("./src/data/companiesFromApi");
//const eventsMocks = require("./src/data/eventsMocks");

// Syncing all the models at once.
// force is to reset my database
conn.sync({ force: true }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("listening at", PORT);
  });
  companiesFromApi();
  talentsFromApi();
  // eventsMocks();
});
