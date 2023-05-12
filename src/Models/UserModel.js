import db from "../Database/db.js";

import { DataTypes } from "sequelize";

const UserModel = db.define("users", {
    username: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    charactername: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    estado: { type: DataTypes.INTEGER },
});

export default UserModel;
