//Import tools
import jwt from 'jsonwebtoken';
import { UserModel, IUser } from '@/models/UserModel';
import { responseHandler } from '@/utils/responseHandler';
import { internalErrorHandler } from '@/utils/internalErrorHandler';

//Authenticated user
export const userAuth = async (
    req: any,
    res: any,
    next: any
): Promise<void> => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');

        if (!token) {
            throw new Error('Debes iniciar sesión para ver esta página');
        }
        const { uid }: any = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        );

        //Check if user is authenticated
        const user: IUser | null = await UserModel.findById(uid);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        if (user._id !== uid) {
            throw new Error('No tienes permisos para ver esta página');
        }

        req.uid = uid;
        next();
    } catch (error) {
        responseHandler(
            res,
            401,
            'Error detecting if user is Authenticated',
            error
        );
        internalErrorHandler(error);
    }
};
