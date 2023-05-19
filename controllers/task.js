import {Task} from "../models/task.js"
import ErrorHandler from "../middlewares/error.js"


export const newTask = async (req, res, next)=> {
   try {
    const {title, description} = req.body;
    const newTask = new Task({
        title,
        description,
        user: req.user
    });
    await newTask.save();

    res.status(201).json({
        success: true,    
        message: "Task added successsfully"
    });
   } catch (error) {
        next(error)
   }
};

export const getMyTask = async (req , res, next) => {
  try {
    const userid = req.user._id;
    const tasks = await Task.find({user:userid});
    res.status(200).json({
        success: true,
        tasks
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
   try {
    const id = req.params.id;
    const task = await Task.findById(id);

    if(!task) return next(new ErrorHandler("Task not found", 404))
    task.deleteOne();
    res.status(200).json({
        success: true,
        message: "Task deleted"
    });
   } catch (error) {
    next(error)
   }
};

export const updateTask = async (req, res, next) => { 
    try {
        const {id} = req.params;

    const task = await Task.findById(id);

    if(!task) return next(new ErrorHandler("Invalid", 404))
    task.isCompleted = !task.isCompleted;
    await task.save()
    res.status(200).json({
        success: true,
        message: "Task updated"
    });
    } catch (error) {
        next(error);
    }
};