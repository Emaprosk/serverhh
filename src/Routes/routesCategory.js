import express from "express";
import {
    createCategory,
    deleteCategory,
    getAllCategory,
    getCategory,
    updateCategory,
} from "../Controllers/CategoryController.js";

const routerCate = express.Router();

routerCate.get("/", getAllCategory);
routerCate.get("/:id", getCategory);
routerCate.post("/", createCategory);
routerCate.put("/:id", updateCategory);
routerCate.delete("/:id", deleteCategory);

export default routerCate;
