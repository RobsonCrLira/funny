import { Router } from 'express';
import { adaptRoute } from '../adapter/express/adapter';
import { makeUploadController } from '../factories/upload/UploadFactory';

const router = Router();

router.get('/upload', adaptRoute(makeUploadController()));

export default router;
