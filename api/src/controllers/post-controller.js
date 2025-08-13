import { Post_model } from "../models/Post.js";
import { client_response } from "../utils/responser.js";
import { upload_post_cover, delete_image } from "../utils/cloudinary.js";
import fs from 'fs-extra';

export const create_post = async (req, res, next) => {
    try {
        const { title, content, tags } = req.body;
        const new_post = new Post_model({ title, content, tags });
        if (req.file?.post_cover) {
            const result = await upload_post_cover(req.file.post_cover);
            new_post.post_cover = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }
            await fs.unlink(req.file.post_cover.tempFilePath);
        }
        await new_post.save();
        client_response(res, 201, 'Post creado correctamente');
    } catch (error) {
        next(error);
    }
}

export const get_all_posts = async (req, res, next) => {
    try {
        const posts = await Post_model.find().lean();
        client_response(res, 200, 'OK', posts);
    } catch (error) {
        next(error);
    }
}

export const get_post = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await Post_model.findById(id).lean();
        client_response(res, 200, 'OK', post);
    } catch (error) {
        next(error);
    }
}

export const update_post = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, content, tags } = req.body;
        const post = await Post_model.findById(id);
        if (!post) {
            throw new Error('Post no encontrado');
        }
        post.title = title;
        post.content = content;
        post.tags = tags;
        if (req.file?.post_cover) {
            const result = await upload_post_cover(req.file.post_cover);
            post.post_cover = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }
            await fs.unlink(req.file.post_cover.tempFilePath);
        }
        await post.save();
        client_response(res, 200, 'Post actualizado correctamente');
    } catch (error) {
        next(error);
    }
}

export const delete_post = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await Post_model.findById(id);
        if (!post) {
            throw new Error('Post no encontrado');
        }
        if (post.post_cover) {
            await delete_image(post.post_cover.public_id);
        }
        await post.deleteOne();
        client_response(res, 200, 'Post eliminado correctamente');
    } catch (error) {
        next(error);
    }
}

