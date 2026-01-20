import { Router } from "express";
import { createRoom } from "../controllers/roomController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router: Router = Router()

router.post('/create-room',authMiddleware,createRoom)

export default router