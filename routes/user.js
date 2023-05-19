import express from "express";
import { User } from "../models/user.js";
import {
    getMyProfile, 
    login, 
    register, 
    logout,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/me",isAuthenticated ,getMyProfile);

export default router