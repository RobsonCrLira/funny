import fs from 'fs';
import path from 'path';
import upload from '../../../../config/upload';

import { IStorageProvider } from '../IStorage';

class LocalStorageProvider implements IStorageProvider {
    async download(file: string): Promise<any> {
        return new Error('Method not implemented.');
    }

    async save(file: string) {
        await fs.promises.rename(
            path.resolve(upload.tmpFolder, file),
            path.resolve(upload.uploadsFolder, file),
        );

        return file;
    }

    async delete(file: any) {
        const filePath = path.resolve(upload.uploadsFolder, file);
        try {
            await fs.promises.stat(filePath);
        } catch (error) {
            return;
        }
        await fs.promises.unlink(filePath);
    }
}

export { LocalStorageProvider };
