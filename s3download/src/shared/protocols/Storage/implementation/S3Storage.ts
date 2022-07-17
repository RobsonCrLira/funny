import { S3 } from 'aws-sdk';
import fs from 'fs';
import aws from '../../../../config/aws';
import { IStorageProvider } from '../IStorage';

class S3StorageProvider implements IStorageProvider {
    private client: S3;

    constructor() {
        this.client = new S3({
            apiVersion: aws.apiVersion,
            region: aws.region,
            accessKeyId: aws.accessKeyId,
            secretAccessKey: aws.secretAccessKey,
        });
    }

    async download(file: string, folder: string) {
        const files3 = await this.client
            .getObject({
                Bucket: `${aws.bucket}/${folder}`,
                Key: file,
            })
            .promise();
        return files3.Body;
    }

    async save(
        file: string,
        filename: string,
        folder: string,
    ): Promise<string> {
        const fileContent = fs.readFileSync(file);
        const upload = {
            Bucket: `${aws.bucket}/${folder}`,
            Key: filename,
            Body: fileContent,
        };

        await this.client.upload(upload).promise();

        await fs.promises.unlink(file);

        return file;
    }

    async delete(file: string, folder: string): Promise<void> {
        await this.client
            .deleteObject({
                Bucket: `${aws.bucket}/${folder}`,
                Key: file,
            })
            .promise();
    }
}

export { S3StorageProvider };
