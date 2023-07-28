const { updateFormTalent
} = require("../../controllers/forms/talentFormController");

const handlerUpdateFormTalent = async (req, res) => {
    const { id, name, email, password, dni, available, dataComeBack, image,
        portfolio,
        gender,
        aboutMe,
        nationality,
        ubication,
        hability,
        contexture,
        ethnicOrigin,
        weight,
        height,
        contact,
        socialNetwork,
        reviews,
        reviewsCount } = req.body;
    console.log(req.body);
    try {
        const updateTalent = await updateFormTalent(id, name, email, password, dni, available, dataComeBack, image,
            portfolio,
            gender,
            aboutMe,
            nationality,
            ubication,
            hability,
            contexture,
            ethnicOrigin,
            weight,
            height,
            contact,
            socialNetwork,
            reviews,
            reviewsCount)
        res.status(200).json(updateTalent);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
module.exports = {
    handlerUpdateFormTalent
};
