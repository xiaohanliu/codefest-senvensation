const { DynamoDB } = require('aws-sdk');

const dynamoClient = new DynamoDB.DocumentClient();

export async function get(event) {

    console.log(event);
  
    // Get a list of all issues from the DB, extract the method to do paging
    const issues = await getIssuesFromDatabase();
  
    // Return the list as JSON objects
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      // Body needs to be string so render the JSON to string
      body: JSON.stringify(issues),
    };
  }
  
  // Helper method to fetch all tasks
  async function getIssuesFromDatabase() {
    // This variable will hold our paging key
    let startKey;
    // start with an empty list of tasks
    let result = [];
  
    // start a fetch loop
    do {
      // Scan the table for all tasks
      const result = await dynamoClient.scan({
        TableName: env.TABLE_NAME,
        // Start with the given paging key
        ExclusiveStartKey: startKey,
      }).promise();

      // If we got tasks, store them into our list
      if (res.Items) {
        result.push(...res.Items);
      }
      // Keep the new paging token if there is one and repeat when necessary
      startKey = res.LastEvaluatedKey;
    } while (startKey);

    // return the accumulated list of tasks
    return result;
  }