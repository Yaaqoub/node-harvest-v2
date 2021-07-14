const assert = require('assert');
const configAuth = require('./config.auth');
const factory = require('./factory');

const harvest = configAuth.harvest;

const CLIENT_NAME = factory.generateRandomNames('CLIENT_');
const PROJECT_NAME = factory.generateRandomNames('PROJECT_');
const TASK_NAME = factory.generateRandomNames('TASK_');

let CLIENT_ID = null;
let PROJECT_ID = null;
let TASK_ID = null;
let PROJECT_TASK_ASSIGNMENTS_ID = null;
let TIME_ENTRY_ID = null;

describe('Time Entries API', () => {
  before(async () => {
    const theClient = await harvest.clients.create({
      name: CLIENT_NAME,
    });
    CLIENT_ID = factory.getID(theClient);

    const theProject = await harvest.projects.create({
      client_id: CLIENT_ID,
      name: PROJECT_NAME,
      is_billable: 'true',
      bill_by: 'Project',
      budget_by: 'project',
    });
    PROJECT_ID = factory.getID(theProject);

    const theTask = await harvest.tasks.create({
      name: TASK_NAME,
    });
    TASK_ID = factory.getID(theTask);
  });

  after(async () => {
    await harvest.tasks.delete(TASK_ID);
    await harvest.projects.delete(PROJECT_ID);
    await harvest.clients.delete(CLIENT_ID);
  });

  describe('Create a time entry', () => {
    it('should implement Create a time entry method', (done) => {
      assert.equal(typeof harvest.timeEntries.create, 'function');
      done();
    });

    it('should Create a time entry', async () => {
      assert(PROJECT_ID);
      assert(TASK_ID);
      /**
             * Create Task Assignment
             */
      const theProjectTaskAssignments =
        await harvest.projectTaskAssignments.create(PROJECT_ID, {
          task_id: TASK_ID,
        });
      PROJECT_TASK_ASSIGNMENTS_ID = factory.getID(theProjectTaskAssignments);
      assert.equal(typeof PROJECT_TASK_ASSIGNMENTS_ID, 'number', 'The response body should contain a id');

      const timeEntry = await harvest.timeEntries.create({
        project_id: PROJECT_ID,
        task_id: TASK_ID,
        spent_date: '2018-06-11',
      });

      TIME_ENTRY_ID = factory.getID(timeEntry);
      assert.equal(typeof TIME_ENTRY_ID, 'number', 'The response body should contain a id');
    });
  });

  describe('List all time entries', () => {
    it('should implement List all time entries method', (done) => {
      assert.equal(typeof harvest.timeEntries.list, 'function');
      done();
    });

    it('should implement ListBy time entries method', (done) => {
      assert.equal(typeof harvest.timeEntries.listBy, 'function');
      done();
    });
  });

  describe('Retrieve a time entry', () => {
    it('should implement Retrieve a time entry method', (done) => {
      assert.equal(typeof harvest.timeEntries.retrieve, 'function');
      done();
    });
  });

  describe('Update a time entry', () => {
    it('should implement Update a time entry method', (done) => {
      assert.equal(typeof harvest.timeEntries.update, 'function');
      done();
    });
  });

  describe('Stop a running time entry', () => {
    it('should implement Stop a running time entry method', (done) => {
      assert.equal(typeof harvest.timeEntries.stop, 'function');
      done();
    });

    it('should Stop a running time entry', async () => {
      assert(TIME_ENTRY_ID);
      const timeEntry = await harvest.timeEntries.stop(TIME_ENTRY_ID);
      assert(timeEntry);
    });
  });

  describe('Restart a stopped time entry', () => {
    it('should implement Restart a stopped time entry method', (done) => {
      assert.equal(typeof harvest.timeEntries.restart, 'function');
      done();
    });

    it('should Restart a stopped time entry', async () => {
      assert(TIME_ENTRY_ID);
      const timeEntry = await harvest.timeEntries.restart(TIME_ENTRY_ID);
      assert(timeEntry);
    });
  });

  describe('Delete a time entry', () => {
    it('should implement Delete a time entry method', (done) => {
      assert.equal(typeof harvest.timeEntries.delete, 'function');
      done();
    });

    it('should Delete a time entry', async () => {
      assert(TIME_ENTRY_ID);
      await harvest.timeEntries
        .delete(TIME_ENTRY_ID);
      await harvest.projectTaskAssignments
        .delete(PROJECT_ID, PROJECT_TASK_ASSIGNMENTS_ID);
    });
  });
});
