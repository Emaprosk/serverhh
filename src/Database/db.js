import { Sequelize } from "sequelize";

const db = new Sequelize("hh_db", "root", "", {
    dialect: "mysql",
    host: "localhost",
    port: 3308,
});

export default db;
