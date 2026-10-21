import dotenv from "dotenv"
import app from './app.js'
import connectDB from "./db/index.js";
// import express from 'express'
dotenv.config({
    path:"./.env"
})

// let myusername =process.env.usernames
// console.log("value: ",myusername)
// console.log("started backend project")

// const app=express();
const port= process.env.PORT || 3000;

// app.get("/", (req,res)=>{
//     res.send("Hello World");
// });

// app.get("/instagram",(req,res)=>{
//     res.send("this is an instagram page.");
// })

connectDB()
.then(()=>{
        app.listen(port,()=>{
        console.log(`Example app listening on port http://localhost:${port}`)
    })
})
.catch((err)=>{
    console.error("MongoDB connection error",err);
    process.exit(1);
});
