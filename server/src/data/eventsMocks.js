const { Event, Company } = require("../db");
const eventsFullData = require("./eventsMocks.json");

const eventsMocks = async () => {
  try {
    let events = []

    const eventsMapeados = eventsFullData.events.map((event) => {
      const ev = {}

      ev.name = event.name
      ev.image = event.image
      ev.shortDescription = event.shortDescription
      ev.detail = event.detail
      ev.active = event.active
      ev.ubication = event.ubication
      ev.habilityRequired = event.habilityRequired
      ev.habilitySalary = event.habilitySalary
      ev.expirationDate = event.expirationDate
      ev.contact = event.contact
      events.push(ev)
    })

    const savedEvents = await Event.bulkCreate(events)
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = eventsMocks;
