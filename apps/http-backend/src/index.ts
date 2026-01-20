import 'dotenv/config'
import express from "express";
import authRoutes from './routes/authRoutes'
import roomRoutes from './routes/roomRoutes'
import { errorMiddleware } from './middlewares/errorMiddleware';
const app = express();

app.use(errorMiddleware)
app.use(express.json());


app.post('/api/auth',authRoutes)

app.post('/api/room', roomRoutes)

app.listen(3001, ()=>{
    console.log('Server running on port 3001');
})