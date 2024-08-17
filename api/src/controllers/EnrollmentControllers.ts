//Import tools
import { EnrollmentModel, IEnrollment } from '@/models/EnrollmentModel';
import { responseHandler } from '@/utils/responseHandler';
import { internalErrorHandler } from '@/utils/internalErrorHandler';
import { uploadPaymentImage, deleteImage } from '@/utils/cloudinary';

//Create
export const createEnrollment = async (req: any, res: any): Promise<void> => {
    try {
        const { uid, fid, paymentType, termsAccepted } = req.body;
        let enrollment: IEnrollment;

        //Upload image
        if (paymentType !== 'paypal') {
            const uploadedImage = await uploadPaymentImage(req.file.path);

            //Create enrollment
            enrollment = new EnrollmentModel({
                uid,
                fid,
                paymentType,
                paymentStatus: 'pending',
                termsAccepted,
                paymentProof: {
                    secure_url: uploadedImage.secure_url,
                    public_id: uploadedImage.public_id,
                },
            });
        } else {
            //Create enrollment
            enrollment = new EnrollmentModel({
                uid,
                fid,
                paymentType,
                paymentStatus: 'pending',
                termsAccepted,
            });
        }

        await enrollment.save();
        responseHandler(res, 200, 'Matrícula creada con éxito', enrollment);
    } catch (error) {
        responseHandler(res, 500, 'Error de servidor creando matrícula');
        internalErrorHandler(error);
    }
};

//Get all
export const getAllEnrollments = async (req: any, res: any): Promise<void> => {
    try {
        const enrollments = await EnrollmentModel.find();

        responseHandler(
            res,
            200,
            'Matrículas obtenidas con éxito',
            enrollments
        );
    } catch (error) {
        responseHandler(res, 500, 'Error de servidor obteniendo matrículas');
        internalErrorHandler(error);
    }
};

//Get one
export const getEnrollment = async (req: any, res: any): Promise<void> => {
    try {
        const { id } = req.params;
        const enrollment: IEnrollment | null = await EnrollmentModel.findById(
            id
        );

        responseHandler(res, 200, 'Matrícula obtenida con éxito', enrollment);
    } catch (error) {
        responseHandler(res, 500, 'Error de servidor obteniendo matrícula');
        internalErrorHandler(error);
    }
};

//Delete
export const deleteEnrollment = async (req: any, res: any): Promise<void> => {
    try {
        const { id } = req.params;
        const enrollment: IEnrollment | null = await EnrollmentModel.findById(
            id
        );

        //Delete image
        if (enrollment?.paymentProof) {
            await deleteImage(enrollment.paymentProof.public_id);
        }

        await EnrollmentModel.findByIdAndDelete(id);
        responseHandler(res, 200, 'Matrícula eliminada con éxito');
    } catch (error) {
        responseHandler(res, 500, 'Error de servidor eliminando matrícula');
        internalErrorHandler(error);
    }
};
