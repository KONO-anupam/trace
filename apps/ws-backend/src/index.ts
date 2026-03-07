import 'dotenv/config'
import {WebSocketServer} from 'ws';
import jwt, { JwtPayload } from "jsonwebtoken"

const wss = new WebSocketServer({port: 3000});

wss.on('connection',function connection(ws,request){
    const url = request.url;
    if(!url){
        return;
    }
    const queryParams = new URLSearchParams(url.split('?')[1])
    const token = queryParams.get('token');
    if(!token){
        ws.close()
        return;
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET!);

    if(typeof decoded === 'string'){
        return;
    }
    if(!decoded || !(decoded ).userId){
        ws.close()
        return;
    }
});