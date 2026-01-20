import { Response } from "express";
import { AuthRequest } from "../middlewares/authMiddleware";
import { createRoomService } from "../services/roomService";

export const createRoom = async (req: AuthRequest, res: Response) =>{
    try{
        const room = await createRoomService(req.userId!)
        res.status(201).json({
            message: 'room created'
        })
    }catch(e){
        res.status(400).json({
            message: 'could not create room'
        })
    }

}