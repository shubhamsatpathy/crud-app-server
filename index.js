import express, { application } from 'express';
import Connection from './Database/db.js';
import Routes from './Routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const App=express();

App.use(cors());
App.use(bodyParser.json({extended:true}))
App.use(bodyParser.urlencoded({extended:true}))

App.use('/',Routes);

const PORT=8000;

Connection()

App.listen(PORT,()=>{console.log("APP IS RUNNING SUCCESSFULLY ON PORT====8000")})