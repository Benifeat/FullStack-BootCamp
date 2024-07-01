const todoInput = document.getElementById('TodoList');
const taskList = document.getElementById('taskList');
const submitButton = document.getElementById('submitButton');
const deleteButton = document.getElementById('deleteButton');

let taskCount = 1;
let tasks = [];

todoInput.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === 'Enter') {
        addTask();
    }
});

submitButton.addEventListener('click', addTask);

function addTask() {
    const todoText = todoInput.value.trim().replace(/\n/g, '<br>');
    if (todoText !== '') {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const taskNumber = document.createElement('span');
        taskNumber.textContent = `${taskCount}. `;
        const taskText = document.createElement('span');
        taskText.innerHTML = todoText;
        listItem.appendChild(checkbox);
        listItem.appendChild(taskNumber);
        listItem.appendChild(taskText);
        taskList.appendChild(listItem);
        todoInput.value = '';
        tasks.push({ number: taskCount, element: listItem });
        taskCount++;

        // Add event listener to the checkbox
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                taskText.style.textDecoration = 'line-through';
            } else {
                taskText.style.textDecoration = 'none';
            }
        });
    }
}

deleteButton.addEventListener('click', function() {
    const checkedTasks = taskList.querySelectorAll('li input[type="checkbox"]:checked');
    const deletedTaskNumbers = [];

    checkedTasks.forEach(function(checkedTask) {
        const listItem = checkedTask.parentNode;
        const taskNumber = parseInt(listItem.querySelector('span').textContent.split('.')[0]);
        const taskIndex = tasks.findIndex(task => task.number === taskNumber);
        if (taskIndex !== -1) {
            deletedTaskNumbers.push(taskNumber);
            tasks.splice(taskIndex, 1);
        }
        taskList.removeChild(listItem);
    });

    deletedTaskNumbers.sort((a, b) => b - a);
    deletedTaskNumbers.forEach(deletedNumber => {
        const higherTaskIndex = tasks.findIndex(task => task.number > deletedNumber);
        if (higherTaskIndex !== -1) {
            tasks.forEach((task, index) => {
                if (index >= higherTaskIndex) {
                    task.number--;
                }
            });
        } else {
            taskCount = deletedNumber;
        }
    });

    updateTaskNumbers();
});

function updateTaskNumbers() {
    tasks.forEach(task => {
        const taskNumber = task.element.querySelector('span');
        taskNumber.textContent = `${task.number}. `;
    });
    
}
