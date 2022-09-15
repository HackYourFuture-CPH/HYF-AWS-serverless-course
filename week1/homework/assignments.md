## Mandatory assignments

**Assignment 1:**

What is an ARN: `An Amazon Resource Name is a file naming convention used to identify a particular resource in the Amazon Web Services (AWS) public cloud. ARNs, which are specific to AWS, help an administrator track and use AWS items and policies across AWS products and API calls.`

**Assignment 2:**

Response from the command: `'us-east-1' is a supported AWS Region`

**Assignment 3:**

`2022-09-08 14:29:07 cf-templates-1qfpqw94dlkqy-us-east-1
2022-09-08 14:18:13 hyf-week1-cli-sm
2022-09-08 14:05:34 hyf-week1-console-sm`

Command to upload file with the AWS CLI: `aws s3 cp ./hello-world.txt s3://hyf-week1-console-sm/`

Command to create a presigned URL: `aws s3 presign s3://hyf-week1-console-sm/hello-world.txt`

Command to delete your bucket with the AWS CLI: `aws s3 rb s3://cf-templates-1qfpqw94dlkqy-us-east-1 --force    I used force as the bucket was not empty.`
`aws s3 rb s3://hyf-week1-cli-sm`

Can you simply delete a CloudFormation bucket? : `No, I can't, as it's not empty, the hello-world.txt file was in it and I got this error:
remove_bucket failed: s3://hyf-week1-console-sm An error occurred (BucketNotEmpty) when calling the DeleteBucket operation: The bucket you tried to delete is not empty 
If I want to delete it first I should delete its content or I also find using --force to the end of the command to delete everything in the bucket and then the bucket itself, as I did for the first bucket.`

**Assignment 4 (Optional):**

Command to deploy your CloudFormation template using the AWS CLI: `
touch template.yaml
Then I copied the content of teplate.yaml into this file 

aws cloudformation deploy --template-file /home/ec2-user/environment/template.yaml --stack-name my-new-stack --parameter-overrides ParameterKey1=ParameterValue1 ParameterKey2=ParameterValue2 --tags Key1=Value1 Key2=Value2
`