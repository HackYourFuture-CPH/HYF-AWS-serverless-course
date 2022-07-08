# Homework

## How-to submit homework for verification

Fork this repository on your own GitHub profile with the name ``masterclass-hyf-HYF-homework``

Create a PR to add your homework to the respective week folder like you are used to do in the web development course, and if you don't remember how to do hand in homework using Pull Requests, please check here https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript1/week1/homework.md

## Setting up the AWS Cloud9 IDE

Take a few minutes now and setup your Cloud9 development environment. Cloud9 works best with Chrome or Firefox, not Safari. It cannot be used from a tablet.

1. Go to the AWS Management Console, Select Services then select [Cloud9](https://us-east-1.console.aws.amazon.com/cloud9/home) under Developer Tools. From the top-right of the Console, select an available region for this masterclass. Once you have selected a region for Cloud9, use the same region for the entirety of this masterclass.

2. Select Create environment.

3. Enter `hyf-development` into Name and optionally provide a Description.

4. Select Next step.

5. For Instance type, choose t3.small. Keep the defaults in the other sections. Select Next step.

6. Review the environment settings and select Create environment. It will take a few minutes for your Cloud9 environment to be provisioned and prepared.

7. Once ready, your IDE will open to a welcome screen. Below that, you should see a terminal prompt. Close the Welcome tab and drag up the terminal window to give yourself more space to work in.

![](images/0-setup-cloud9.png)

## Some thoughts on interacting with your AWS account

There are three main ways to interact with your AWS account:
- visually through the AWS console
- programatically through the AWS CLI
- write infrastructure as code using CloudFormation templates or higher level IaC languages that compile to CloudFormation such as the various AWS CDKs, Terraform, etc. 

The AWS CLI comes preinstalled with Cloud9. You can run AWS CLI commands in here just like you would on your local computer. Remember for this assignment to run all commands within the Cloud9 terminal window instead of your local computer.

Keep your AWS Cloud9 IDE opened in a browser tab throughout this assignment.

## Assignment 1

Verify that your user is logged in by running the command `aws sts get-caller-identity`. Copy and paste the command into the Cloud9 terminal window.

```
aws sts get-caller-identity
```

You’ll see output indicating your account and user information similar to the below:
```
{
    "Account": "123456789012",
    "UserId": "AKIAI44QH8DHBEXAMPLE",
    "Arn": "arn:aws:iam::123456789012:user/Ana"
}
```

Search the Internet for what is the ARN and what it is used for. Input your response in the [assignment file](homework/assignments.md). 


## Assignment 2

Check the current AWS Region to make sure you are running the workshop in a supported Region.

Run these commands in the Cloud9 terminal window:

```
AWS_REGION=$(curl -s http://169.254.169.254/latest/meta-data/placement/availability-zone | sed 's/\(.*\)[a-z]/\1/')
SUPPORTED_REGIONS=("us-west-2" "us-east-1" "us-east-2" "eu-central-1" "eu-west-1" "ap-southeast-2" )
if [[ ! " ${SUPPORTED_REGIONS[@]} " =~ " ${AWS_REGION} " ]]; then
    /bin/echo -e "\e[1;31m'$AWS_REGION' is not a supported AWS Region, delete this Cloud9 instance and restart the workshop in a supported AWS Region.\e[0m"
else
    /bin/echo -e "\e[1;32m'$AWS_REGION' is a supported AWS Region\e[0m"
fi
```

 Input your response in the [assignment file](homework/assignments.md). 

## Assignment 3 : three shades of creating an S3 bucket

We are going to learn more about S3 buckets in Week 2, but for now think of them as the simplest way to store something in AWS. 

### Create a bucket from the AWS console

1. In the AWS console, navigate to S3. 
2. Click Create bucket
3. Provide a name for the bucket in the format `hyf-week1-console-<RANDOM_STRING>`. A RANDOM_STRING is necessary because bucket names need to be unique across the whole of AWS.
4. Use the same region as for your Cloud9 environment
5. Leave all other options untouched and click Create bucket

### Create a bucket using the AWS CLI

Use the command below to create an S3 bucket using the AWS CLI:

```
aws s3 create-bucket --bucket hyf-week1-cli-<RANDOM_STRING>
```

Where you replace RANDOM_STRING with a random string. 

### Create a bucket using CloudFormation

1. Navigate to CloudFormation. 
2. Click Create Stack > With new resources (standard)
3. Select Template is ready in the Prerequisite - Prepare template section
4. Select Upload a template file in the Specify template section.
5. Upload the `template.yaml` file provided in the homework folder
6. Click next.
7. Provide a unique name to your stack.
8. Click next. 

Use the `aws s3 ls` command in the Cloud 9 terminal to list S3 buckets. 

Paste the response of the command in the [assignment file](homework/assignments.md).

### Upload and make a file public

1. Run the command in the Cloud9 terminal:

```
touch hello-world.txt
```

2. Use the AWS CLI to upload the file to the S3 bucket created through CloudFormation. Consult the CLI documentation to figure this one out.

Paste the command you used in the [assignment file](homework/assignments.md).

3. By default files in a bucket are private. We can use the presign command to create temporary URLs for exposing files in a private bucket. Create a presigned url which is available for 1 hour for the file you created above and try accessing it. 

Paste the command you used in the [assignment file](homework/assignments.md).

### Cleaning up
1. Delete the first bucket you created using the AWS console, with the AWS console.
2. Delete the second bucket you created using the aws-cli, with the aws-cli. 

Paste the command you used in the [assignment file](homework/assignments.md).

3. Delete the third bucket you created using the CloudFormation stack, from the CloudFormation interface. 

Did you have to do anything extra in order to delete this bucket?

Paste your answer in the [assignment file](homework/assignments.md).

## Recap
- Use a unique AWS provided, personal or development AWS account.
- Use the same region you selected when deploying AWS Cloud9 IDE for the entirety of this masterclass.
- Keep your AWS Cloud9 IDE opened in a tab.
- You can suspend the Cloud9 account when it is idle.
- You can interact with the AWS environment from the console in the browser, using the AWS CLI or by creating infrastructure as code.

## Assignment 4 (Optional)

Try creating a bucket using the CloudFormation template, but with the AWS CLI. Use the CLI documentation to figure it out.

Paste your answer in the [assignment file](homework/assignments.md).
