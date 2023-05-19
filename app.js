import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import { config } from "dotenv"; 
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from 'cors'
 const app = express(); 

 config({
    path: "./data/config.env"
 })

// using middleware
app.use(express.json())
//to access cookies
app.use(cookieParser())
app.use(cors({
   orign: [process.env.FRONTEND_URL],
   methods: ["GET", "POST", "PUT", "DELETE"], 
   credentials: true //credential will not reach to frontend
}))



//using routes
app.use( "/api/v1/users", userRouter)
app.use( "/api/v1/task", taskRouter)


app.get("/", (req, res) => {
   res.send("Nice working");
})


app.use(errorMiddleware);


export default app;