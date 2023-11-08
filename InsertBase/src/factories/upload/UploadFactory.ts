import { Controller } from '../../shared/interfaces/controller';
import { UploadController } from './UploadController';

export const makeUploadController = (): Controller => {
    return new UploadController();
};
