
import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import router from './router/routes.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(urlencoded({extended:true}));
app.use('/api/v1/students',router);

app.get('/', (req,res)=>{
    res.send('hola mundanos')
})

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

const start = async()=>{
    try {
        connectDB(MONGO_URI);
        console.log(`conectado a mongo en el puerto ${PORT}`);
        app.listen(PORT,()=>{
            console.log('EXITOSA');
        })
    } catch (error) {
        console.log(error);
    }
}
start();

