import dotenv from "dotenv"
dotenv.config({
    path:"./.env"
})

// let myusername =process.env.usernames
// console.log("value: ",myusername)
// console.log("started backend project")

const express=require('express');
const app=express();
const port=3000;