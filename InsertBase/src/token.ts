// Use this code snippet in your app.
// If you need more information about configurations or implementing the sample code, visit the AWS docs:
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started.html

import {
    GetSecretValueCommand,
    SecretsManagerClient,
} from '@aws-sdk/client-secrets-manager';

const secret_name = 'rds!cluster-7194e05c-0047-48d5-9d25-fbf982f0afa4';

const client = new SecretsManagerClient({
    region: 'us-east-2',
});

export const request = async () => {
    try {
        const response = await client.send(
            new GetSecretValueCommand({
                SecretId: secret_name,
                VersionStage: 'AWSCURRENT', // VersionStage defaults to AWSCURRENT if unspecified
            }),
        );
        return response.SecretString;
    } catch (error) {
        // For a list of exceptions thrown, see
        // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
        console.error(error);
        throw error;
    }
};

// Your code goes here
