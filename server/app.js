import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT;

// Method

app.get("/",(req,res)=>{
    try {
        console.log("hello");
        res.status(200).json({msg:"welcome"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

app.post("/login",(req,res)=>{
    try {
        let email = req.body.email;
        let pass = req.body.pass;
        if(pass.length<8){
            console.log("\ninvalid token");
            return res.status(401).json({msg:"invalid credentials! password must contain 8 characters"})
        }
        console.log(`\nEmail : ${email}\nPassword : ${pass}`);
        res.status(200).json({msg:"login success"})
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:error})
    }
})

app.put("/update",(req,res)=>{
    try {
    let email = req.body.email;
    console.log(email);
    res.status(200).json({msg:"update successfull"})
    } catch (error) {
        console.log(error);
    res.status(204).json({msg:error})
    }
})

app.delete("/delete",(req,res)=>{
    try {
        let email = req.body.email;
        console.log(`Deleted ${email}`);
        res.status(404).json({msg:"Account deleted"})
    } catch (error) {
         console.log(error);
    res.status(204).json({msg:error})
    }
})
app.listen(port,()=>{
    console.log(`Server is high on caffein http://localhost:${port}`);
})