import { Controller } from '../../shared/interfaces/controller';
import { S3StorageProvider } from '../../shared/protocols/Storage/implementation/S3Storage';
import { DownloadController } from './DownloadController';

export const makeDownloadController = (): Controller => {
    const s3StorageProvider = new S3StorageProvider();
    return new DownloadController(s3StorageProvider);
};
