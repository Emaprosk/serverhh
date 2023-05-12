import db from "../Database/db.js";

import { DataTypes } from "sequelize";

const ComentModel = db.define("comentarios", {
    articulo_id: { type: DataTypes.INTEGER },
    usuario_id: { type: DataTypes.INTEGER },
    contenido: { type: DataTypes.TEXT },
    createdBy: { type: DataTypes.STRING },
    score: { type: DataTypes.INTEGER },
    status: { type: DataTypes.STRING },
});

export default ComentModel;
