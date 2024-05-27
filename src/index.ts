 import express, {Request, Response} from 'express';
 import cors from 'cors';
import bodyParser from 'body-parser';
import "dotenv/config";
import mongose from 'mongoose';
import myUserRoute from './routes/MyUserRoute';



mongose.connect( process.env.MONGO_URI as string).then(()=>{
    console.log("Connected to the database");
}).catch((error)=>{
    console.log("Error: ", error);
});
const app = express();



app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/user", myUserRoute);


app.listen(7000, ()=>{
    console.log("Server is running on port 7000");
});