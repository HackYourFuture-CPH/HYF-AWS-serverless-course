## Mandatory assignments

**Assignment 1:**
{
    "Account": "803311731370", 
    "UserId": "803311731370", 
    "Arn": "arn:aws:iam::803311731370:root"
}

What is an ARN: `?`
Amazon Resource Names (ARNs) uniquely identify AWS resources. We require an ARN when you need 
to specify a resource unambiguously across all of AWS, such as in IAM policies, 
Amazon Relational Database Service (Amazon RDS) tags, and API calls.

**Assignment 2:**

Response from the command: `?`
'us-east-1' is a supported AWS Region

**Assignment 3:**
2022-09-10 23:29:47 cf-templates-1ssdvpdklg6jv-us-east-1
2022-09-10 23:31:49 hyf-week1-cf-cloudformationbucket
2022-09-10 23:25:59 hyf-week1-cli-clibucket
2022-09-10 23:24:59 hyf-week1-console-sdjklweisla

Command to upload file with the AWS CLI: `?`
$ aws s3 cp <File Name/Path><Bucket Name/Path>
Example
 $ aws s3 cp hello-world.txt s3://hyf-week1-cf-cloudformationbucket
Output
upload: ./hello-world.txt to s3://hyf-week1-cf-cloudformationbucket/hello-world.txt

Command to create a presigned URL: `?`
$ aws s3 presign --expires-in <Time in Seconds> <Bucket Name/Path>
Example:
$ aws s3 presign --expires-in 30 s3://hyf-week1-cli-clibucket/hello-world.txt

Command to delete your bucket with the AWS CLI: `?`
Before deleting Bucket we have to delet object in bucket
Example
$ aws s3 rm s3://hyf-week1-cli-clibucket/hello-world.txt
output :delete: s3://hyf-week1-cli-clibucket/hello-world.txt     (It will delete hello-world.txt)
aws s3 rb <target> [--options]
Example
$ aws s3 rb s3://hyf-week1-cli-clibucket
Output
remove_bucket: hyf-week1-cli-clibucket
By default, the bucket must be empty for the operation to succeed. 
To remove a bucket that's not empty, you need to include the --force option.
aws s3 rb s3://mybucket --force

Can you simply delete a CloudFormation bucket? : `?`
We have file "hello-world.txt" in this Cloudformation bucket.
If we simply try to delete bucket ,we will get this error
"This bucket is not empty
Buckets must be empty before they can be deleted. To delete all objects in the bucket, use the empty bucket configuration. "
Now we will go to "empty bucket configration" and empty it.After this we can delete the bucket.

**Assignment 4 (Optional):**

Command to deploy your CloudFormation template using the AWS CLI: `?`

Following command deploys template named template.json to a stack named my-new-stack:

aws cloudformation deploy --template-file /path_to_template/template.json --stack-name my-new-stack --parameter-overrides Key1=Value1 Key2=Value2 --tags Key1=Value1 Key2=Val