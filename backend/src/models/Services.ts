// Import tools
import { Schema, model } from "mongoose";

//Create Services Schema
const servicesSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		price: {
			type: String,
			required: true,
		},
	},
	{
		versionKey: false,
	}
);

export default model("Services", servicesSchema);
