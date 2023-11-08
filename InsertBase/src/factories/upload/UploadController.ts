import type { LocaleDefinition } from '@faker-js/faker';
import { Faker, base, faker, pt_BR } from '@faker-js/faker';
import { Controller } from '../../shared/interfaces/controller';
import { HttpRequest, HttpResponse } from '../../shared/interfaces/http';

const customLocale: LocaleDefinition = {
    faker: {
        name: {
            firstName: ['{{name.firstName}}'],
            lastName: ['{{name.lastName}}'],
            fullName: ['{{name.firstName}} {{name.lastName}}'],
        },
    },
};

export const customFaker = new Faker({
    locale: [customLocale, pt_BR, base],
});
export class UploadController implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const users = [];
            const maxUsers = 1000;
            for (let index = 0; index < maxUsers; index++) {
                const name = faker.person.fullName();
                const email = `${name
                    .replace(/\s/g, '')
                    .replace(/[^a-zA-Z0-9]/g, '')}.${faker.internet.email()}`;
                const password = faker.internet.password();
                const insert = `INSERT INTO user (name, email, password) VALUES ('${name}', '${email}', '${password}');`;
                users.push(insert);
            }
            return { statusCode: 200, body: users };
        } catch (error) {
            return { statusCode: 500, body: error };
        }
    }
}
