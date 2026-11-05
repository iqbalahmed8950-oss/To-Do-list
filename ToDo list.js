let taskInput = document.getElementById('task-input');
let TaskButton = document.getElementById('add-task-btn');
let taskList = document.getElementById('task-list');
let message = document.getElementById('message');
let listCount = document.getElementById('list-count');
function updateTaskCount() {
    let totalTasks = taskList.children.length;
    let checkedTasks = taskList.querySelectorAll('input[type="checkbox"]:checked').length;
    let remainingTasks = totalTasks - checkedTasks;
    listCount.textContent = `Tottal Number of List: ${remainingTasks}`;
}
function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === '') {
        message.textContent = 'Please enter a task.';
        message.style.color = 'red';
        return;
    }
    message.textContent = '';
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.marginRight = '8px';
    let span = document.createElement('span');
    span.textContent = taskText;
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            span.style.textDecoration = 'line-through';
            span.style.color = '#888';
        } else {
            span.style.textDecoration = 'none';
            span.style.color = 'inherit';
        }
        updateTaskCount();
    });
    let deleteButton = document.createElement('none');
    deleteButton.textContent = '🗑️';
    deleteButton.style.display = 'flex';
    // deleteButton.style.float = 'right';
    deleteButton.style.justifyContent = 'right';
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(li);
        updateTaskCount();
    });
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = '';
    updateTaskCount();
}
TaskButton.addEventListener('click', addTask);