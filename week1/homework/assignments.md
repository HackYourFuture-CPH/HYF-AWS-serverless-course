## Mandatory assignments

**Assignment 1:**

What is an ARN: `?`
-->Amazon Resource Names (ARNs) uniquely identify AWS resources. We require an ARN when you need to specify a resource unambiguously across all of AWS, such as in IAM policies, Amazon Relational Database Service (Amazon RDS) tags, and API calls.
**Assignment 2:**

Response from the command: `?`

**Assignment 3:**

Command to upload file with the AWS CLI: `?`
-->$ aws s3 cp large_test_file s3://DOC-EXAMPLE-BUCKET/
Command to create a presigned URL: `?`
-->aws s3 presign s3://DOC-EXAMPLE-BUCKET/test2.txt
Command to delete your bucket with the AWS CLI: `?`
-->$ aws s3 rb s3://bucket-name --force
Can you simply delete a CloudFormation bucket? : `?`
--> You can create a lambda function to clean up your bucket and invoke your lambda from your CloudFormation stack using a CustomResource
**Assignment 4 (Optional):**

Command to deploy your CloudFormation template using the AWS CLI: `?`
Command to deploy your CloudFormation template using the AWS CLI: `?`
aws cloudformation deploy --template-file /path_to_template/template.json --stack-name my-new-stack --parameter-overrides Key1=Value1 Key2=Value2 --tags Key1=Value1 Key2=Value2

---------
Those attributes are options: 
--template-file <value>
--stack-name <value>
[--s3-bucket <value>]
[--force-upload]
[--s3-prefix <value>]
[--kms-key-id <value>]
[--parameter-overrides <value> [<value>...]]
[--capabilities <value> [<value>...]]