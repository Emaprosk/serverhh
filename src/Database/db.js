import { Sequelize } from "sequelize";

const db = new Sequelize("epiz_34293588_hhdb", "qcsvcFqPEG", "", {
    dialect: "mysql",
    host: "sql303.epizy.com",
    //port: 3308,
});

export default db;
