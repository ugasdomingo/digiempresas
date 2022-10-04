//Import tools
import { Router } from "express";
import { adminAuth } from "../middleware/adminAuth";

// -------------------------------------------
// Routes for Services Control
// -------------------------------------------

// Import Controllers
import {
	allServices,
	oneService,
	createService,
	updateService,
	deleteService,
} from "../controllers/servicesControllers";

//Define router
const servicesRouter = Router();

//Routes
servicesRouter.get("/", allServices);

servicesRouter.get("/:id", oneService);

servicesRouter.post("/", adminAuth, createService);

servicesRouter.put("/:id", adminAuth, updateService);

servicesRouter.delete("/:id", adminAuth, deleteService);

//Export routes
export default servicesRouter;
