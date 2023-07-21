const { getAllEvents } = require("../controllers/eventsController");

const getEventsHandler = async (req, res) => {
  try {
    const events = await getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getEventsHandler,
};
