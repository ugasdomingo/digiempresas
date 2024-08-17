//Import tools
import { Router } from 'express';
import { userAuth } from '@/middlewares/userAuth';
import {
    register,
    login,
    refreshToken,
    changePassword,
} from '@/controllers/UserControllers';

//Router
const router = Router();

//Routes
router.post('/register', register);

router.post('/login', login);

router.post('/refresh', refreshToken);

router.post('/change-password', userAuth, changePassword);
