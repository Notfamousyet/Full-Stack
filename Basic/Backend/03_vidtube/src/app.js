import express from 'express'
import cors from "cors"

const app=express()
app.use(
    cors({
        origin:process.env.CORS_ORIGIN,
        credentials:true
    })
)

// common middleware
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

// import routes
import healthcheck  from './controllers/healthcheck.controllers.js'

// routes
app.use("/api/v1/heathcheck",healthcheck)



export {app}