import express from "express";
import { getPow, updatePow } from "../Controllers/PermisosController.js";

const routesPow = express.Router();

routesPow.get("/:id", getPow);
routesPow.put("/:id", updatePow);

export default routesPow;
