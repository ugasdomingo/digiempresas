//Tools Import
import mongoose from "mongoose";

//Connect to MongoDB
export const startConnection = async () => {
	try {
		const db = await mongoose.connect(process.env.DATABASE as string);
		console.log("Connected to " + db.connections[0].name);
	} catch (error) {
		console.error(error);
	}
};
