import  express  from "express";    
import { newTask, getMyTask, deleteTask, updateTask } from "../controllers/task.js";
import {isAuthenticated} from "../middlewares/auth.js"



const router = express.Router();

router.post("/new", isAuthenticated,newTask)

router.get("/my", isAuthenticated,getMyTask)

router.delete("/:id", isAuthenticated,deleteTask)

router.put("/:id", isAuthenticated,updateTask)

export default router