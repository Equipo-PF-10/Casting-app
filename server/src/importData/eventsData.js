const { Evento } = require("../db");
const jsonData = require("../../utilsDataApi/eventos.json");

const getEvents = async () => {
  try {
    const eventsData = jsonData.results;

    const allEvents = await Promise.all(
      eventsData.map(async (event) => {
        const {
          name,
          image,
          shortDescription,
          detail,
          active,
          ubication,
          habilityRequired,
          contact,
          habilitySalary,
        } = event;

        const createdEvent = await Evento.create({
          name,
          image,
          shortDescription,
          detail,
          active,
          ubication,
          habilityRequired,
          contact,
          habilitySalary,
        });
        return createdEvent;
      })
    );
    return allEvents;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = getEvents;
