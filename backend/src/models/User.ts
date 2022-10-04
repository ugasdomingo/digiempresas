//Import tools
import { Schema, model, Model, Document } from "mongoose";
import bcryptjs from "bcryptjs";

//Create Schema Methods Definitions
interface IUserDocument extends Document {
	name: string;
	email: string;
	password: string;
	passwordConfirm: string | undefined;
	company: string;
	role: string;
}

export interface IUser extends IUserDocument {
	comparePassword: (password1: string) => Promise<boolean>;
}

interface IUserModel extends Model<IUserDocument, {}> {}

//Create User Schema
const userSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		default: "leads",
	},
	company: {
		type: String,
		required: true,
	},
});

//Schema methods
userSchema.pre("save", async function (next) {
	const user = this;

	if (!user.isModified("password")) return next();

	try {
		const salt = await bcryptjs.genSalt(10);
		user.password = await bcryptjs.hash(user.password, salt);
		next();
	} catch (error) {
		console.log(error);
		throw new Error("Fail on password hash");
	}
});

userSchema.methods.comparePassword = async function (candidatePassword: any) {
	return await bcryptjs.compare(candidatePassword, this.password);
};

export const UserModel = model<IUser>("User", userSchema);
