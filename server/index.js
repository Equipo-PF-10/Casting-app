const app = require("./src/app"); //
const { conn } = require("./src/db");
const { PORT } = process.env;
const talentsFromApi = require("./src/data/talentsFromApi");
const companiesFromApi = require("./src/data/companiesFromApi");
const eventsMocks = require("./src/data/eventsMocks");

// Syncing all the models at once.
// force is to reset my database
const syncDB = async () => {
  try {
    await conn.sync({ force: true });
    console.log("Database synchronized successfully.");

    // Primero crear empresas
    await companiesFromApi();

    // Luego crear talentos
    await talentsFromApi();

    // Finalmente, crear eventos
    await eventsMocks();

    app.listen(process.env.PORT, () => {
      console.log("Listening at", PORT);
    });
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

syncDB();
