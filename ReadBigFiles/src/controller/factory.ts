import { Controller } from '../controller';
import { ReadFile } from '../usecase/readfile';
import { ReadController } from './ReadFileController';

export const makeReadController = (): Controller => {
    const readUsecase = new ReadFile();
    return new ReadController(readUsecase);
};
