//Import tools
import { v2 as cloudinary } from 'cloudinary';

//Config
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true,
});

//Upload image to digiempresas/formation
export async function uploadFormationImage(file: any): Promise<any> {
    try {
        const uploadedImage = await cloudinary.uploader.upload(file, {
            folder: 'digiempresas/formation',
        });

        return uploadedImage;
    } catch (error) {
        console.log(error);
    }
}

//Upload image to digiempresas/payments
export async function uploadPaymentImage(file: any): Promise<any> {
    try {
        const uploadedImage = await cloudinary.uploader.upload(file, {
            folder: 'digiempresas/payments',
        });

        return uploadedImage;
    } catch (error) {
        console.log(error);
    }
}

//Delete image
export async function deleteImage(public_id: string): Promise<any> {
    try {
        const deletedImage = await cloudinary.uploader.destroy(public_id);

        return deletedImage;
    } catch (error) {
        console.log(error);
    }
}
