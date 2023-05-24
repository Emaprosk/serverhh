import db from "../Database/db.js";

import { DataTypes } from "sequelize";

const ArticleModel = db.define("articulos", {
    tittle: { type: DataTypes.STRING },
    contenido: { type: DataTypes.TEXT },
    category: { type: DataTypes.STRING },
    id_usuario: { type: DataTypes.INTEGER },
    createdBy: { type: DataTypes.STRING },
    updatedBy: { type: DataTypes.STRING },
    score: { type: DataTypes.INTEGER },
    status: { type: DataTypes.INTEGER },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
});

export default ArticleModel;
