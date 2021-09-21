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

    const issue = JSON.parse(event.body);
    const id = v4();

    // define a new issue entry and await its creation
    let put = await dynamoClient.put({
        TableName: env.TABLE_NAME,
        Item: {
        id: id,
        title: issue.title,
        issueShortDescription: issue.shortDescription,
        issueDetails: issue.details,
        submittedBy: issue.submittedBy,
        lastUpdatedBy: issue.lastUpdatedBy,
        createdDate: issue.createdDate,
        lastUpdatedDate: issue.updatedDate,
        parentId: issue.parentId,
        upCount: issue.upCount,
        downCount: issue.downCount
        },
    }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify({...issue, id}),
    };
}