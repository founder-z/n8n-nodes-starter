import {
    ICredentialType,
    NodePropertyTypes,
} from 'n8n-workflow';


export class ExampleApi implements ICredentialType {
    name = 'jidocaExampleApi';
    displayName = 'Example API';
    documentationUrl = 'https://example.api/docs';
    properties = [
        {
            displayName: 'API key',
            name: 'apiKey',
            type: 'string' as NodePropertyTypes,
            default: '',
            description: 'Description of how to get the key',
        },
    ];
}

export type CredentialsData = { apiKey: string } | undefined;
