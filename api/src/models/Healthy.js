import { Schema, model } from 'mongoose';

const healthySchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    test_result: {
        type: Number,
        required: true,
    },
    test_answers: {
        type: Object,
        required: true,
    },
}, {
    timestamps: true
});

export const Healthy_model = model('Healthy', healthySchema);
