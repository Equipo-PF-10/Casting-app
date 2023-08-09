const {
  Review,
  Company,
  Talent,
  Event,
  ToContact,
  Applied,
  DisableEvent,
} = require("../../db");
const { Op } = require("sequelize");

// Función controller para añadir review a una company.
const addReviewCompany = async (EventId, CompanyId, rating, text) => {
  try {
    let event = await Event.findByPk(EventId);

    if (!event) {
      event = await DisableEvent.findByPk(EventId);
    }

    const company = await Company.findByPk(CompanyId);

    if (!event || !company) {
      throw new Error("Error al encontrar la empresa o el evento.");
    }

    const prueba = await Applied.findAll({
      where: {
        EventId: EventId,
        status: "Contratado",
      },
    });
    let postulacionesId = [];
    let eventosId = [];

    for (let i = 0; i < prueba.length; i++) {
      postulacionesId.push(prueba[i].id);
      eventosId.push(prueba[i].EventId);
    }
    for (let i = 0; i < eventosId.length; i++) {
      if (eventosId[i] === EventId) {
        await Applied.update(
          {
            Talentreviews:
              (company.reviews * company.reviewsCount + rating) /
              (company.reviewsCount + 1),
            TalentreviewsComentary: text,
          },
          {
            where: {
              id: postulacionesId[i],
            },
          }
        );
        await ToContact.update(
          {
            Talentreviews:
              (company.reviews * company.reviewsCount + rating) /
              (company.reviewsCount + 1),
            TalentreviewsComentary: text,
          },
          {
            where: {
              EventId: EventId,
            },
          }
        );

        const updatedCompanyRating =
          (company.reviews * company.reviewsCount + rating) /
          (company.reviewsCount + 1);
        await company.update({
          reviews: updatedCompanyRating,
          reviewsCount: company.reviewsCount + 1,
        });

        return `Se ha incluido tu puntuación para la compañía ${CompanyId} que te contrató en el evento ${EventId}`;
      }
    }
    return prueba;
  } catch (error) {
    throw new Error(error.message);
  }
};
// Función controller para añadir un review a un talento.
const addReviewTalent = async (EventId, TalentId, rating, text) => {
  try {
    let event = await Event.findByPk(EventId);

    if (!event) {
      event = await DisableEvent.findByPk(EventId);
    }

    const talent = await Talent.findByPk(TalentId);

    if (!event || !talent) {
      throw new Error("Error al encontrar el evento o el talento.");
    }

    const prueba = await Applied.findAll({
      where: {
        EventId: EventId,
        status: "Contratado",
      },

      include: { model: Talent },
    });

    for (let i = 0; i < prueba.length; i++) {
      //let prueba2 = prueba[i].Talents[0];
      if (prueba[i].Talents[0].id === TalentId) {
        await Applied.update(
          { Companyreviews: rating, CompanyreviewsComentary: text },
          {
            where: {
              EventId: EventId,
              id: prueba[i].id,
            },
          }
        );
        await ToContact.update(
          { Companyreviews: rating, CompanyreviewsComentary: text },
          {
            where: {
              EventId: EventId,
            },
          }
        );

        await Talent.update(
          {
            reviews:
              (talent.reviews * talent.reviewsCount + rating) /
              (talent.reviewsCount + 1),
            reviewsCount: talent.reviewsCount + 1,
          },
          {
            where: {
              id: talent.id,
            },
          }
        );

        return `Se ha incluido tu puntuacion para el talento ${TalentId} que participó en el evento ${EventId}`;
      }
      //for (let j=0 ; j < prueba2.length ; j++){
      //  if(prueba2[j].id===TalentId) {
      // }
      //}
    }

    return prueba[0].Talents[0].id;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller para obtener reviews de una empresa.
const getCompanyReviews = async (id) => {
  const reviews = await Review.findAll({
    where: { CompanyId: id },
    include: [Talent],
  });

  return reviews;
};

// Función controller para obtener las reviews.
const getTalentReviews = async (id) => {
  try {
    const reviews = await Review.findAll({
      where: { TalentId: id },
      include: [Company],
    });

    return reviews;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateReview = async (id, text, rating, CompanyId, TalentId) => {
  const [rowsUpdated] = await Review.update(
    {
      text,
      rating,
      CompanyId,
      TalentId,
    },
    {
      where: { id },
    }
  );

  if (rowsUpdated === 0) {
    throw new Error(
      `No se encontró el review con ID ${id} y no se realizaron cambios.`
    );
  }

  const updatedReview = await Review.findByPk(id);
  return updatedReview;
};

// Función controller para obtener los comentarios hechos por Talentos.
const getCommentsTalent = async () => {
  try {
    const appliedEntriesWithComments = await Applied.findAll({
      attributes: ["TalentreviewsComentary"],
      include: {
        model: Talent,
        through: "TalentApplieds",
        attributes: ["id", "name"],
      },
      where: {
        TalentreviewsComentary: {
          [Op.ne]: null,
        },
      },
    });

    const comments = [];

    appliedEntriesWithComments.forEach((entry) => {
      if (entry.Talents && Array.isArray(entry.Talents)) {
        entry.Talents.forEach((talent) => {
          comments.push({
            talentId: talent.id,
            talentName: talent.name,
            comment: entry.TalentreviewsComentary,
          });
        });
      }
    });

    return comments;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  addReviewCompany,
  addReviewTalent,
  getCompanyReviews,
  getTalentReviews,
  updateReview,
  getCommentsTalent,
};
