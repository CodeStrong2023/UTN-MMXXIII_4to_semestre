import express from "express";
import morgan from "morgan";
import tareasRoutes from "./router/tareas.routes.js"
import authRoutes from "./router/auth.routes.js"
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(morgan("dev"));
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }
));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get("/", (req, res) => res.json({ message: "Bienvenidos a proyecto PERN - UTN-MMXXIII"}));
app.get("/api/ping", async(req, res) => {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
  });
app.use('/api',tareasRoutes);
app.use('/api', authRoutes);

//Manejando errores
app.use((err, req,res,next) => {
    res.status(500).json({
        status:"error",
        message: err.message
    });
});

export default app;