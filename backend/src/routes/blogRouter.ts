//Import tools
import { Router } from "express";
import { adminAuth } from "../middleware/adminAuth";

// -------------------------------------------
// Routes for Blog Control
// -------------------------------------------

// Import Controllers
import {
	allPost,
	onePost,
	createPost,
	updatePost,
	deletePost,
} from "../controllers/blogControllers";

//Define router
const blogRouter = Router();

//Routes
blogRouter.get("/post", allPost);

blogRouter.get("/post/:id", onePost);

blogRouter.post("/post", adminAuth, createPost);

blogRouter.put("/post/:id", adminAuth, updatePost);

blogRouter.delete("/post/:id", adminAuth, deletePost);

//Export routes
export default blogRouter;
