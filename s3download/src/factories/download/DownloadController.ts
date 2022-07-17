import { Controller } from '../../shared/interfaces/controller';
import { HttpRequest, HttpResponse } from '../../shared/interfaces/http';
import { IStorageProvider } from '../../shared/protocols/Storage/IStorage';

export class DownloadController implements Controller {
    constructor(private readonly storage: IStorageProvider) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const files3 = await this.storage.download('user30.xlsx', 'teste');

            return { statusCode: 200, body: files3 };
        } catch (error) {
            return { statusCode: 500, body: error };
        }
    }
}
