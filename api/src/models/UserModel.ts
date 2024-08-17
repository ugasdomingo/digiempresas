//Import tools
import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';
import { internalErrorHandler } from '@/utils/internalErrorHandler';

//Interface
export interface IUser extends Document {
    _id: string;
    name: string;
    email: string;
    phone: string;
    password: string;
    role: string;
    politiquesAccepted: boolean;
    createdAt: Date;
    editedAt: Date;
    comparePassword: (password: string) => Promise<boolean>;
    changePassword: (oldPassword: string, newPassword: string) => Promise<void>;
}

//Schema
const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['user', 'Admin'],
            required: true,
        },
        politiquesAccepted: {
            type: Boolean,
            required: true,
        },
    },

    {
        timestamps: true,
    }
);

//Encrypt password
userSchema.pre<IUser>('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
    } catch (error) {
        internalErrorHandler(error);
    }
});

//Compare password
userSchema.methods.comparePassword = async function (
    candidatePassword: string
): Promise<boolean> {
    return await bcrypt.compare(candidatePassword, this.password);
};

//Change password
userSchema.methods.changePassword = async function (
    oldPassword: string,
    newPassword: string
): Promise<void> {
    try {
        if (!(await this.comparePassword(oldPassword))) {
            throw new Error('Invalid password');
        }
        this.password = newPassword;
        await this.save();
    } catch (error) {
        internalErrorHandler(error);
    }
};

//Export model
export const UserModel = model<IUser>('User', userSchema);
