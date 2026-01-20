import { Request, Response } from "express"

export const createRoom = async( req: Request, res: Response)=>{

    //will write buisness logic here later

    return res.status(201).json({
        message: 'room created'
    })


}