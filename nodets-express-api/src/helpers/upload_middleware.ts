
import config from '../config';
import uploader from './uploader';
import { HttpRequest, HttpResponse } from './http';

function fileUploadMiddleware(fieldName?: string, fileFormName = 'file') {
    return function (req: HttpRequest, res: HttpResponse, next) {
        let uploadField = fieldName || req.params.fieldname;
        const uploadSettings = config.upload[uploadField];
        if (!uploadSettings) {
            return res.badRequest(`No upload settings found for ${uploadField}`);
        }
        uploader.upload(uploadField, fileFormName)(req, res, () => {
            return next();
        });
    }
}

function s3UploadMiddleware(fieldName?: string, fileFormName = 'file') {
    return function (req: HttpRequest, res: HttpResponse, next) {
        let uploadField = fieldName || req.params.fieldname;
        const uploadSettings = config.upload[uploadField];
        if (!uploadSettings) {
            return res.badRequest(`No upload settings found for ${uploadField}`);
        }
        uploader.s3upload(uploadField, fileFormName)(req, res, () => {
            return next();
        });
    }
}

export { fileUploadMiddleware, s3UploadMiddleware };