import { User_model } from "../models/User.js";
import { client_response, set_cookies, remove_cookies } from "../utils/responser.js";
import { generate_token, generate_refresh_token, generate_six_digits_code } from "../utils/tokens.js";
import { send_six_digits_code } from "../utils/mailer.js";

export const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await User_model.findOne({ email });
        if (user) {
            throw new Error('El usuario ya existe');
        }
        const new_user = await User_model.create({ name, email, password });
        const token = generate_token(new_user._id);
        const refresh_token = generate_refresh_token(new_user._id);
        set_cookies(res, refresh_token);
        client_response(res, 201, 'Usuario creado correctamente', { token, user_name: new_user.name });
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User_model.findOne({ email });
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            throw new Error('Contraseña incorrecta');
        }
        const token = generate_token(user._id);
        const refresh_token = generate_refresh_token(user._id);
        set_cookies(res, refresh_token);
        client_response(res, 200, 'Usuario logueado correctamente', { token, user_name: user.name });
    } catch (error) {
        next(error);
    }
}

export const logout = async (req, res, next) => {
    try {
        remove_cookies(res);
        client_response(res, 200, 'Usuario deslogueado correctamente');
    } catch (error) {
        next(error);
    }
}

export const forgot_password = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User_model.findOne({ email });
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        const code = generate_six_digits_code();
        user.login_token = code;
        await user.save();
        send_six_digits_code(user.name, user.email, code);
        client_response(res, 200, 'Código enviado correctamente');
    } catch (error) {
        next(error);
    }
}

export const reset_password = async (req, res, next) => {
    try {
        const { email, new_password, code } = req.body;
        const user = await User_model.findOne({ email, login_token: code });
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        user.password = new_password;
        user.login_token = null;
        await user.save();
        client_response(res, 200, 'Contraseña restablecida correctamente');
    } catch (error) {
        next(error);
    }
}

