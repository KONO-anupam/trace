import { Router } from "express";
import { createRoom } from "../controllers/roomController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { prismaClient } from "@repo/db";

const router: Router = Router()

router.post('/create-room',authMiddleware,createRoom)
router.get('/room/:roomId',async (req, res)=>{
    const roomId = Number(req.params.roomId);
    const messages = await prismaClient.room.findMany({
        where: {
            id: roomId
        },
        orderBy: {
            id: "desc"
        },
        take: 50
    })

    res.json({
        messages
    })
})
export default router