import express from 'express'

const app=express()
const port=3000
app.get("/",(req,res)=>{
    res.send("Response from our side")
})
app.use(express.json())
let teaData=[]



// app.get("/ice-tea",(req,res)=>{
//     res.send("What ice tea would you prefer?")
// })
app.listen(port,()=>{
    console.log(`Server is running at port:${port}...`)
})