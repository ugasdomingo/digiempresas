//Import tools
import { body } from "express-validator";
import { errorAuthValidation } from "./errorAuthValidation";

// -------------------------------------------
// Middleware to clean data for Auth Validation
// -------------------------------------------

export const dataAuthValidation = [
	body("email", "Please enter a correct email")
		.trim()
		.isEmail()
		.normalizeEmail(),
	body("password", "Min 8 Characters").trim().isLength({ min: 8 }),
	errorAuthValidation,
];
