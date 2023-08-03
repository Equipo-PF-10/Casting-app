const {
    getAllPlansDb,
    getPlanByIdDb,
    createPlanDb,
    updatePlanDb,
    deletePlanDb
} = require("../../controllers/plans/plansController");

const getAllPlans = async (req, res) => {
    try {
        const allPlans = await getAllPlansDb();
        res.status(200).json(allPlans);
    } catch(error) {
        res.status(400).json(error.message);
    }
}

const getPlanById = async (req, res) => {
    const { id } = req.params;
    try {
        const planById = await getPlanByIdDb(id);
        res.status(200).json(planById);
    } catch(error) {
        res.status(400).json(error.message);
    }
}

const createPlan = async (req, res) => {
    const { name, description, price } = req.body;
    if(!name || !description || !price) return res.status(400).send("Faltan datos obligatorios");
    try {
        const newPlan = await createPlanDb(name, description, price);
        res.status(200).send("El nuevo plan se creo correctamente.");
    } catch(error) {
        res.status(400).json(error.message);
    }
}

const updatePlan = async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    try {
        const newData = { name, description, price }
        const updatedPlan = await updatePlanDb(id, newData);
        res.status(200).json(updatedPlan);
    } catch(error) {
        res.status(400).json(error.message);
    }
}

const deletePlan = async (req, res) => {
    const { id } = req.params;
    try {
        await deletePlanDb(id);
        res.status(200).send(`El plan con ID ${id} se ha eliminado con éxito.`);
    } catch(error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllPlans,
    getPlanById,
    createPlan,
    updatePlan,
    deletePlan
}