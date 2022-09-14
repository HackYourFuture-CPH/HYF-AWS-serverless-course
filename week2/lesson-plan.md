# Week 2 : Storage

## Pre-requisites:

- Exercises from Week 1 
- A working Cloud9 environment in an AWS account.

## Agenda:
- Introduction to AWS storage services and static web hosting on AWS - 1.5 hours
- Class assignment - 1.5 hours

## Class assignments 

### Previewing a simple React app in the Cloud 9 environment

1. Start off by creating a simple react app with the [create-react-app](https://github.com/facebook/create-react-app) command. 

You do this by typing the following command in the Cloud9 environment:

```
npx create-react-app my-app
```

2. You will notice that the command is not installed in the Cloud9 environment, so before it can be executed, it will automatically be installed. 

Access the directory of the application by typing:
```
cd my-app
``` 

3. Run the command `npm start` to run your app locally in the Cloud9 environment.

You should see a confirmation message similar to the following. 
![Compiled Succesfully](images/0-cloud-9-terminal-compiled-succesfully.png)

4. Ignore the two IPs that you see in the console. If you want to preview the application, look for the preview button on the top bar of Cloud9. 

![Preview Application](images/1-cloud-9-preview-application.png)

### Hosting a simple React app publicly on S3

5. Compile the app by executing the command `npm run build`. This will create the files for the websites we need to upload to S3.

6. To upload the files, we first create a bucket by using the [create-bucket](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3api/create-bucket.html) command.

##### For the us-east-1 region
```
aws s3api create-bucket --bucket hyf-hosting-<RANDOM_ID> --region us-east-1
```
##### For any other region
```
aws s3api create-bucket --bucket hyf-hosting-<RANDOM_ID> --region <REGION-ID> --create-bucket-configuration LocationConstraint=<REGION-ID>
```

7. For static hosting, we need to have an index.html as the entry page to our website. We also need an error.html which will automatically be displayed if the the main page fails to load for some reason.  We need to create the error.html file before we can switch on the static hosting.

```
echo "error page - try again later" > build/error.html
```

8. Then we leverage the [sync command](https://docs.aws.amazon.com/cli/latest/reference/s3/sync.html), to sync our freshly build files to the bucket.

```
aws s3 sync ./build s3://hyf-hosting-<RANDOM_ID>
```

9. Finally, we enable web hosting with the [website command](https://docs.aws.amazon.com/cli/latest/reference/s3/website.html):

```
aws s3 website s3://hyf-hosting-<RANDOM_ID> --index-document index.html --error-document error.html
```

10. Navigate into the AWS Console and find your bucket. What is the url, and what is the bucket policy?

11. At this stage your website will probably generate an error message. This will be due to a permission problem. Public access to s3 buckets are blocked by default. We have to open up this access in order for the site to be viewable over the internet. You can read more about [public access](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html)


11.1 Allow **Account Level** public access to s3. Navigate to the s3 service in the AWS console, click on "Block Public Access settings for this account". Click "Edit", and then un-check "Block all Public Acccess" and save.

<img src="https://github.com/HackYourFuture-CPH/HYF-AWS-serverless-course/blob/main/week2/images/account-level-s3-public-access.png" alt="Account Level" width="800"/>

11.2 Allow **Bucket Level** public access to an #individual# s3 bucket. In the AWS console, open your hyf-hosting bucket. Click "permissions". Go to "Block public access (bucket settings)". Click "edit" and then un-check "Block all public access". Click save.

<img src="https://github.com/HackYourFuture-CPH/HYF-AWS-serverless-course/blob/main/week2/images/bucket-level-s3-public-access.png" alt="Bucket Level" width="800"/>

11.3 Finally we need to apply a **bucket policy**. In the AWS console, open your hyf-hosting bucket. Click "permissins". Scroll down to "bucket policy". Enter a policy as below. **Important** - update the line Resource line to specify your OWN bucket. 

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::hyf-hosting-3ofi3fiug3/"
        }
    ]
}

```
12. Now try to access your website again. 

13. Make a change to your website and reflect the changes to your bucket with the `sync` command.

14. Find someone in class and ask them to visit and verify that your website works.

15. Try to expand your website using the information from the react 

### Cleanup

Delete the bucket once you verified that the app works. 

### Discussion
1. How would you normally host a website?
1. Why is S3 serverless ?
1. What are eventual and strong consistency? Why are they important? 
