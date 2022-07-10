import { Controller } from '../controller';
import { HttpRequest, HttpResponse } from '../http';
import { IReadFile } from '../interfaces/IReadfile';

export class ReadController implements Controller {
    constructor(private readonly read: IReadFile) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { file } = httpRequest;
            console.log(file);

            this.read.load2(file.path);
            return { statusCode: 200, body: 'ok' };
        } catch (error) {
            return { statusCode: 500, body: error };
        }
    }
}
