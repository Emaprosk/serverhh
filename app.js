import express from "express";
import cors from "cors";
import db from "./src/Database/db.js";
import userRoutes from "./src/Routes/routes.js";
import artiRoutes from "./src/Routes/routesArticle.js";
import comenRoutes from "./src/Routes/routesComent.js";
import logRoutes from "./src/Routes/routesLog.js";
import catRoutes from "./src/Routes/routesCategory.js";
import powRoutes from "./src/Routes/routesPermisos.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);
app.use("/articles", artiRoutes);
app.use("/comments", comenRoutes);
app.use("/log", logRoutes);
app.use("/cat", catRoutes);
app.use("/pow", powRoutes);

try {
    await db.authenticate();
    console.log("Conexion a base de datos exitosa");
} catch (error) {
    console.log("el error de conexion a la database es: " + error);
}

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3050, () => {
    console.log("Servidor corriendo en el puerto 3050");
});
