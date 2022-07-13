# Week 4: Serverless APIs and Databases

## Agenda
- Introduction to API Gateways - 45 minutes
- Introduction to DynamoDB - 45 minutes
- Class assignments - 1.5 hour

## DynamoDB

We can interface with DynamoDB through the AWS SDK, in node, this looks like the following:

```
// Import required AWS SDK clients and commands for Node.js
import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./libs/ddbClient.js";

// Set the parameters
const params = {
  TableName: "TABLE_NAME",
  Item: {
    CUSTOMER_ID: { N: "001" },
    CUSTOMER_NAME: { S: "Richard Roe" },
  },
};

const run = async () => {
  try {
    const data = await ddbClient.send(new PutItemCommand(params));
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
run();
```

For more examples node DynamoDB examples, see [here](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/dynamodb-example-table-read-write.html)

## API Gateway

We have already used the API Gateway briefly in Week 3. 
SAM also has a more extensive quickstart template for API Gateways called `8 - Quick Start: Web Backend`. 

```
Resources:
  getAllItemsFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: src/handlers/get-all-items.getAllItemsHandler
      ... other properties ...
      Events:
        Api:
          Type: Api
          Properties:
            Path: /
            Method: GET
```

By looking at this, we see that the event type has been changed to an API event, which has a `path` and `method`. This specific route is then mapped to the handler `src/handlers/get-all-items.getAllItemsHandler` with the somewhat following code: 

```javascript
exports.getAllItemsHandler = async (event) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getAllItems only accept GET method, you tried: ${event.httpMethod}`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);

    var params = {
        TableName : tableName
    };
    const data = await docClient.scan(params).promise();
    const items = data.Items;

    const response = {
        statusCode: 200,
        body: JSON.stringify(items)
    };

    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
```

Comparing this to the example from week 3, we see that there are a couple of ways to add additional routes to an API Gateway:

One way is to add additional functions in the cloudformation template, and then add additional handlers. 

This will then create a function for every route. Also, note that multiple API events can get mapped to the same function, i.e

```
Resources:
  getAllItemsFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: src/handlers/get-all-items.getAllItemsHandler
      ... other properties ...
      Events:
        Api:
          Type: Api
          Properties:
            Path: /
            Method: GET
        Api:
          Type: Api
          Properties:
            Path: /items
            Method: GET
        ...
```

Another way is to have only one function handling all the routes, like we have seen in the week 4 example above.

### Development
In order to develop API's with sam, we need to start up a server locally and then execute API requests towards it. 

Luckily, sam allows us to do this with the command `sam local start-api` (docs can be found ([here](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-local-start-api.html))