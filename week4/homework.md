# Homework

## Homework exercises for Week #4

Last week, we provided Good Green Groceries with the functionality to fetch the list of products from a Lambda function. However, the product data is still static, and we want it in a database. 

## Part 1: Creating a DynamoDB table for products

Create a DynamDB table by modifying the SAM template file (Tip: use the [SimpleTable](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-simpletable.html) resource). Use `hyf-{your-credentials}-products` as the name. The primary key should be `Id`. 

Use the AWS CLI to populate the DynamoDB table with the products in the [JSON file](../week2/homework/webapp/src/products.json) shared in week 2. 

Modify the Lambda function to read the products from the DynamoDB table. Use the instructions provided in the [lesson plan](./lesson-plan.md).

## Part 2: Saving subscriptions

Now that we have a way of fetching the list of products, we want to also store the subscribed users in DynamoDB. 

To this end, create a DynamDB table by modifying the SAM template file again. This time around, name it  `hyf-{your-credentials}-subscriptions`. The partition key should be `email` and this time around we also have a range key, `Created-on`. You will have to use the [DynamoDb Table](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-keyschema) resource due to the more complex schema.

Extend your template to support two routes for the API Gateway:
- the previous route for fetching available products. If you named it something different, rename it to `GET /products` and update your code accordingly
- a new route `POST /subscription` for creating new subscriptions. This route should accept the following payload:
```
POST /subscription

{
    productID: integer,
    email: string,
    createdOn: string
}
```

Implement functionality for inserting, either in a new Lambda function or the same Lambda function (see the [lesson plan](./lesson-plan.md) again for differences). 

Deploy your API with SAM under a new cloudformation stack called: `hyf-{your-credentials}-week4-api`.

## Part 3: Tying it all together

Integrate the new API into your own good-green-groceries S3-hosted website. 

Then verify that the products are being displayed correctly in the frontend.

Write down your website url into `assignments.md`.