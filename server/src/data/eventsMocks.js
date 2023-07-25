const { Evento } = require("../db");
const eventsMosckData = require("./eventsMocks.json");

const eventsMocks = async () => {
  try {
    const eventsData = eventsMosckData.results;

    const allEvents = await Promise.all(
      eventsData.map(async (event) => {
        const {
          name,
          image,
          shortDescription,
          creationDate,
          expirationDate,
          changeDate,
          detail,
          active,
          ubication,
          habilityRequired,
          contact,
          habilitySalary,
          idEmpresa
        } = event;

        const createdEvent = await Evento.create({
          name,
          image,
          shortDescription,
          creationDate,
          expirationDate,
          changeDate,
          detail,
          active,
          ubication,
          habilityRequired,
          contact,
          habilitySalary,
          idEmpresa
        });
        return createdEvent;
      })
    );
    return allEvents;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = eventsMocks;
