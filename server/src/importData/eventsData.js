const { Evento } = require("../db");
const jsonData = require("./eventos.json");

const getEvents = async () => {
  try {
    const eventsData = Object.values(jsonData.eventos);

    const allEvents = await Promise.all(
      eventsData.map(async (event) => {
        const {
          name,
          image,
          detail,
          active,
          ubication,
          habilityRequired,
          contact,
        } = event;

        const createdEvent = await Evento.create({
          name,
          image,
          detail,
          active,
          ubication,
          habilityRequired,
          contact,
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
