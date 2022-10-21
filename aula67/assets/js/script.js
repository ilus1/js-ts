const taskList = document.querySelector('#taskList');
const taskNameInput = document.querySelector('#newTaskInput');
const newTask = document.querySelector('#newTaskButton');

newTask.addEventListener('click', () => addTask(taskNameInput.value));
taskNameInput.addEventListener('keypress', (event) => event.keyCode == 13 && addTask(taskNameInput.value));

function createTaskRemoveButton() {
    const removeTaskButton = document.createElement('button');

    removeTaskButton.addEventListener('click', () => removeTaskButton.parentElement.remove());
    removeTaskButton.innerHTML = 'Remove';
    removeTaskButton.setAttribute('class', 'removeTaskButton');

    return removeTaskButton;
}

function clearInput() {
    taskNameInput.value = '';
    taskNameInput.focus();
}

function isValidInput(taskName) {
    return taskName && taskName.trim() !== '';
}

function addTask(taskName) {
    if(isValidInput(taskName)) {
        const taskItem = document.createElement('li');
        const removeTaskButton = createTaskRemoveButton();

        taskItem.innerHTML = taskName + ' ';

        taskList.appendChild(taskItem);
        taskItem.appendChild(removeTaskButton);

    }
    clearInput();
}
