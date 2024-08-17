//Import tools
import jwt from 'jsonwebtoken';

//Create token
export const createToken = (uid: string): string => {
    return jwt.sign({ uid }, process.env.JWT_SECRET as string, {
        expiresIn: '1h',
    });
};

//Create refresh token
export const createRefreshToken = (uid: string): string => {
    return jwt.sign({ uid }, process.env.JWT_REFRESH as string, {
        expiresIn: '30d',
    });
};
