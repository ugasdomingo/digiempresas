//Import tools
import jwt from "jsonwebtoken";

//Generate token
export const generateToken = (uid: string) => {
	const expiresIn = 60 * 30;
	try {
		const token = jwt.sign({ uid }, process.env.JWT_SECRET as string, {
			expiresIn,
		});
		return { token, expiresIn };
	} catch (error) {
		console.log(error);
	}
};

//Generate Refresh Token
export const generateRefreshToken = (uid: string, res: any) => {
	const expiresIn = 60 * 60 * 24 * 30;

	try {
		const refreshToken = jwt.sign(
			{ uid },
			process.env.JWT_REFRESH as string,
			{ expiresIn }
		);
		res.cookie("refreshToken", refreshToken, {
			httpOnly: true,
			secure: !(process.env.MODO === "developer"),
			expires: new Date(Date.now() + expiresIn * 1000),
		});
	} catch (error) {
		console.log(error);
	}
};
