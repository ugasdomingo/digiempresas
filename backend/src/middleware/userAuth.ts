//Import tools
import jwt from "jsonwebtoken";

// -------------------------------------------
// Middleware to validate that user is Registered
// -------------------------------------------

// Payload JWT
interface JwtPayload {
	uid: string;
}

export const userAuth = (req: any, res: any, next: any) => {
	try {
		// Get token from Headers
		let token = req.headers.authorization;
		if (!token) throw new Error("Please loggin to see this page");

		//Verify token and get User id to set it at request
		token = token.split(" ")[1];
		const { uid } = jwt.verify(
			token,
			process.env.JWT_SECRET as string
		) as JwtPayload;
		req.uid = uid;

		next();
	} catch (error: any) {
		return res.status(401).json({ message: error.message });
	}
};
