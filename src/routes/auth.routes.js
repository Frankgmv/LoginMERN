import { Router } from "express";
import { requiredAuth } from "../middlewares/tokenValidation.js";
import { login, logout, profile, register } from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();    

router.post('/register', validateSchema(registerSchema), register);
router.post('/login',validateSchema(loginSchema), login);
router.post('/logout', logout);
router.get('/profile', requiredAuth, profile); 

export default router;   