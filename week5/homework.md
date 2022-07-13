# Homework

## Part 1: counting impressions

We finally have everything we need to answer the ask from week 3! 

Create a Dynamo DB table to store the counts
Create a lambda function which:
- filters out non-get requests
- counts filtered requests
- adds to dynamodb table count
- deletes the original file once the dynamodb table was updated succesfully

## Part 2:

Implement the same flow using Step Functions.

How can you leverage the Step Function API support? 