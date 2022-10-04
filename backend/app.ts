//Import Tools
import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";

//Import Routes
import authRouter from "./src/routes/authRouter";
import blogRouter from "./src/routes/blogRouter";
import servicesRouter from "./src/routes/servicesRouter";
import salesRouter from "./src/routes/salesRouter";

//Define app
const app = express();

// CORS
const allowedOrigins = [
	process.env.ORIGIN1 as string,
	process.env.ORIGIN2 as string,
];

app.use(
	cors({
		origin: function (origin: any, callback: any) {
			if (allowedOrigins.includes(origin)) {
				return callback(null, origin);
			}
			return callback(
				"Error CORS, origin: " + origin + ", No autorizado"
			);
		},
		credentials: true,
	})
);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api", authRouter);
app.use("/api/blog", blogRouter);
app.use("/api/services", servicesRouter);
app.use("/api/sales", salesRouter);

//Export app
export default app;
