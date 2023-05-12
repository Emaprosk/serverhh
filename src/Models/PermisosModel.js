import db from "../Database/db.js";

import { DataTypes } from "sequelize";

const PermisosModel = db.define("permisos", {
    publicar: { type: DataTypes.SMALLINT },
    comentar: { type: DataTypes.SMALLINT },
    editar: { type: DataTypes.SMALLINT },
});

export default PermisosModel;
