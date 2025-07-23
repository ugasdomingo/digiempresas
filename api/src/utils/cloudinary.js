import { v2 as cloudinary } from 'cloudinary';

//Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
    secure: true
});

export const upload_course_cover = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: 'Digiempresas/Formaciones',
            use_filename: true,
            resource_type: 'auto'
        });
        return result;
    } catch (error) {
        throw error;
    }
}

export const upload_post_cover = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: 'Digiempresas/Posts',
            use_filename: true,
            resource_type: 'auto'
        });
        return result;
    } catch (error) {
        throw error;
    }
}

export const delete_image = async (public_id) => {
    try {
        const result = await cloudinary.uploader.destroy(public_id);
        return result;
    } catch (error) {
        throw error;
    }
}