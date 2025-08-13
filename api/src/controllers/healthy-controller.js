import { Healthy_model } from "../models/Healthy.js";
import { client_response } from "../utils/responser.js";

export const create_healthy = async (req, res, next) => {
    try {
        const { user_id, test_result, test_answers } = req.body;
        await Healthy_model.create({ user_id, test_result, test_answers });
        client_response(res, 201, 'Healthy creado correctamente');
    } catch (error) {
        next(error);
    }
}

export const get_healthy = async (req, res, next) => {
    try {
        const healthy = await Healthy_model.findOne({ user_id: req.user_id }).lean();
        client_response(res, 200, 'OK', healthy);
    } catch (error) {
        next(error);
    }
}

export const get_all_healthy = async (req, res, next) => {
    try {
        const healthy = await Healthy_model.find().lean();
        client_response(res, 200, 'OK', healthy);
    } catch (error) {
        next(error);
    }
}
