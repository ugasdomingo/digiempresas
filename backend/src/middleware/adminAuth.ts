//Import tools
import jwt from "jsonwebtoken";
import { UserModel } from "../models/User";

// -------------------------------------------
// Middleware to validate that user is an Admin
// -------------------------------------------

// Payload JWT
interface JwtPayload {
	uid: string;
}

export const adminAuth = async (req: any, res: any, next: any) => {
	try {
		// Get token from Headers
		let token = req.headers.authorization;
		if (!token) throw new Error("Please Loggin to see this page");

		//Verify token and get User id
		token = token.split(" ")[1];
		const { uid } = jwt.verify(
			token,
			process.env.JWT_SECRET as string
		) as JwtPayload;
		req.uid = uid;

		//Is Admin?
		const user = await UserModel.findOne({ _id: uid });
		if (user?.role !== "admin")
			throw new Error("You are not authorizate for this operations");
		next();
	} catch (error: any) {
		return res.status(401).json({ message: error.message });
	}
};
