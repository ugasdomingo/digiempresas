import { Router } from "express";
import { create_healthy, get_healthy, get_all_healthy } from "../controllers/healthy-controller.js";
import { admin_auth, user_auth } from "../middlewares/user-auth.js";

const healthy_router = Router();

healthy_router.post('/create', user_auth, create_healthy);
healthy_router.get('/all', admin_auth, get_all_healthy);
healthy_router.get('/:id', user_auth, get_healthy);

export default healthy_router;
