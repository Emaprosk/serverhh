import db from "../Database/db.js";

import { DataTypes } from "sequelize";

const CategoryModel = db.define("categories", {
    category: { type: DataTypes.STRING },
    img: { type: DataTypes.TEXT },
});

export default CategoryModel;
