//Import tools
import { Router } from "express";
import { adminAuth } from "../middleware/adminAuth";
import { userAuth } from "../middleware/userAuth";

// -------------------------------------------
// Routes for Sales Control
// -------------------------------------------

// Import Controllers
import {
	allSales,
	oneSale,
	createSales,
	updateSale,
	deleteSale,
} from "../controllers/salesControllers";

//Define router
const salesRouter = Router();

//Routes
salesRouter.get("/", adminAuth, allSales);

salesRouter.get("/:id", userAuth, oneSale);

salesRouter.post("/", userAuth, createSales);

salesRouter.put("/:id", userAuth, updateSale);

salesRouter.delete("/:id", adminAuth, deleteSale);

//Export routes
export default salesRouter;
