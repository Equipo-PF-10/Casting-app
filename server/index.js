const app = require('./src/app'); //
const { conn } = require("./src/db");
const { PORT } = process.env;
const getApiTalents = require("./src/importData/talentsData");
// Syncing all the models at once.
// force is to reset my database
conn.sync({ force: true }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("listening at", PORT);
  });
  getApiTalents();
});
