import { Router } from 'express';
import multer from 'multer';
import { adaptRoute } from './adapter';
import { makeReadController } from './controller/factory';
import diskUpload from './diskUpload';

const router = Router();
const uploads = multer(diskUpload);
router.post('/', uploads.single('file'), adaptRoute(makeReadController()));

export default router;
