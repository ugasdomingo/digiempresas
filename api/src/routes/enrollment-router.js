import { Router } from "express";
import { create_enrollment, get_enrollment, get_all_enrollments, change_enrollment_status } from "../controllers/enrollment-controller.js";
import { admin_auth, user_auth } from "../middlewares/user-auth.js";

const enrollment_router = Router();

enrollment_router.post('/create', user_auth, create_enrollment);
enrollment_router.get('/all', admin_auth, get_all_enrollments);
enrollment_router.get('/:id', user_auth, get_enrollment);
enrollment_router.put('/:id', admin_auth, change_enrollment_status);

export default enrollment_router;
