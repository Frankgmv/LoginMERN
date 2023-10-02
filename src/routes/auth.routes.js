import { Router } from "express";
import { login, logout, profile, register } from "../controllers/auth.controller.js";
import { requiredAuth } from "../middlewares/tokenValidation.js";


const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', requiredAuth, profile);

export default router;   