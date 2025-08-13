import { Router } from "express";
import { create_course, get_course, get_all_courses, update_course, delete_course } from "../controllers/course-controller.js";
import { admin_auth } from "../middlewares/user-auth.js";

const course_router = Router();

course_router.post('/create', admin_auth, create_course);
course_router.get('/all', get_all_courses);
course_router.get('/:id', get_course);
course_router.put('/:id', admin_auth, update_course);
course_router.delete('/:id', admin_auth, delete_course);

export default course_router;

