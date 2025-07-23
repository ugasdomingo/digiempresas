import { Schema, model } from 'mongoose';

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    post_cover: {
        public_id: {
            type: String,
            required: true,
        },
        secure_url: {
            type: String,
            required: true,
        },
    },
    tags: {
        type: [String],
        required: true
    }
}, {
    timestamps: true
});

export const Post_model = model('Post', postSchema);
