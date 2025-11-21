// 2. req.params.__

import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.post("/student/:person",(req,res)=>{
   try {
     let userData = req.params.person
    console.log(userData);
    res.status(201).json({msg:`This is ${userData}`})
   } catch (error) {
    console.log(error);
    res.status(500).json({msg:error})
   }
})


//3. req.queries

app.post("/user",(req,res)=>{
    try {
        let data = req.query
        console.log(data);
        res.status(200).json(data)
    } catch (error) {
    console.log(error);
    res.status(500).json({msg:error})
    }
})

app.listen(port,()=>{
    console.log(`Server is high on caffein http://localhost:${port}`);
})