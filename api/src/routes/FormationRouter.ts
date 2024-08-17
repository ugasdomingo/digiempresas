//Import tools
import { Router } from 'express';
import fs from 'fs-extra';
import fileUpload from 'express-fileupload';
import { adminAuth } from '@/middlewares/adminAuth';
import {
    createFormation,
    getAllFormations,
    getFormation,
    deleteFormation,
} from '@/controllers/FormationControllers';

//Router
const router = Router();

//Routes
router.post(
    '/',
    adminAuth,
    fileUpload({
        useTempFiles: true,
        tempFileDir: '/uploads',
    }),
    createFormation
);

router.get('/', getAllFormations);

router.get('/:id', getFormation);

router.delete('/:id', adminAuth, deleteFormation);
