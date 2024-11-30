import express from 'express';
import {PrismaClient} from "@prisma/client"
import cors from "cors"
import { swaggerUi,swaggerSpec } from './swagger.js';
const app = express();
app.use(cors());
app.use(express.json());
const prisma = new PrismaClient();

app.get('/man',(req,res)=>{
    res.json({name:"manish singh",email:"man98singh@gmail.com",phone:987643100});
})
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));
/**
 * @swagger
 * /man:
 *   post:
 *     summary: Register a user
 *     description: Creates a new user in the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               gender:
 *                 type: string
 *               phoneNo:
 *                 type: string
 *     responses:
 *       201:
 *         description: User successfully registered
 */
app.post("/man",async (req,res)=>{
    const {username,password,gender,phoneNo} = req.body;
    const phoneregex = /^\d{10}$/;
    if(phoneregex.test(phoneNo.toString())){
        const re = await prisma.user.create({
            data:{
                username:username,
                password:password,
                gender:gender,
                phone:phoneNo
            }
        });
        console.log({username,password,gender,phoneNo});
    res.status(201).json({message:"message is registred"});
    }
    else {
        res.json({eoor:"so thisis wring"});
    }
  
    
});
app.listen(80,()=>{console.log("server is started on port 80")});
