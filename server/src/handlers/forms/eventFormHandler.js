const { updateFormEvent
} = require("../../controllers/forms/eventFormController");

const handlerUpdateFormEvent = async (req, res) => {
    const {  
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
        CompanyId, } = req.body;
    console.log(req.body);
    try {
        const updateEvent = await updateFormEvent( 
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
            CompanyId,)
        res.status(200).json(updateEvent);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
module.exports = {
    handlerUpdateFormEvent
};
