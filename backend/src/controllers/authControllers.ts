// Import Tools
import { generateRefreshToken, generateToken } from "../utils/tokenManager";
import { UserModel } from "../models/User";
import jwt from "jsonwebtoken";

// -------------------------------------------
// Register Controller -> Line 15
// Login Controller -> Line 39
// Refresh Token Controller -> Line 61
// Logout Controller -> Line 84
// Get all Users Controller -> Line 90
// Get a User Controller -> Line 100
// -------------------------------------------

// Register Controller
export const register = async (req: any, res: any) => {
	const { name, email, password, company } = req.body;

	try {
		//Validate unique user
		const uniqueEmail = await UserModel.findOne({ email });
		if (uniqueEmail) return res.status(400).json({ message: "User Exist" });

		//Create new user
		const user = new UserModel({ name, email, password, company });
		await user.save();

		//Email Validation

		//Generate Token & RefreshToken
		generateRefreshToken(user.id, res);
		return res.json(generateToken(user.id));
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal Server Error" });
	}
};

// Login Controller
export const login = async (req: any, res: any) => {
	const { email, password } = req.body;
	try {
		//Validate User
		const user = await UserModel.findOne({ email });
		if (!user) return res.status(400).json({ message: "Invalid Data" });

		//Validate Password
		const validatePassword = await user.comparePassword(password);
		if (!validatePassword)
			return res.status(400).json({ message: "Invalid Data" });

		//Generate Token & RefreshToken
		generateRefreshToken(user.id, res);
		return res.json(generateToken(user.id));
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Server Error" });
	}
};

// Refresh Token Controller
export const refresh = async (req: any, res: any) => {
	//Payload for req.uid
	interface JwtPayload {
		uid: string;
	}

	try {
		let refreshTokenCookie = req.headers.cookie;
		refreshTokenCookie = refreshTokenCookie.split("=")[1];

		if (!refreshTokenCookie) throw new Error("Sign in to see this page");

		const { uid } = jwt.verify(
			refreshTokenCookie,
			process.env.JWT_REFRESH as string
		) as JwtPayload;
		return res.json(generateToken(uid));
	} catch (error: any) {
		return res.status(401).json({ message: error.message });
	}
};

// Logout Controller
export const logout = async (req: any, res: any) => {
	res.clearCookie("refreshToken");
	res.json({ mesage: "Logout" });
};

// Get All Users Controller
export const allUser = async (req: any, res: any) => {
	try {
		const user = await UserModel.find().lean();
		return res.json({ user });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// Get a User Controller
export const oneUser = async (req: any, res: any) => {
	try {
		const user = await UserModel.findById(req.params.id);
		return res.json({ name: user?.name });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};
