import { Router } from "express";
import { getTask, getTasks, updateTask, deleteTask, addTask } from "../controllers/task.controller.js";
import { requiredAuth } from "../middlewares/tokenValidation.js";

const router = Router();

router.get('/tasks',requiredAuth, getTasks);
router.get('/task/:id',requiredAuth, getTask);
router.post('/task',requiredAuth, addTask);
router.put('/task/:id',requiredAuth, updateTask);
router.delete('/task/:id',requiredAuth, deleteTask);

export default router;