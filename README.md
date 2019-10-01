[![Build Status](https://travis-ci.org/Yaaqoub/node-harvest-v2.svg?branch=master)](https://travis-ci.org/Yaaqoub/node-harvest-v2)
[![Coverage Status](https://coveralls.io/repos/github/Yaaqoub/node-harvest-v2/badge.svg?branch=master)](https://coveralls.io/github/Yaaqoub/node-harvest-v2?branch=master)
[![npm version](https://badge.fury.io/js/harvest-v2.svg)](https://badge.fury.io/js/harvest-v2)

# Node Harvest API V2
Harvest is a web-based time tracking tool. This package is a full client API built using node.js and the V2 of Harvest API.

## Install
    npm install harvest-v2

## Authentication

### Header Authentication:

```js
let Harvest = require('harvest-v2');
let harvest = new Harvest({
        account_ID: config.harvest.account_id,
        access_token: config.harvest.token,
        user_agent: 'Harvest API'
    });
```

### OAuth2 Authentication (Server Side Applications):
    Comming soon!

### OAuth2 Authentication (Client Side Applications):
These are typically applications that run entirely on the browser and issue Cross-Origin requests to Harvest API. For more details [click here](https://help.getharvest.com/api-v2/authentication-api/authentication/authentication/#for-client-side-applications)<br/>
First, before you begin with OAuth2 you need to setup OAuth2 Applications in [Harvest Developer Tools](https://id.getharvest.com/developers).
After setting up the OAuth2 app, you will get a CLIENT ID that you will use to get Access Token.

To get the URL that you will send to user to get his authorization:
```js
let Harvest = require('harvest-v2');
let harvest = new Harvest({
        CLIENT_ID: '...'
    });

console.log(harvest.getUserURL);
```
This accepts other parameters (STATE, REDIRECT_URI):
- STATE (optional): used to pass any value that will get sent back to you when redirecting back to your application.
- REDIRECT_URI (optional): the default Redirect URL can be further customized here if needed, but needs to start with the Redirect URL registered with your Application.
```js
let Harvest = require('harvest-v2');
let harvest = new Harvest({
        CLIENT_ID: '...',       //Required
        STATE: '...',           //Optional
        REDIRECT_URI: '...'     //Optional
    });

console.log(harvest.getUserURL);
```
After a successful authorization, user will be redirected back to the Redirect URL you specified when registering your OAuth2 application, or the redirect_uri you provided.
Several parameters will be attached to URL, you will use these params to authenticate to harvest account:

```js
let Harvest = require('harvest-v2');
let harvest = new Harvest({
        access_token: '...',
        scope: '...',
        user_agent: '...'
    });
```

e.g. If you are running Express.js server you can get params above using:
```js
let access_token = req.query.access_token;
let scope = req.query.scope;
```

## Usage

For example to get the Clients list:

```js
harvest.clients.list().then((clients) => {
    console.log(clients);
}).catch(function (err) {
    console.log(err)
});
```
OR
```js
harvest.clients.list().then(function (clients) {
    console.log(clients);
}).catch(function (err) {
    console.log(err)
});
```
OR
```js
harvest.clients.list(function(error, response, results) {
    if (!error) {
        console.log(results);
    }
});
```

Most of the APIs have `list` and `listBy` methods:

-  list : we use it to list all results.
-  listBy : we use it to list results by a number of params (Example with Clients api):
    ```js
    harvest.clients.listBy({
        per_page:'10',
        page: '2'
    }).then((result) => {
        console.log(result);
    });
    ```
    - Params (Check [Harvest API](https://help.getharvest.com/api-v2/) to know the use of every param):
        ```js
        {"user_id", "client_id", "project_id", "is_billed",
         "is_running", "updated_since", "from", "to",
         "page", "per_page", "is_active"}
        ```

All three methods return the body of the response. To get the full response with two first methods set resolveWithFullResponse to true before using the method:
```js
harvest.options.resolveWithFullResponse = true;

harvest.clients.list().then(...);
```

It is false by default.

##Testing

To run tests you need to have Harvest account, you can create a free 30-day trial account [here](https://www.getharvest.com/signup).
And you also need to change the harvest config file (test/config.auth.js) with your account information.

```js
const config = {
    account_ID: process.env.ACCOUNT_ID || '...',
    access_token: process.env.ACCESS_TOKEN || '...',
    user_agent: process.env.USER_AGENT || '...'
};
```

### Running the tests

    npm test
    
    # or
    
    mocha

    # or

    npm run cover
    
## Methods
If you want to display available params for each harvest api click on it, or click [here](https://help.getharvest.com/api-v2/) to see the whole api docs.

- [Clients](https://help.getharvest.com/api-v2/clients-api/clients/clients/)
    - `list(callback)`
    - `listBy({params}, callback)`
    - `retrieve(clientID, callback)`
    - `create({params}, callback)`
    - `update(clientID, {params}, callback)`
    - `delete(clientID, callback)`
    - `Example: `
        ```js
        harvest.clients.list()
        ```
        

- [Client Contacts](https://help.getharvest.com/api-v2/clients-api/clients/contacts/)
    - `list(callback)`
    - `listBy({params}, callback)`
    - `retrieve(clientContactID, callback)`
    - `create({params}, callback)`
    - `update(clientContactID, {params}, callback)`
    - `delete(clientContactID, callback)`
    - `Example: `
        ```js
        harvest.clientContacts.list()
        ```
    
- [Company](https://help.getharvest.com/api-v2/company-api/company/company/)
    - `retrieve(callback)`
    - `Example: `
        ```js
        harvest.company.retrieve()
        ```
    
- [Invoices](https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/)
    - `list(callback)`
    - `listBy({params}, callback)`
    - `retrieve(invoiceID, callback)`
    - `create({params}, callback)`
    - `update(invoiceID, {params}, callback)`
    - `delete(invoiceID, callback)`
    - `Example: `
        ```js
        harvest.invoices.list()
        ```
        
- [Invoice Messages](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-messages/)
    - `list(invoiceID, callback)`
    - `listBy({params}, callback)`
    - `create(invoiceID, {params}, callback)`
    - `delete(invoiceID, messageID, callback)`
    - `mark(invoiceID, params, callback)`
    - `Example: `
        ```js
        harvest.invoiceMessages.list()
        ```
    
- [Invoice Payments](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-payments/)
    - `list(invoiceID, callback)`
    - `listBy({params}, callback)`
    - `create(invoiceID, {params}, callback)`
    - `delete(invoiceID, paymentID, callback)`
    - `Example: `
        ```js
        harvest.invoicePayments.list()
        ```
    
- [Invoice Item Categories](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/)
    - `list(callback)`
    - `listBy({params}, callback)`
    - `retrieve(invoiceItemCatID, callback)`
    - `create({params}, callback)`
    - `update(invoiceItemCatID, {params}, callback)`
    - `delete(invoiceItemCatID, callback)`
    - `Example: `
        ```js
        harvest.invoiceItemCategories.list()
        ```
    
- [Invoice Line Item](https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/#the-invoice-line-item-object)
    - `create(invoiceID, {params}, callback)`
    - `update(invoiceID, {params}, callback)`
    - `delete(invoiceID, {params}, callback)`
    - `Example: `
        ```js
        harvest.invoiceLineItem.create()
        ```
    
- [Estimates](https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/)
    - `list(callback)`
    - `listBy({params}, callback)`
    - `retrieve(estimateID, callback)`
    - `create({params}, callback)`
    - `update(estimateID, {params}, callback)`
    - `delete(estimateID, callback)`
    - `Example: `
        ```js
        harvest.estimates.list()
        ```
        
- [Estimate Line Item](https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/#the-estimate-line-item-object)
    - `create(estimateID, {params}, callback)`
    - `update(estimateID, {params}, callback)`
    - `delete(estimateID, {params}, callback)`
    - `Example: `
        ```js
        harvest.estimateLineItem.create()
        ```
        
- [Estimate Messages](https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-messages/)
    - `list(estimateID, callback)`
    - `listBy({params}, callback)`
    - `create(estimateID, {params}, callback)`
    - `delete(estimateID, messageID, callback)`
    - `mark(estimateID, {params}, callback)`
    - `Example: `
        ```js
        harvest.estimateMessages.list()
        ```
        
- [Estimate Item Categories](https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-item-categories/)
    - `list(callback)`
    - `listBy({params}, callback)`
    - `retrieve(estimateItemCatID, callback)`
    - `create({params}, callback)`
    - `update(estimateItemCatID, {params}, callback)`
    - `delete(estimateItemCatID, callback)`
    - `Example: `
        ```js
        harvest.estimateItemCategories.list()
        ```

- [Expenses](https://help.getharvest.com/api-v2/expenses-api/expenses/expenses/)
    - `list(callback)`
    - `listBy({params}, callback)`
    - `retrieve(expenseID, callback)`
    - `create({params}, callback)`
    - `update(expenseID, {params}, callback)`
    - `delete(expenseID, callback)`
    - `Example: `
        ```js
        harvest.expenses.list()
        ```
            
- [Expense Categories](https://help.getharvest.com/api-v2/expenses-api/expenses/expense-categories/)
    - `list(callback)`
    - `listBy({params}, callback)`
    - `retrieve(expenseCategoryID, callback)`
    - `create({params}, callback)`
    - `update(expenseCategoryID, {params}, callback)`
    - `delete(expenseCategoryID, callback)`
    - `Example: `
        ```js
        harvest.expenseCategories.list()
        ```
    
- [Tasks](https://help.getharvest.com/api-v2/tasks-api/tasks/tasks/)
    - `list(callback)`
    - `listBy({params}, callback)`
    - `retrieve(taskID, callback)`
    - `create({params}, callback)`
    - `update(taskID, {params}, callback)`
    - `delete(taskID, callback)`
    - `Example: `
        ```js
        harvest.tasks.list()
        ```

- [Time Entries](https://help.getharvest.com/api-v2/timesheets-api/timesheets/time-entries/)
    - `list(callback)`
    - `listBy({params}, callback)`
    - `retrieve(timeEntryID, callback)`
    - `create({params}, callback)`
    - `update(timeEntryID, {params}, callback)`
    - `delete(timeEntryID, callback)`
    - `restart(timeEntryID, callback)`
    - `stop(timeEntryID, callback)`
    - `Example: `
        ```js
        harvest.timeEntries.list()
        ```

- [Projects](https://help.getharvest.com/api-v2/projects-api/projects/projects/)
    - `list(callback)`
    - `listBy({params}, callback)`
    - `retrieve(projectID, callback)`
    - `create({params}, callback)`
    - `update(projectID, {params}, callback)`
    - `delete(projectID, callback)`
    - `Example: `
        ```js
        harvest.projects.list()
        ```
        
- [Project User Assignments](https://help.getharvest.com/api-v2/projects-api/projects/user-assignments/)
    - `list(projectID, callback)`
    - `listBy({params}, callback)`
    - `retrieve(projectID, userAssignmentsID, callback)`
    - `create(projectID, {params}, callback)`
    - `update(projectID, userAssignmentsID, {params}, callback)`
    - `delete(projectID, userAssignmentsID, callback)`
    - `Example: `
        ```js
        harvest.projectUserAssignments.list()
        ```
        
- [Project Task Assignments](https://help.getharvest.com/api-v2/projects-api/projects/task-assignments/)
    - `list(projectID, callback)`
    - `listBy({params}, callback)`
    - `retrieve(projectID, taskAssignmentsID, callback)`
    - `create(projectID, {params}, callback)`
    - `update(projectID, taskAssignmentsID, {params}, callback)`
    - `delete(projectID, taskAssignmentsID, callback)`
    - `Example: `
        ```js
        harvest.projectTaskAssignments.list()
        ```
    
- [Roles](https://help.getharvest.com/api-v2/projects-api/projects/projects/)
    - `list(callback)`
    - `listBy({params}, callback)`
    - `retrieve(roleID, callback)`
    - `create({params}, callback)`
    - `update(roleID, {params}, callback)`
    - `delete(roleID, callback)`
    - `Example: `
        ```js
        harvest.roles.list()
        ```
    
- [Users](https://help.getharvest.com/api-v2/users-api/users/users/)
    - `list(callback)`
    - `listBy({params}, callback)`
    - `retrieve(theUser, callback)`   // for the 'theUser' param, put: me or userID
    - `create({params}, callback)`
    - `update(userID, {params}, callback)`
    - `delete(userID, callback)`
    - `Example: `
        ```js
        harvest.users.list()
        ```
    
- [User Project Assignments](https://help.getharvest.com/api-v2/users-api/users/project-assignments/)
    - `list(theUser, callback)`  // me or userID
    - `listBy({params}, callback)`
    - `Example: `
        ```js
        harvest.userProjectAssignments.list()
        ```

- [User Cost Rates](https://help.getharvest.com/api-v2/users-api/users/cost-rates/)
    - `list(userID, callback)`
    - `retrieve(userID, costRateID, callback)`
    - `create(userID, {params}, callback)`
    - `Example: `
        ```js
        harvest.userCostRates.list()
        ```
        
- [User Billable Rates](https://help.getharvest.com/api-v2/users-api/users/billable-rates/)
    - `list(userID, callback)`
    - `retrieve(userID, billableRateID, callback)`
    - `create(userID, {params}, callback)`
    - `Example: `
        ```js
        harvest.userBillableRates.list()
        ```