//Import tools
import { HealthModel, IHealth } from '@/models/HealthModel';
import { responseHandler } from '@/utils/responseHandler';
import { internalErrorHandler } from '@/utils/internalErrorHandler';
import { calculateHealth } from '@/utils/calculateHealth';

//Create
export const createHealth = async (req: any, res: any): Promise<void> => {
    try {
        const {
            uid,
            publicationVariety,
            useAds,
            useStrategy,
            useAutomation,
            helpUsers,
            helpEmployees,
            helpSEO,
            helpAds,
            customesIdentifaicated,
            customerBuyChannels,
            customerStrategies,
        } = req.body;

        //calculate marketing health
        const health = calculateHealth(
            publicationVariety,
            useAds,
            useStrategy,
            useAutomation,
            helpUsers,
            helpEmployees,
            helpSEO,
            helpAds,
            customesIdentifaicated,
            customerBuyChannels,
            customerStrategies
        );

        //Create health
        const finalHealth = new HealthModel({
            uid,
            socialHealth: {
                publicationVariety,
                useAds,
                useStrategy,
                useAutomation,
                socialConclusions: health.socialConclusions,
            },
            websiteHealth: {
                helpUsers,
                helpEmployees,
                helpSEO,
                helpAds,
                websiteConclusions: health.websiteConclusions,
            },
            realCustomerHealth: {
                customesIdentifaicated,
                customerBuyChannels,
                customerStrategies,
                customerConclusions: health.customerConclusions,
            },
            automaticResponse: health.automaticResponse,
        });

        //Save health
        await finalHealth.save();

        return responseHandler(201, res, 'Salud de marca calculada con éxito');
    } catch (error) {
        responseHandler(500, res, 'Error de servidor calculando salud');
        return internalErrorHandler(error);
    }
};

//Get Healt by User
export const getHealth = async (req: any, res: any): Promise<void> => {
    try {
        const { uid } = req.params;
        const health: IHealth | null = await HealthModel.findOne({ uid });

        return responseHandler(
            200,
            res,
            'Salud de marca obtenida con éxito',
            health
        );
    } catch (error) {
        responseHandler(500, res, 'Error de servidor obteniendo salud');
        return internalErrorHandler(error);
    }
};

//Delete Health
export const deleteHealth = async (req: any, res: any): Promise<void> => {
    try {
        const { uid } = req.params;
        await HealthModel.findOneAndDelete({ uid });

        return responseHandler(200, res, 'Salud de marca eliminada con éxito');
    } catch (error) {
        responseHandler(500, res, 'Error de servidor eliminando salud');
        return internalErrorHandler(error);
    }
};
