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


        // "name": "Deporte",
        // "image": "https://www.unesco.org/sites/default/files/styles/best_image/public/deportepandemia-cover900.jpg?itok=VI2gkFsn",
        // "shortDescription": "Emocionante evento deportivo: Competencia feroz, atletismo increíble y momentos inolvidables.",
        // "creationDate": "23-07.2023",
        // "expirationDate": "09-02.2024",
        // "changeDate": "null",
        // "detail": "Emocionante evento deportivo: Competencia feroz, atletismo increíble y momentos inolvidables. Emocionante evento deportivo: Competencia feroz, atletismo increíble y momentos inolvidables.",
        // "active": "true",
        // "ubication": "Argentina",
        // "habilityRequired": [
        //     "Bailarín/a",
        //     "Animador/a"
        // ],
        // "contact": [
        //     "3498408557",
        //     "42251663"
        // ],
        // "habilitySalary": "40000" ,
        // "idEmpresa": "null"



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

module.exports = getEvents;
