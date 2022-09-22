## Mandatory assignments

**Assignment 1:**

What is an ARN: `?`
ARN is abbreviation for Amazon Resource Name. It is a unique identifier of AWS resources. It has the following format:
 "Arn": "arn:aws:iam::744286628539:root" which consists of 
 - partition: aws-- region where resource is located
 - service : iam -- the product
 - account id : 744286628539


**Assignment 2:**
Response from the command: `?`
'us-east-1' is a supported AWS Region

**Assignment 3:**
2022-09-21 19:43:48 cf-templates-676h8zoiz0jd-us-east-1
2022-09-21 19:41:01 hyf-week1-cli-kiran-consolebucket
2022-09-21 19:40:23 hyf-week1-console-kiran

Command to upload file with the AWS CLI: `?`
aws s3 mv hello-world.txt s3://week1-bucket

Command to create a presigned URL: `?`
aws s3 presign s3://week1-bucket/hello-world.txt 

Command to delete your bucket with the AWS CLI: `?`
aws s3 rb s3://week1-bucket --force

Can you simply delete a CloudFormation bucket? : 

aws cloudformation delete-stack --stack-name my-stack

**Assignment 4 (Optional):**
Command to deploy your CloudFormation template using the AWS CLI: `?`