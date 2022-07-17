import { Router } from 'express';
import multer from 'multer';
import { adaptRoute } from './adapter';
import multerConfig from './config/upload';
import { makeDownloadController } from './factories/download/DownloadFactory';
import { makeUploadController } from './factories/upload/UploadFactory';

const router = Router();
const uploads = multer(multerConfig);
router.post(
    '/upload',
    uploads.single('file'),
    adaptRoute(makeUploadController()),
);

router.get('/download', adaptRoute(makeDownloadController()));
export default router;
