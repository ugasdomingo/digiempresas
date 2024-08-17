//Import tools
import { Schema, model, Document } from 'mongoose';
import { internalErrorHandler } from '@/utils/internalErrorHandler';

//Interface
export interface IHealth extends Document {
    _id: string;
    uid: Schema.Types.ObjectId;
    socialHealth: {
        publicationVariety: number;
        useAds: boolean;
        useStrategy: boolean;
        useAutomation: boolean;
        socialConclusions: string;
    };
    websiteHealth: {
        helpUsers: boolean;
        helpEmployees: boolean;
        helpSEO: boolean;
        helpAds: boolean;
        websiteConclusions: string;
    };
    realCustomerHealth: {
        customesIdentifaicated: string;
        customerBuyChannels: string;
        customerStrategies: string;
        customerConclusions: string;
    };
    automaticResponse: number;
    specialistResponse: string;
    changeSpecialistResponse: (response: string) => Promise<void>;
    createdAt: Date;
    editedAt: Date;
}

//Schema
const healthSchema = new Schema<IHealth>(
    {
        uid: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        socialHealth: {
            publicationVariety: {
                type: Number,
                required: true,
            },
            useAds: {
                type: Boolean,
                required: true,
            },
            useStrategy: {
                type: Boolean,
                required: true,
            },
            useAutomation: {
                type: Boolean,
                required: true,
            },
            socialConclusions: {
                type: String,
                required: true,
            },
        },
        websiteHealth: {
            helpUsers: {
                type: Boolean,
                required: true,
            },
            helpEmployees: {
                type: Boolean,
                required: true,
            },
            helpSEO: {
                type: Boolean,
                required: true,
            },
            helpAds: {
                type: Boolean,
                required: true,
            },
            websiteConclusions: {
                type: String,
                required: true,
            },
        },
        realCustomerHealth: {
            customesIdentifaicated: {
                type: String,
                required: true,
            },
            customerBuyChannels: {
                type: String,
                required: true,
            },
            customerStrategies: {
                type: String,
                required: true,
            },
            customerConclusions: {
                type: String,
                required: true,
            },
        },
        automaticResponse: {
            type: Number,
            required: true,
        },
        specialistResponse: {
            type: String,
            default:
                'Pronto un especialista te responderá con un análisis más detallado',
        },
    },

    {
        timestamps: true,
    }
);

//Methods
healthSchema.methods.changeSpecialistResponse = async function (
    response: string
): Promise<void> {
    try {
        this.specialistResponse = response;
        await this.save();
    } catch (error) {
        internalErrorHandler(error);
    }
};

//Export model
export const HealthModel = model<IHealth>('Health', healthSchema);
