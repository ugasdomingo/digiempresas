//Import tools
import jwt from 'jsonwebtoken';
import { UserModel, IUser } from '@/models/UserModel';
import { responseHandler } from '@/utils/responseHandler';
import { internalErrorHandler } from '@/utils/internalErrorHandler';
import { createToken, createRefreshToken } from '@/utils/tokenManager';

//Register
export const register = async (req: any, res: any): Promise<void> => {
    try {
        const { name, email, phone, password, role, politiquesAccepted } =
            req.body;

        //Check if user exists
        const userExists = await UserModel.findOne({ email });
        if (userExists)
            return responseHandler(400, res, 'Usuario ya registrado');

        const user = new UserModel({
            name,
            email,
            phone,
            password,
            role,
            politiquesAccepted,
        });

        //Save user
        await user.save();

        //Create token and refresh token
        const token = createToken(user._id);
        const refreshToken = createRefreshToken(user._id);
        const userInfo = { role: user.role, name: user.name };

        return responseHandler(201, res, 'Usuario registrado con éxito', {
            token,
            refreshToken,
            userInfo,
        });
    } catch (error) {
        responseHandler(500, res, 'Error de servidor registrando usuario');
        return internalErrorHandler(error);
    }
};

//Login
export const login = async (req: any, res: any): Promise<void> => {
    try {
        const { email, password } = req.body;

        //Check if user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return responseHandler(401, res, 'Credenciales incorrectas');
        }

        //Check password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return responseHandler(401, res, 'Credenciales incorrectas');
        }

        //Create token and refresh token
        const token = createToken(user._id);
        const refreshToken = createRefreshToken(user._id);
        const userInfo = { role: user.role, name: user.name };

        return responseHandler(200, res, 'Usuario logueado con éxito', {
            token,
            refreshToken,
            userInfo,
        });
    } catch (error) {
        responseHandler(500, res, 'Error de servidor logueando usuario');
        return internalErrorHandler(error);
    }
};

//Refresh token
export const refreshToken = async (req: any, res: any): Promise<void> => {
    try {
        let refreshToken = req.headers.authorization;
        refreshToken = refreshToken?.split(' ')[1];

        //Check if refresh token exists
        if (!refreshToken) {
            return responseHandler(401, res, 'No autorizado, inicie sesión');
        }

        //Verify refresh token
        const { uid } = jwt.verify(
            refreshToken,
            process.env.JWT_REFRESH as string
        ) as { uid: string };

        const user: IUser | null = await UserModel.findById(uid);

        //Create token and refresh token
        if (!user) {
            return responseHandler(401, res, 'No autorizado, inicie sesión');
        }

        const token = createToken(user._id);
        const newRefreshToken = createRefreshToken(user._id);
        const userInfo = { role: user.role, name: user.name };

        return responseHandler(200, res, 'Token actualizado con éxito', {
            token,
            refreshToken: newRefreshToken,
            userInfo,
        });
    } catch (error) {
        responseHandler(500, res, 'Error de servidor refrescando token');
        return internalErrorHandler(error);
    }
};

//Change password
export const changePassword = async (req: any, res: any): Promise<void> => {
    try {
        const { oldPassword, newPassword } = req.body;
        const user: IUser | null = await UserModel.findById(req.uid);

        //Change password
        if (!user) {
            return responseHandler(404, res, 'Usuario no encontrado');
        }

        await user.changePassword(oldPassword, newPassword);

        return responseHandler(200, res, 'Contraseña cambiada con éxito');
    } catch (error) {
        responseHandler(500, res, 'Error de servidor cambiando contraseña');
        return internalErrorHandler(error);
    }
};
