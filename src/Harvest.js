'use strict';

let HeaderAuth = require('./authentication/HeaderAuth'),
    fs = require('fs'),
    path = require('path'),
    camelCase = require('lodash/camelCase');

const ClientContacts = require("./api/Client_Contacts");
const Clients = require("./api/Clients");
const Company = require("./api/Company");
const EstimateItemCategories = require("./api/Estimate_Item_Categories");
const EstimateLineItem = require("./api/Estimate_Line_Item");
const EstimateMessages = require("./api/Estimate_Messages");
const Estimates = require("./api/Estimates");
const ExpenseCategories = require("./api/Expense_Categories");
const Expenses = require("./api/Expenses");
const InvoiceItemCategories = require("./api/Invoice_Messages");
const InvoiceLineItem = require("./api/Invoice_Line_Item");
const InvoiceMessages = require("./api/Invoice_Messages");
const InvoicePayments = require("./api/Invoice_Payments");
const Invoices = require("./api/Invoices");
const Projects = require("./api/Projects");
const ProjectTaskAssignments = require("./api/Project_Task_Assignments");
const ProjectUserAssignments = require("./api/Project_User_Assignments");
const Roles = require("./api/Roles");
const Tasks = require("./api/Tasks");
const TimeEntries = require("./api/Time_Entries");
const UserProjectAssignments = require("./api/User_Project_Assignments");
const Users = require("./api/Users");

module.exports = class Harvest {
    constructor(config) {
        this.headerAuth = new HeaderAuth(config);

        this.options = {
            url: '',
            method: '',
            headers: this.headerAuth.header(),
            body: '',
            resolveWithFullResponse: false
        };

        this.clientContacts = new ClientContacts(this.options);
        this.clients = new Clients(this.options);
        this.company = new Company(this.options);
        this.estimateItemCategories = new EstimateItemCategories(this.options);
        this.estimateLineItem = new EstimateLineItem(this.options);
        this.estimateMessages = new EstimateMessages(this.options);
        this.estimates = new Estimates(this.options);
        this.expenseCategories = new ExpenseCategories(this.options);
        this.expenses = new Expenses(this.options);
        this.invoiceItem_Categories = new InvoiceItemCategories(this.options);
        this.invoiceLineItem = new InvoiceLineItem(this.options);
        this.invoiceMessages = new InvoiceMessages(this.options);
        this.invoicePayments = new InvoicePayments(this.options);
        this.invoices = new Invoices(this.options);
        this.projects = new Projects(this.options);
        this.projectTaskAssignments = new ProjectUserAssignments(this.options);
        this.projectUserAssignments = new ProjectUserAssignments(this.options);
        this.roles = new Roles(this.options);
        this.tasks = new Tasks(this.options);
        this.timeEntries = new TimeEntries(this.options);
        this.userProjectAssignments = new UserProjectAssignments(this.options);
        this.users = new Users(this.options);
    }
};
