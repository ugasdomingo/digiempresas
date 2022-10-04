// Import Tools
import Sales from "../models/Sales";
import jwt from "jsonwebtoken";

// -------------------------------------------
// Get All Sales Controller -> Line 18
// Create a Sales Request Controller -> Line 28
// Get one Sale Controller -> Line 55
// Edit a Sale Controller -> Line 68
// Delete a Sale Controller -> Line 85
// -------------------------------------------

// Payload JWT
interface JwtPayload {
	uid: string;
}

// Get All Sales Controller
export const allSales = async (req: any, res: any) => {
	try {
		const posts = await Sales.find();
		res.send(posts);
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// Create a Sales Request Controller
export const createSales = async (req: any, res: any) => {
	try {
		// Get Token from Headers
		let token = req.headers.authorization;
		if (!token) throw new Error("Please Loggin to see this page");

		// Get Request Body Data
		const { type, sercicesId } = req.body;

		//Verify token and get User id
		token = token.split(" ")[1];
		const { uid } = jwt.verify(
			token,
			process.env.JWT_SECRET as string
		) as JwtPayload;

		// Create the sale
		const post = new Sales({ type, sercicesId, uid });
		await post.save();

		res.json(post);
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// Get one Sale Controller
export const oneSale = async (req: any, res: any) => {
	try {
		const post = await Sales.findById(req.params.id);

		if (!post)
			return res.status(404).json({ message: "Post no encontrado" });
		res.send(post);
	} catch (error) {
		return res.status(500).json({ message: "Formato id inválido" });
	}
};

// Edit a Sale Controller
export const updateSale = async (req: any, res: any) => {
	try {
		const updatedPost = await Sales.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);

		if (!updatedPost)
			return res.status(404).json({ message: "Post no encontrado" });
		res.json(updatedPost);
	} catch (error) {
		return res.status(500).json({ message: "Internal Server Error" });
	}
};

// Delete a Sale Controller
export const deleteSale = async (req: any, res: any) => {
	try {
		const post = await Sales.findByIdAndDelete(req.params.id);

		if (!post)
			return res.status(404).json({ message: "Post no encontrado" });
		res.send(post);
	} catch (error) {
		return res.status(500).json({ message: "Formato id inválido" });
	}
};
