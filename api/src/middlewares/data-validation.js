import { body } from "express-validator";
import { error_data_validation } from "./error-validation.js";

export const auth_data_validation = [
    body('email').trim().isEmail().withMessage('Email inválido'),
    body('password')
        .trim()
        .isLength({ min: 8 })
        .withMessage('Contraseña debe tener al menos 8 caracteres'),
    error_data_validation
]