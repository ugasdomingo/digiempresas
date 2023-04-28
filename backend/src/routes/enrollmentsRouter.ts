//Import tools
import { Router } from "express";
import { adminAuth } from "../middleware/adminAuth";
import { userAuth } from "../middleware/userAuth";
import { userOrAdminAuth } from "../middleware/userOrAdminAuth";

// -------------------------------------------
// Routes for Services Control
// -------------------------------------------

// Import Controllers
import {
	allEnrollments,
    oneEnrollment,
    createEnrollment,
    updateEnrollment,
    deleteEnrollment
} from "../controllers/enrollmentsControllers";

//Define router
const servicesRouter = Router();

//Routes
servicesRouter.get("/",adminAuth, allEnrollments);

servicesRouter.get("/:id",userOrAdminAuth, oneEnrollment);

servicesRouter.post("/", userAuth, createEnrollment);

servicesRouter.put("/:id", adminAuth, updateEnrollment);

servicesRouter.delete("/:id", adminAuth, deleteEnrollment);

//Export routes
export default servicesRouter;
