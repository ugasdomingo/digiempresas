import { validationResult } from "express-validator";
import { client_response } from "../utils/responses.js";

export const error_data_validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return client_response(res, 400, errors.array()[0].msg);
    }
    next();
}