const cdk = require('@aws-cdk/core');
const dynamodb = require('@aws-cdk/aws-dynamodb');
const lambda = require('@aws-cdk/aws-lambda');
const lambdaNode = require('@aws-cdk/aws-lambda-nodejs');
const apiGW = require('@aws-cdk/aws-apigatewayv2');
const lambdaProxyIntegration = require('@aws-cdk/aws-apigatewayv2-integrations');

//import * as iam from '@aws-cdk/aws-iam';

class CdkStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);
    
    // dynamodb...
    const table = new dynamodb.Table(this, 'dynamodb-table', {
      billingMode: dynamodb.BillingMode.PROVISIONED,
      readCapacity: 1,
      writeCapacity: 1,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      partitionKey: {name: 'id', type: dynamodb.AttributeType.STRING},
      sortKey: {name: 'createdAt', type: dynamodb.AttributeType.NUMBER},
      pointInTimeRecovery: true,
    });

    new cdk.CfnOutput(this, 'TableName', {value: table.tableName});
    new cdk.CfnOutput(this, 'TableArn', {value: table.tableArn});

    // add local secondary index
    table.addLocalSecondaryIndex({
      indexName: 'statusIndex',
      sortKey: {name: 'status', type: dynamodb.AttributeType.STRING},
      projectionType: dynamodb.ProjectionType.ALL,
    });

    // lambdas...
    const postFunction = new lambdaNode.NodejsFunction(this, 'PostFunction', {
      runtime: lambda.Runtime.NODEJS_12_X,
      // name of the exported function
      handler: 'post',
      // file to use as entry point for our Lambda function
      entry: __dirname + '/../lambda/post_issue.js',
      environment: {
        TABLE_NAME: table.tableName,
      },
    });

    // Grant full access to the data
    table.grantReadWriteData(postFunction);
    
    const getFunction = new lambdaNode.NodejsFunction(this, 'GetFunction', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'get',
      entry: __dirname + '/../lambda/get_issue.js',
      environment: {
        TABLE_NAME: table.tableName,
      },
    });

    // Grant only read access for this function
    table.grantReadData(getFunction);

    // APIGateway...
    const api = new apiGW.HttpApi(this, 'Api', {
      corsPreflight: {
        allowHeaders: ['Authorization'],
        allowMethods: [CorsHttpMethod.GET, CorsHttpMethod.HEAD, CorsHttpMethod.OPTIONS, CorsHttpMethod.POST],
        allowOrigins: ['*'],
        maxAge: Duration.days(10),
      },
    });
    new cdk.CfnOutput(this, 'ApiUrl', {value: api.url});

    api.addRoutes({
      path: '/issue',
      methods: [apiGW.HttpMethod.POST],
      integration: new lambdaProxyIntegration.LambdaProxyIntegration({handler: postFunction})
    });

    api.addRoutes({
      path: '/issue',
      methods: [apiGW.HttpMethod.GET],
      integration: new lambdaProxyIntegration.LambdaProxyIntegration({handler: getFunction})
    });

  }
}

module.exports = { CdkStack }
