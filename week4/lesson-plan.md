# Week 4: Serverless APIs and Databases

## Agenda
- Introduction to DynamoDB - 45 minutes 
- Introduction to API Gateways - 45 minutes
- Class assignments - 1.5 hour

## DynamoDB

We can interface with DynamoDB through the AWS SDK, and in JS, this looks like the following:

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

How would we create a DynamoDB table using SAM?

Enter `SimpleTable`.

In the `template.yaml` file, right at the end, you would see a code block like so:

```
SampleTable:
    Type: AWS::Serverless::SimpleTable
    Properties:
      PrimaryKey:
        Name: id
        Type: String
      ProvisionedThroughput:
        ReadCapacityUnits: 2
        WriteCapacityUnits: 2
```
We can see that this creates a DynamoDB table that has provisioned capacity and with a PrimaryKey of **id**.

Lets play with the variables a little bit and see what happens.


## API Gateway

We have already used the API Gateway briefly in Week 3. 

To quickly create a "boilerplate" application, use:

```
sam init
```
and follow the quickstart template and for this lesson, SAM has a more extensive quickstart template for API Gateways called Web Backend, or API Backend - depending on the version of SAM CLI you have installed.

The below is how you'd define, in code, the parameters for the API

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

Using the `template.yaml` file, it is trivial to create a REST API on API Gateway and going through line by line, we can see that the event type has been changed to an API event, which has a `path` and `method`. This specific route is then mapped to the handler `src/handlers/get-all-items.getAllItemsHandler` with the somewhat following code: 

```javascript
exports.getAllItemsHandler = async (event) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getAllItems only accepts GET method, you tried: ${event.httpMethod}`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);

    var params = {
        TableName : tableName
    };
    const data = await docClient.scan(params).promise(); 
    //the "scan" method pulls all records 
    //from the DynamoDB table.
    
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

One way is to add additional functions in the template, and then add additional handlers. 

This will then create a function for every route. 

Alternatively, multiple API events can get mapped to the same function, like below, where both the / and /items routes are handled by the same Lambda Function.

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

Similarly, lets experiment to see if we can create multiple HTTP methods using the same function, eg `POST` or `PUT`.


### Development
In order to develop API's with SAM, we need to start up a server locally and then execute API requests towards it. 

Luckily, SAM allows us to do this with the command `sam local start-api` (docs can be found ([here](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-local-start-api.html))).

This command creates a local copy of the API and Lambda to help you quickly see the effect of changes you make to your code without having to upload it into AWS.

Lets see how this works.