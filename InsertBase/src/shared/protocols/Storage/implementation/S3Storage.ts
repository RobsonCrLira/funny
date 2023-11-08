import { S3 } from 'aws-sdk';
import fs from 'fs';
import aws from '../../../../config/aws';
import { IStorageProvider, StorageProviderDTO } from '../IStorage';

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

    async save({
        file,
        filename,
        folder,
    }: StorageProviderDTO): Promise<string> {
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

    async delete({
        file,
        filename,
        folder,
    }: StorageProviderDTO): Promise<void> {
        await this.client
            .deleteObject({
                Bucket: `${aws.bucket}/${folder}`,
                Key: file,
            })
            .promise();
    }
}

export { S3StorageProvider };
