const { Event } = require("../../db");

const updateFormEvent = async (
  id,
  name,
  image,
  active,
  ubication,
  habilityRequired,
  salary,
  shortDescription,
  description,
  contact,
  expirationDate,
  CompanyId
) => {
  const [rowsUpdated] = await Event.update(
    {
      name,
      image,
      active,
      ubication,
      habilityRequired,
      salary,
      shortDescription,
      description,
      contact,
      expirationDate,
      CompanyId,
    },
    {
      where: { id },
    }
  );

  // Verifica si se encontró el talento y se actualizó correctamente
  if (rowsUpdated === 0) {
    throw new Error(
      `No se encontró el talento con ID ${id} o no se realizaron cambios.`
    );
  }

  // Opcionalmente, puedes cargar el talento actualizado desde la base de datos
  const updatedEvent = await Event.findByPk(id);
  return updatedEvent;
};

module.exports = { updateFormEvent };
