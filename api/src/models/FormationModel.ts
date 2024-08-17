//Import tools
import { Schema, model, Document } from 'mongoose';

//Interface
export interface IFormation extends Document {
    _id: string;
    name: string;
    description: string;
    brief: string;
    price: number;
    cover: {
        secure_url: string;
        public_id: string;
    };
    video?: string;
    paypalButton: string;
    createdAt: Date;
    editedAt: Date;
}

//Schema
const formationSchema = new Schema<IFormation>(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        brief: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        cover: {
            secure_url: {
                type: String,
                required: true,
            },
            public_id: {
                type: String,
                required: true,
            },
        },
        video: {
            type: String,
        },
        paypalButton: {
            type: String,
            required: true,
        },
    },

    {
        timestamps: true,
    }
);

//Export model
export const FormationModel = model<IFormation>('Formation', formationSchema);
