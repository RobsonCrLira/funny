import fs from 'fs';
import path from 'path';
import upload from '../../../../config/upload';

import { IStorageProvider, StorageProviderDTO } from '../IStorage';

class LocalStorageProvider implements IStorageProvider {
    async save({ file, filename, folder }: StorageProviderDTO) {
        await fs.promises.rename(
            path.resolve(upload.tmpFolder, file),
            path.resolve(upload.uploadsFolder, file),
        );

        return file;
    }

    async delete({ file, filename, folder }: StorageProviderDTO) {
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
