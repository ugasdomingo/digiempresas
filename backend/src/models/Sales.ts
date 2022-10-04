//Import tools
import { Schema, model } from "mongoose";

//Create Sales Schema
const salesSchema = new Schema(
	{
		type: {
			type: String,
			required: true,
			trim: true,
		},
		uid: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		sercicesId: {
			type: [Schema.Types.ObjectId],
			ref: "Services",
			required: true,
		},
		created: {
			type: Date,
			default: Date.now(),
		},
	},
	{
		versionKey: false,
	}
);

export default model("Sales", salesSchema);
