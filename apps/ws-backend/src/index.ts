import 'dotenv/config'
import {WebSocketServer, WebSocket} from 'ws';
import jwt, { JwtPayload } from "jsonwebtoken"
import { prismaClient } from '@repo/db/client'

const wss = new WebSocketServer({port: 3000});

interface User{
    ws: WebSocket,
    rooms: string[],
    userId: string
}

const users: User[] = []

const checkUser = (token: string): string | null=>{
    try{
const decoded = jwt.verify(token,process.env.JWT_SECRET!);
 if(typeof decoded === 'string'){
        return null;
    }
    if(!decoded || !(decoded ).userId){
        return null;
    }

    return decoded.userId;
    }
catch(e){
    return null
}
}


wss.on('connection',function connection(ws,request){
    const url = request.url;
    if(!url){
        return;
    }
    const queryParams = new URLSearchParams(url.split('?')[1])
    const token = queryParams.get('token') || "";
    const userId = checkUser(token)
    if(!userId){
        ws.close()
        return;
    }

    users.push({
        ws,
        rooms: [],
        userId
    })

    ws.on('message', async function messages(data) {
        const parsedData = JSON.parse(data as unknown as string)

        if(parsedData.type === 'join_room'){
                const user = users.find(x => x.ws === ws);
                if(!user) return;

                user.rooms.push(parsedData.room)
            }

        if(parsedData.type === 'chat'){
            const roomId = parsedData.roomId;
            const message = parsedData.message;

            await prismaClient.chat.create({
                data:{
                    roomId,
                    message,
                    userId
                }
            });

            users.forEach( user =>{
                if(user.rooms.includes(roomId)){
                    user.ws.send(JSON.stringify({
                        type: "chat",
                        message: message,
                        roomId
                    }))
                }
            })
        }

    })
});