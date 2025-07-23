import { Schema, model } from 'mongoose';

const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    course_cover: {
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

export const Course_model = model('Course', courseSchema);
