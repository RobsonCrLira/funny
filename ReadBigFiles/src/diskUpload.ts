import path from 'path';
import multer from 'multer';
import crypto from 'crypto';

const tmpFolder = path.resolve(__dirname, '..', 'tmp');

export default {
    tmpFolder,
    uploadsFolder: path.resolve(tmpFolder),

    storage: multer.diskStorage({
        destination: tmpFolder,
        filename(_request, file, callback) {
            const fileHash = crypto.randomBytes(10).toString('hex');
            const fileName = `${fileHash}-${file.originalname}`;

            return callback(null, fileName);
        },
    }),
};
