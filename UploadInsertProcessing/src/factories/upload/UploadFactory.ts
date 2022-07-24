import { Controller } from '../../shared/interfaces/controller';
import { S3StorageProvider } from '../../shared/protocols/Storage/implementation/S3Storage';
import { UploadController } from './UploadController';

export const makeUploadController = (): Controller => {
    const s3StorageProvider = new S3StorageProvider();
    return new UploadController(s3StorageProvider);
};
