const { Router } = require("express");

const {
    getAllPlans,
    getPlanById,
    createPlan,
    updatePlan,
    deletePlan
} = require("../../handlers/plans/plansHandler");

const plansRouter = Router();

//Esta ruta obtiene todos los planes de pago.
plansRouter.get("/", getAllPlans);

//Esta ruta obtiene un plan de pago por id.
plansRouter.get("/:id", getPlanById);

//Esta ruta registra un nuevo plan de pago en la base de datos.
plansRouter.post("/", createPlan);

//Esta ruta edita un plan de pago.
plansRouter.put("/:id", updatePlan);

//Esta ruta elimina un plan de pago.
plansRouter.delete("/:id", deletePlan);

module.exports = plansRouter;