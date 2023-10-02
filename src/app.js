import express from 'express';
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', authRoutes);

app.get('/', (req, res)=>{
    res.send('hola'); 
})

export default app;
