import { Router } from 'express';
import multer from 'multer';
import { adaptRoute } from '../adapter/express/adapter';
import multerConfig from '../config/upload';
import { makeUploadController } from '../factories/upload/UploadFactory';

const router = Router();
const uploads = multer(multerConfig);

router.post(
    '/upload',
    uploads.single('file'),
    adaptRoute(makeUploadController()),
);

export default router;
