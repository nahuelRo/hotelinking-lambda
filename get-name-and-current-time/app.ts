import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { generateHtmlResponse } from './helpers';

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const { queryStringParameters } = event;
    const name = queryStringParameters?.name || 'Invitado';
    const htmlResponse = generateHtmlResponse(name);

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html',
        },
        body: htmlResponse,
    };
};
