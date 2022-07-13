# Homework

## Homework exercises for Week #3

### Assignment 1 : It is all in the numbers

Green Good Groceries is happy with the statically hosted website so far, but they would like to find out how much traffic their newly launched website is receiving. 

[Enable Server Access Logging](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerLogs.html) on your public S3 bucket hosting the website. Then hit the public URL of the website.

1. Paste a 3-line sample from the S3 access logs in the [assignment file](homework/assignments.md).

2. Inspect the S3 logs. Write your ideas on how you would calculate the total amount of impressions for the website based on the information in the logs. Add this information to the [assignment file](homework/assignments.md). 

### Assignment 2 : First steps towards an API

Green Good Groceries likes the website, but would really want to move away from a list of products hosted in a [json file](../week2/homework/webapp/src/products.json) on the S3 bucket.

 They asked you as a first step to create a lambda function that returns the content of the JSON file. 

 1. Use your knowledge from this week's [lesson plan](./lesson-plan.md) to create the requested Lambda function. 

 Paste the URL of the public API in the [assignment file](homework/assignments.md).

 2. Integrate the Lambda function into your statically hosted website. (Tip: check out the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)). 
 
 Redeploy the website and paste the URL of the website in the [assignment file](homework/assignments.md).

 3. The API Gateway is currently not showing up in the X-Ray traces. Enable tracing for the API Gateway (HINT: follow the [docs](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-enabling-xray.html#apigateway-xray-console-setup)).

Take a screenshot of the updated service map and post it in the [assignment file](homework/assignments.md).

4. Which service has the highest latency? Write your response in the [assignment file](homework/assignments.md).

### Optional assignment: best practices

The Lambda function we have written makes use of the `aws-xray-sdk-core` package in order to integrate with Amazon X-Ray. Currently this package is uploaded together with the Lambda code, but ideally we would want to share this package across all of our future functions. 

We can achieve this using [Lambda layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html). Lambda layers provide a convenient way to package libraries and other dependencies that you can use with your Lambda functions. Using layers also reduces the size of uploaded deployment archives and makes it faster to deploy your code. 

Refactor your backend code to support lambda layers (TIP: follow this [blog post](https://aws.amazon.com/blogs/compute/working-with-aws-lambda-and-lambda-layers-in-aws-sam/) if you are stuck) and redeploy your backend using SAM.

1. Take a screenshot of the layer in the AWS console, clearly showing the ARN. Post it in the [assignment file](homework/assignments.md).

2. Take a screenshot of the lambda function, clearly showing that it is now using the created layer. Post it in the [assignment file](homework/assignments.md).