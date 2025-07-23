import { Schema, model } from 'mongoose';

const enrollmentSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    course_id: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'approved'
    }
}, {
    timestamps: true
});

export const Enrollment_model = model('Enrollment', enrollmentSchema);
