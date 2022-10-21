const taskList = document.querySelector('#taskList');
const taskNameInput = document.querySelector('#newTaskInput');
const newTask = document.querySelector('#newTaskButton');

newTask.addEventListener('click', () => addTask(taskNameInput.value));
taskNameInput.addEventListener('keypress', (event) => event.keyCode == 13 && addTask(taskNameInput.value));

let taskId = 0;

function createTaskItem(componentId) {
    const taskItem = document.createElement('li');
    taskItem.setAttribute('id', componentId);

    return taskItem;
}

function createTaskRemoveButton(componentId) {
    const removeTaskButton = document.createElement('button');

    removeTaskButton.addEventListener('click', () => removeTask(componentId));
    removeTaskButton.innerHTML = 'Remove';
    removeTaskButton.setAttribute('class', 'removeTaskButton');

    return removeTaskButton;
}

function clearInput() {
    taskNameInput.value = '';
    taskNameInput.focus();
}

function removeTask(componentId) {
    const taskItem = document.querySelector(`#${componentId}`);
    console.log(taskItem);
    taskList.removeChild(taskItem);
}

function isValidInput(task) {
    return task && task.trim() !== '';
}

function addTask(task) {
    if(isValidInput(task)) {
        const componentId = `task-${taskId}`;
        const taskItem = createTaskItem(componentId);
        const removeTaskButton = createTaskRemoveButton(componentId);

        taskItem.innerHTML = task + ' ';

        taskList.appendChild(taskItem);
        taskItem.appendChild(removeTaskButton);

        taskId++;
    }
    clearInput();
}
