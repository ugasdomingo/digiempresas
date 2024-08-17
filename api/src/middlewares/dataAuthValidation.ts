//Import tools
import { body } from 'express-validator';
import { errorAuthValidation } from './errorAuthValidation';

//Validation Auth Data
export const dataAuthValidation = [
    body('email', 'formato email incorrecto').trim().isEmail().normalizeEmail(),
    body('password', 'Mínimo 8 caracteres').trim().isLength({ min: 8 }),
    errorAuthValidation,
];
