import { Controller } from '../../shared/interfaces/controller';
import { HttpRequest, HttpResponse } from '../../shared/interfaces/http';
import { IStorageProvider } from '../../shared/protocols/Storage/IStorage';

export class UploadController implements Controller {
    constructor(private readonly storage: IStorageProvider) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { file } = httpRequest;
            await this.storage.save(file.path, file.originalname, 'teste');
            return { statusCode: 200, body: file };
        } catch (error) {
            return { statusCode: 500, body: error };
        }
    }
}
