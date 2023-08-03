const { SubscriptionPlan } = require("../../db");

const getAllPlansDb = async () => {
    try {
        const allPlans = await SubscriptionPlan.findAll();
        return allPlans;
    } catch(error) {
        throw new Error(error.message);
    }
}

const getPlanByIdDb = async (id) => {
    try {
        const foundPlan = await SubscriptionPlan.findByPk(id);
        if (!foundPlan) throw new Error(`El plan con ID ${id} no existe`);
        return foundPlan;
    } catch(error) {
        throw new Error(error.message);
    }
}

const createPlanDb = async (name, description, price) => {
    try {
        const [ existingPlan, newPlan ] = await SubscriptionPlan.findOrCreate({
            where: { name },
            defaults: {
                name,
                description,
                price,
            }
        });
        if (!newPlan) throw new Error("Plan already exists in the database.");
        return newPlan;
    } catch(error) {
        throw new Error(error.message);
    }
}

const updatePlanDb = async (id, newData) => {
    try {
        const foundPlan = await SubscriptionPlan.findByPk(id);
        if (!foundPlan) throw new Error(`El plan con ID ${id} no existe`);
        await foundPlan.update(newData);
        return foundPlan;
    } catch(error) {
        throw new Error(error.message);
    }
}

const deletePlanDb = async (id) => {
    try {
        const foundPlan = await SubscriptionPlan.findByPk(id);
        if (!foundPlan) throw new Error(`El plan con ID ${id} no existe`);
        await foundPlan.destroy();
        return foundPlan;
    } catch(error) {
        throw new Error(error.message);
    }
}

module.exports = {
    getAllPlansDb,
    getPlanByIdDb,
    createPlanDb,
    updatePlanDb,
    deletePlanDb
}