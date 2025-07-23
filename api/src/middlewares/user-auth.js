import jwt from 'jsonwebtoken';
import { User_model } from '../models/User.js';

export const user_auth = (req, res, next) => {
    try {
        const token = req.header('Authorization').split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = User_model.findById(decoded.user_id).lean();
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        req.user_id = user._id.toString();
        next();
    } catch (error) {
        next(error);
    }
}

export const admin_auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User_model.findById(decoded.user_id).lean();
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        if (user.role !== 'Admin') {
            throw new Error('Acceso denegado');
        }
        req.user_id = user._id.toString();
        next();
    } catch (error) {
        next(error);
    }
}