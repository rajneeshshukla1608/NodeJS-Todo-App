import app from "./app.js"
import connectDB from "./data/database.js"
import cors from 'cors'
connectDB()
app.use(cors({
    orign: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true //credential will not reach to frontend
 }))

app.listen(process.env.PORT, ()=> {
    console.log(`server is listening on port ${process.env.PORT} in ${ process.env.NODE_ENV } mode`);
});