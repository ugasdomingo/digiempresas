import { Enrollment_model } from "../models/Enrollment.js";
import { client_response } from "../utils/responser.js";

export const create_enrollment = async (req, res, next) => {
    try {
        const { user_id, course_id } = req.body;
        await Enrollment_model.create({ user_id, course_id });
        client_response(res, 201, 'Enrollment creado correctamente');
    } catch (error) {
        next(error);
    }
}

export const get_enrollment = async (req, res, next) => {
    try {
        const enrollment = await Enrollment_model.findOne({ user_id: req.user_id }).lean();
        client_response(res, 200, 'OK', enrollment);
    } catch (error) {
        next(error);
    }
}

export const get_all_enrollments = async (req, res, next) => {
    try {
        const enrollments = await Enrollment_model.find().lean();
        client_response(res, 200, 'OK', enrollments);
    } catch (error) {
        next(error);
    }
}

export const change_enrollment_status = async (req, res, next) => {
    try {
        const { user_id, course_id, status } = req.body;
        const enrollment = await Enrollment_model.findOne({ user_id, course_id });
        if (!enrollment) {
            throw new Error('Enrollment no encontrado');
        }
        enrollment.status = status;
        await enrollment.save();
        client_response(res, 200, 'Enrollment actualizado correctamente');
    } catch (error) {
        next(error);
    }
}