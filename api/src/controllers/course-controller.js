import { Course_model } from "../models/Course.js";
import { client_response } from "../utils/responser.js";
import { upload_course_cover, delete_image } from "../utils/cloudinary.js";
import fs from 'fs-extra';

export const create_course = async (req, res, next) => {
    try {
        const { title, description, content, price, tags } = req.body;
        const new_course = new Course_model({ title, description, content, price, tags });
        if (req.file?.course_cover) {
            const result = await upload_course_cover(req.file.course_cover);
            new_course.course_cover = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }
            await fs.unlink(req.file.course_cover.tempFilePath);
        }
        await new_course.save();
        client_response(res, 201, 'Course creado correctamente');
    } catch (error) {
        next(error);
    }
}

export const get_all_courses = async (req, res, next) => {
    try {
        const courses = await Course_model.find().lean();
        client_response(res, 200, 'OK', courses);
    } catch (error) {
        next(error);
    }
}

export const get_course = async (req, res, next) => {
    try {
        const { id } = req.params;
        const course = await Course_model.findById(id).lean();
        client_response(res, 200, 'OK', course);
    } catch (error) {
        next(error);
    }
}

export const update_course = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, description, content, price, tags } = req.body;
        const course = await Course_model.findById(id);
        if (!course) {
            throw new Error('Course no encontrado');
        }
        course.title = title;
        course.description = description;
        course.content = content;
        course.price = price;
        course.tags = tags;
        if (req.file?.course_cover) {
            const result = await upload_course_cover(req.file.course_cover);
            course.course_cover = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }
            await fs.unlink(req.file.course_cover.tempFilePath);
        }
        await course.save();
        client_response(res, 200, 'Course actualizado correctamente');
    } catch (error) {
        next(error);
    }
}

export const delete_course = async (req, res, next) => {
    try {
        const { id } = req.params;
        const course = await Course_model.findById(id);
        if (!course) {
            throw new Error('Course no encontrado');
        }
        if (course.course_cover) {
            await delete_image(course.course_cover.public_id);
        }
        await course.deleteOne();
        client_response(res, 200, 'Course eliminado correctamente');
    } catch (error) {
        next(error);
    }
}

