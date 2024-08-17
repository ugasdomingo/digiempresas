//Import tools
import { Router } from 'express';
import fs from 'fs-extra';
import fileUpload from 'express-fileupload';
import { adminAuth } from '@/middlewares/adminAuth';
import { userAuth } from '@/middlewares/userAuth';
import { userOrAdminAuth } from '@/middlewares/userOrAdminAuth';
import {
    createEnrollment,
    getAllEnrollments,
    getEnrollment,
    deleteEnrollment,
} from '@/controllers/EnrollmentControllers';

//Router
const router = Router();

//Routes
router.post(
    '/',
    userAuth,
    fileUpload({
        useTempFiles: true,
        tempFileDir: '/uploads',
    }),
    createEnrollment
);

router.get('/', adminAuth, getAllEnrollments);

router.get('/:id', userOrAdminAuth, getEnrollment);

router.delete('/:id', adminAuth, deleteEnrollment);
