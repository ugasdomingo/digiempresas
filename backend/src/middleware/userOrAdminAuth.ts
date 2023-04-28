//Import tools
import jwt from "jsonwebtoken";
import { UserModel } from "../models/User";

interface JwtPayload {
	uid: string;
}

export const userOrAdminAuth = async (req: any, res: any, next: any) => {
	try {
		let token = req.headers.authorization;
		if (!token) throw new Error("Debes hacer login para ver esta página");

		token = token.split(" ")[1];
		const { uid } = jwt.verify(
			token,
			process.env.JWT_SECRET as string
		) as JwtPayload;
		req.uid = uid;

		//Is Admin or a regitered user?
		const user = await UserModel.findOne({ _id: uid });
		if (user?.role !== "Admin")
			if (uid != user?._id)
				throw new Error(
					"No tienes autorización para hacer esta operación"
				);
		next();
	} catch (error: any) {
		return res.status(401).json({ message: error.message });
	}
};