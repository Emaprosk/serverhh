import express from "express";
import {
    ChangePassword,
    GetUserToken,
    LogIn,
} from "../Controllers/LoginController.js";

const routerLog = express.Router();

routerLog.post("/", LogIn);
routerLog.put("/cp", ChangePassword);
routerLog.post("/gut", GetUserToken);

export default routerLog;
