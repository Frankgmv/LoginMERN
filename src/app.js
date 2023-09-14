import express from 'express';
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', authRoutes);

app.get('/', (req, res)=>{
    res.send('hola'); 
})

export default app;
