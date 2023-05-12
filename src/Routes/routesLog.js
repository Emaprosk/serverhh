import express from "express";
import { ChangePassword, LogIn } from "../Controllers/LoginController.js";

const routerLog = express.Router();

routerLog.post("/", LogIn);
routerLog.put("/cp", ChangePassword);

export default routerLog;
