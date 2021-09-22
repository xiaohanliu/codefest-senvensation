const { DynamoDB } = require('aws-sdk');
const { env } = require('process');

const dynamoClient = new DynamoDB.DocumentClient();

export async function put(event) {

    console.log(event);

    // If we do not receive a body, we cannot continue...
    if (!event.body) {
        // ...so we return a Bad Request response
        return {
            statusCode: 400,
        };
    }

    let issue = JSON.parse(event.body);
    let now = new Date();

    console.log(`now ${now.toISOString()}`);
    console.log(`issue ${JSON.stringify(issue)}`);

    let params = {
        TableName: env.TABLE_NAME,
        Key: {id: issue.id},
        UpdateExpression: "set title = :ttl, description = :desc, updatedDate = :updt, upCount = :uc, downCount = :dc, tags = :tags",
        ExpressionAttributeValues: {
            ":ttl": issue.title,
            ":desc": issue.description,
            ":updt": now.toISOString(),
            ":uc": issue.upCount,
            ":dc": issue.downCount,
            ":tags": issue.tags
        },
        ReturnValues: "UPDATED_NEW"
    };

    console.log("Updating the issue... ");

    const result = await dynamoClient.update(params).promise();

    console.log(`results: ${JSON.stringify(result)}`);

    issue.updatedDate = now.toISOString();

    return {
        statusCode: 200,
        body: JSON.stringify(issue),
    };
}