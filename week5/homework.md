# Homework

## Part 1: counting impressions

We finally have everything we need to answer the ask from [week 3](../week3/homework.md)! To refresh your memory, Green Good Groceries wanted to find out how much traffic their newly launched website was receiving. 

To this purpose, we enabled S3 Server Access logging at that point, but we did not design a way to extract the metrics out of the logs. 

But with you newly obtained knowledge, this is now possible. 

1. Create a DynamoDB table to store the visitor counts per day, with a suitable hash and range key.

2. Create a lambda function which reacts to files being dropped in the Server access logging bucket and does the following:
- filters out non-get requests from the trigger file
- counts filtered requests in the file
- adds to DynamoDB table count 
- deletes the original file once the DynamoDB table was updated succesfully

3. Access your website across two days to generate log files in the S3 bucket and ultimately populate the DynamoDB table

Take a screenshot of the populated DynamoDB table. Post it in the [assignment file](homework/assignments.md).

## Part 2:

Implement the same flow using Step Functions. 

TIP: You can use multiple lambda functions for the actions mentioned above, but for some actions you might also be able to use the [Step Function API support](https://aws.amazon.com/blogs/aws/now-aws-step-functions-supports-200-aws-services-to-enable-easier-workflow-automation/). 

Take a screenshot of the final step function in the AWS console, with a succesful run. Post it in the [assignment file](homework/assignments.md).