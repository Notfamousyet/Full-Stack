import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import projectRouter from "./routes/project.routes.js"
const app=express()

// cookie 
app.use(cookieParser())

// basic configuration
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

// cors configuration
app.use(cors({
    origin:process.env.CORS_ORIGIN?.split(",") || "https://localhost:3000",
    credentials:true,
    methods:["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    allowedHeaders:["Content-Type","Authorization"]
}))

// import routes
import healthCheckRouter from "./routes/healthcheck.route.js"
import authRouter from "./routes/auth.routes.js"
app.use("/api/v1/healthcheck",healthCheckRouter)
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/projects",projectRouter)

app.get("/",(req,res)=>{
    res.send("Welcome to basecamp")
})
export default app;
