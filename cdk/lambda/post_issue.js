const { DynamoDB } = require('aws-sdk');
const { env } = require('process');
const { v4 } = require('uuid');

const dynamoClient = new DynamoDB.DocumentClient();

export async function post(event) {

    console.log(event);

    // If we do not receive a body, we cannot continue...
    if (!event.body) {
        // ...so we return a Bad Request response
        return {
            statusCode: 400,
        };
    }

    let issue = JSON.parse(event.body);
    let id = v4();
    let now = new Date();

    // define a new issue entry and await its creation
    let put = await dynamoClient.put({
        TableName: env.TABLE_NAME,
        Item: {
            id: id,
            title: issue.title,
            description: issue.description,
            author: issue.author,
            createdDate: now.toISOString(),
            updatedDate: now.toISOString(),
            upCount: issue.upCount,
            downCount: issue.downCount,
            tags: issue.tags,
            parentId: issue.parentId
        },
    }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify({...issue, id}),
    };
}