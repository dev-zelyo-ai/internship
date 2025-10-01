const TodoList = artifacts.require('./TodoList.sol');

contract('TodoList', (accounts) => {
  // Before all tests, deploy the TodoList contract instance
  before(async function () {
    this.todoList = await TodoList.deployed();
  });

  it('deploys successfully', async function () {
    const address = this.todoList.address;
    assert.notEqual(address, 0x0, 'Contract address should not be zero');
    assert.notEqual(address, '', 'Contract address should not be empty string');
    assert.notEqual(address, null, 'Contract address should not be null');
    assert.notEqual(address, undefined, 'Contract address should not be undefined');
  });

  it('lists tasks properly', async function () {
    const taskCount = await this.todoList.taskCount();
    const task = await this.todoList.tasks(taskCount);
    assert.equal(task.id.toNumber(), taskCount.toNumber(), 'Task ID should match task count');
    assert.equal(task.content, 'Check out dappuniversity.com', 'Task content does not match');
    assert.equal(task.completed, false, 'Task should be initially incomplete');
    assert.equal(taskCount.toNumber(), 1, 'Initial task count should be 1');
  });

  it('creates new tasks', async function () {
    const result = await this.todoList.createTask('A new task');
    const taskCount = await this.todoList.taskCount();
    assert.equal(taskCount.toNumber(), 2, 'Task count should increment to 2');
    const event = result.logs[0].args;
    assert.equal(event.id.toNumber(), 2, 'Event task ID should be 2');
    assert.equal(event.content, 'A new task', 'Event task content should match');
    assert.equal(event.completed, false, 'New task should be incomplete');
  });

  it('toggles task completion status', async function () {
    const result = await this.todoList.toggleCompleted(1);
    const task = await this.todoList.tasks(1);
    assert.equal(task.completed, true, 'Task completion status should be true after toggle');
    const event = result.logs[0].args;
    assert.equal(event.id.toNumber(), 1, 'Event task ID should be 1');
    assert.equal(event.completed, true, 'Event task completion status should be true');
  });
});
