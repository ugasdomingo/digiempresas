import { Router } from "express";
import { register, login, logout, forgot_password, reset_password } from "../controllers/user-controller.js";
import { auth_data_validation } from "../middlewares/data-validation.js";

const user_router = Router();

user_router.post('/register', auth_data_validation, register);
user_router.post('/login', auth_data_validation, login);
user_router.post('/logout', logout);
user_router.post('/forgot-password', forgot_password);
user_router.post('/reset-password', reset_password);

export default user_router;
