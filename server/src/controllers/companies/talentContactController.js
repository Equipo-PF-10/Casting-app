const { Contact, Event, Talent, Company, ToContact } = require("../../db");

const getTalentContacts = async (talentId) => {
  try {
    const talent = await Talent.findByPk(talentId);

    if (!talent) {
      throw new Error("No se encontró el talento con el ID especificado.");
    }

    const postulations = await talent.getEvents({
      through: { where: { status: "applied" } },
    });

    const contacts = await Promise.all(
      postulations.map(async (postulation) => {
        const event = await Event.findByPk(postulation.id);
        const company = await event.getCompany();
        return {
          eventTitle: event.title,
          companyName: company.name,
          contactEmail: company.email,
          contactPhone: company.phone,
        };
      })
    );

    return contacts;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getTalentContacts };