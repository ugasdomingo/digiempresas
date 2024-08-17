//Import tools
import { Schema, model, Document } from 'mongoose';
import { internalErrorHandler } from '@/utils/internalErrorHandler';

//Interface
export interface IEnrollment extends Document {
    _id: string;
    uid: Schema.Types.ObjectId;
    fid: Schema.Types.ObjectId;
    paymentType: string;
    paymentStatus: string;
    termsAccepted: boolean;
    paymentProof: {
        secure_url: string;
        public_id: string;
    };
    createdAt: Date;
    editedAt: Date;
    changePaymentStatus: (status: string) => Promise<void>;
}

//Schema
const enrollmentSchema = new Schema<IEnrollment>(
    {
        uid: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        fid: {
            type: Schema.Types.ObjectId,
            ref: 'Formation',
            required: true,
        },
        paymentType: {
            type: String,
            required: true,
        },
        paymentStatus: {
            type: String,
            required: true,
        },
        termsAccepted: {
            type: Boolean,
            required: true,
        },
        paymentProof: {
            secure_url: {
                type: String,
            },
            public_id: {
                type: String,
            },
        },
    },

    {
        timestamps: true,
    }
);

//Change payment status
enrollmentSchema.methods.changePaymentStatus = async function (
    status: string
): Promise<void> {
    try {
        this.paymentStatus = status;
        await this.save();
    } catch (error) {
        internalErrorHandler(error);
    }
};

//Export
export const EnrollmentModel = model<IEnrollment>(
    'Enrollment',
    enrollmentSchema
);
