//Import tools
import { Router } from "express";
import { dataAuthValidation } from "../middleware/dataAuthValidation";
import { adminAuth } from "../middleware/adminAuth";

// -------------------------------------------
// Routes for Validation and Control Registered Users
// -------------------------------------------

//Import Controllers
import {
	register,
	login,
	logout,
	refresh,
	allUser,
	oneUser,
} from "../controllers/authControllers";

//Define router
const authRouter = Router();

// Auth Routes
authRouter.post("/register", dataAuthValidation, register);

authRouter.post("/login", dataAuthValidation, login);

authRouter.get("/refresh", refresh);

authRouter.get("/logout", logout);

authRouter.get("/", adminAuth, allUser);

authRouter.get("/:id", adminAuth, oneUser);

//Export routes
export default authRouter;
