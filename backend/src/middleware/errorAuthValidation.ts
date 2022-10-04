//Import tools
import { validationResult } from "express-validator";

// -------------------------------------------
// Middleware to control errors validation
// -------------------------------------------

export const errorAuthValidation = (req: any, res: any, next: any) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	next();
};
