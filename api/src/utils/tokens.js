import jwt from "jsonwebtoken";

//Generate token
export const generate_token = (user_id) => {
    return jwt.sign({ user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

//Generate refresh token
export const generate_refresh_token = (user_id) => {
    return jwt.sign({ user_id }, process.env.JWT_REFRESH_SECRET, { expiresIn: '15d' });
}
