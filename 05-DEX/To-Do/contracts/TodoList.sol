// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract TodoList {
    uint public taskCount = 0;

    struct Task {
        uint id;
        string content;
        bool completed;
    }

    mapping(uint => Task) public tasks;

    event TaskCreated(uint id, string content, bool completed);
    event TaskCompleted(uint id, bool completed);

    constructor() {
        createTask("Check out Rescape.io");
    }

    function createTask(string memory _content) public {
        require(bytes(_content).length > 0, "Task content cannot be empty");
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
        emit TaskCreated(taskCount, _content, false);
    }

    function toggleCompleted(uint _id) public {
        require(_id > 0 && _id <= taskCount, "Invalid task ID");
        Task storage task = tasks[_id];
        task.completed = !task.completed;
        emit TaskCompleted(_id, task.completed);
    }
}
