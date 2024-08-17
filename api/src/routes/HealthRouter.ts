//Import tools
import { Router } from 'express';
import { adminAuth } from '@/middlewares/adminAuth';
import { userAuth } from '@/middlewares/userAuth';
import { userOrAdminAuth } from '@/middlewares/userOrAdminAuth';
import {
    createHealth,
    getHealth,
    deleteHealth,
} from '@/controllers/HealthControllers';

//Router
const router = Router();

//Routes
router.post('/', userAuth, createHealth);

router.get('/', userOrAdminAuth, getHealth);

router.delete('/:id', adminAuth, deleteHealth);
