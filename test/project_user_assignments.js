const assert = require('assert');
const configAuth = require('./config.auth');
const factory = require('./factory');

const harvest = configAuth.harvest;

const CLIENT_NAME = factory.generateRandomNames('CLIENT_');
const PROJECT_NAME = factory.generateRandomNames('PROJECT_');

let USER_ASSIGNMENT_ID = null;
let USER_ID = null;
let CLIENT_ID = null;
let PROJECT_ID = null;

describe('Project User Assignments API', () => {
  before(async () => {
    const theUser = await harvest.users.retrieve('me');
    USER_ID = theUser.id;

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
  });

  after(async () => {
    await harvest.projects.delete(PROJECT_ID);
    await harvest.clients.delete(CLIENT_ID);
  });

  describe('Create a user assignment', () => {
    it('should implement Create a user assignment method', (done) => {
      assert.equal(typeof harvest.projectUserAssignments.create, 'function');
      done();
    });

    it('should Create a user assignment', async () => {
      assert(PROJECT_ID);
      assert(USER_ID);
      const userAssignment = await harvest.projectUserAssignments.create(PROJECT_ID, {
        user_id: USER_ID,
      });

      USER_ASSIGNMENT_ID = factory.getID(userAssignment);
      assert.equal(typeof USER_ASSIGNMENT_ID, 'number', 'The response body should contain a id');
    });
  });

  describe('List all user assignments', () => {
    it('should implement List all user assignments method', (done) => {
      assert.equal(typeof harvest.projectUserAssignments.list, 'function');
      done();
    });

    it('should implement ListBy user assignments method', (done) => {
      assert.equal(typeof harvest.projectUserAssignments.listBy, 'function');
      done();
    });
  });

  describe('Retrieve a user assignment', () => {
    it('should implement Retrieve a user assignment method', (done) => {
      assert.equal(typeof harvest.projectUserAssignments.retrieve, 'function');
      done();
    });

    it('should Retrieve a user assignment', async () => {
      assert(PROJECT_ID);
      assert(USER_ASSIGNMENT_ID);
      const userAssignment = await harvest.projectUserAssignments.retrieve(PROJECT_ID, USER_ASSIGNMENT_ID);

      assert(userAssignment);
    });
  });

  describe('Update a user assignment', () => {
    it('should implement Update a user assignment method', (done) => {
      assert.equal(typeof harvest.projectUserAssignments.update, 'function');
      done();
    });

    it('should Update a user assignment', async () => {
      assert(PROJECT_ID);
      assert(USER_ASSIGNMENT_ID);
      const userAssignment = await harvest.projectUserAssignments.update(PROJECT_ID, USER_ASSIGNMENT_ID, {
        budget: '120',
      });

      assert(userAssignment);
    });
  });

  describe('Delete a user assignment', () => {
    it('should implement Delete a user assignment method', (done) => {
      assert.equal(typeof harvest.projectUserAssignments.delete, 'function');
      done();
    });

    it('should Delete a user assignment', async () => {
      assert(PROJECT_ID);
      assert(USER_ASSIGNMENT_ID);
      await harvest.projectUserAssignments.delete(PROJECT_ID, USER_ASSIGNMENT_ID);
    });
  });
});
