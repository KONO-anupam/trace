import { Router } from "express";
import { signin, signup } from "../controllers/authController";
import { validate } from "../middlewares/validateMiddleware";
import { signinSchema, signupSchema } from "../validators/authSchema";

const router: Router = Router();

router.post('/signup',validate(signupSchema), signup)
router.post('/signin',validate(signinSchema),signin)

export default router