//import tools
import { FormationModel, IFormation } from '@/models/FormationModel';
import { responseHandler } from '@/utils/responseHandler';
import { internalErrorHandler } from '@/utils/internalErrorHandler';
import { uploadFormationImage, deleteImage } from '@/utils/cloudinary';

//Create
export const createFormation = async (req: any, res: any): Promise<void> => {
    try {
        const { name, description, brief, price, video, paypalButton } =
            req.body;

        //Upload image
        const uploadedImage = await uploadFormationImage(req.file.path);

        //Create formation
        const formation = new FormationModel({
            name,
            description,
            brief,
            price,
            cover: {
                secure_url: uploadedImage.secure_url,
                public_id: uploadedImage.public_id,
            },
            video,
            paypalButton,
        });

        await formation.save();

        responseHandler(res, 200, 'Formación creada con éxito', formation);
    } catch (error) {
        responseHandler(res, 500, 'Error de servidor creando formación');
        internalErrorHandler(error);
    }
};

//Get all
export const getAllFormations = async (req: any, res: any): Promise<void> => {
    try {
        const formations = await FormationModel.find();

        responseHandler(
            res,
            200,
            'Formaciones obtenidas con éxito',
            formations
        );
    } catch (error) {
        responseHandler(res, 500, 'Error de servidor obteniendo formaciones');
        internalErrorHandler(error);
    }
};

//Get one
export const getFormation = async (req: any, res: any): Promise<void> => {
    try {
        const { id } = req.params;
        const formation: IFormation | null = await FormationModel.findById(id);

        responseHandler(res, 200, 'Formación obtenida con éxito', formation);
    } catch (error) {
        responseHandler(res, 500, 'Error de servidor obteniendo formación');
        internalErrorHandler(error);
    }
};

//Delete
export const deleteFormation = async (req: any, res: any): Promise<void> => {
    try {
        const { id } = req.params;
        const formation: IFormation | null = await FormationModel.findById(id);

        if (!formation) {
            responseHandler(res, 404, 'Formación no encontrada');
            return;
        }

        await deleteImage(formation.cover.public_id);
        await FormationModel.findByIdAndDelete(id);

        responseHandler(res, 200, 'Formación eliminada con éxito');
    } catch (error) {
        responseHandler(res, 500, 'Error de servidor eliminando formación');
        internalErrorHandler(error);
    }
};
