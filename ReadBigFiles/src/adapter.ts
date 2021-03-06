import { Request, Response } from 'express';
import { Controller } from './controller';
import { HttpRequest } from './http';

export const adaptRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            body: req.body,
            file: req.file,
        };
        const httpResponse = await controller.handle(httpRequest);
        if (httpResponse.statusCode === 200) {
            res.status(httpResponse.statusCode).json(httpResponse.body);
        } else {
            res.status(httpResponse.statusCode).json({
                error: httpResponse.body.message,
            });
        }
    };
};
