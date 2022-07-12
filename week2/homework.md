# Homework

## Homework exercises for Week #2

Green Good Groceries sells subscriptions on food boxes, but more plans to expand and improve are underway. Your job is to build their application gradually each week, using serverless. Luckily, Green Good Groceries have existing code, used in most exercises found under the `homework` folder.

Part I:

The first part is related to building the actual frontend website using React as the framework. Again, we start out simple but will improve it during the next couple of weeks.

1. Navigate into the folder `week2/homework` where you will find a predifined web app. Install dependencies with `npm install` and start a local server with `npm run start`. Preview the app in Cloud9.
2. Looking at the `Products.js` file, you will see that the total sum for the cart is not being calculated correctly currently. This is because it is missing its implementation! Inside the file `useProducts.js` implement the function called `calculateSum`, such that it returns the price sum of all selected subscriptions.
3. Create a `notification` component and implement markup for displaying notifications. Feel free to adjust the hook `useNotification` in whatever way you find interesting. Add functionality so that you trigger notifications every time you remove or add a product.


Part II:

For this part, you will need to finish the markup for the [assignment file](homework/assignments.md). You will also need to use the CLI to create/sync/upload your changes to an Amazon S3 bucket.

You will then need to add the answers to `assignments.md` and upload it as part of your PR.

4. Create a bucket and sync the web application code to it (see this week's [lesson plan](lesson-plan.md) if you are stuck)
5. The products are currently hardcoded in the `Products.js` file. Modify the code so that the products are loaded from the associated [products.json](homework/products.json) file. Add a new product to your website through the json file. Re-upload your website to the S3 bucket. 
6. Right now, the website does not support HTTPS. Explain which other AWS service needs to be integrated in order to achieve this (hint: it ends with `_____front`).
7. Write down the main cost factors for S3.
8. How much would it cost to store 51TB on S3? 
9. How much would hosting your website on S3 cost? 
10. Write down a brief use case on when S3 could be used for a data engineering assignment.

### Additional Exercises:

11. What can be done to reduce the pricing for S3 when hosting a large number of files?
12. There are many security features built into S3. Find your favourite feature, documentation for it, and explain briefly why.