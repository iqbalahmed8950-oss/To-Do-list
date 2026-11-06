// let taskInput = document.getElementById('task-input');
// let TaskButton = document.getElementById('add-task-btn');
// let taskList = document.getElementById('task-list');
// let message = document.getElementById('message');
// let listCount = document.getElementById('list-count');
// function updateTaskCount() {
//     let totalTasks = taskList.children.length;
//     let checkedTasks = taskList.querySelectorAll('input[type="checkbox"]:checked').length;
//     let remainingTasks = totalTasks - checkedTasks;
//     listCount.textContent = `Tottal Number of List: ${remainingTasks}`;
// }
// function addTask() {
//     let taskText = taskInput.value.trim();
//     if (taskText === '') {
//         message.textContent = 'Please enter a task.';
//         message.style.color = 'red';
//         return;
//     }
// }
//     message.textContent = '';
//     let li = document.createElement('li');
    // let checkbox = document.createElement('input');
    // checkbox.type = 'checkbox';
//     checkbox.style.marginRight = '8px';
//     li.style.display = 'flex';
//     li.style.justifyContent = 'space-between';
//     let span = document.createElement('span');
//     span.textContent = taskText;
    // checkbox.addEventListener('change', function () {
    //     if (checkbox.checked) {
    //         span.style.textDecoration = 'line-through';
    //         span.style.color = '#888';
    //     } else {
    //         span.style.textDecoration = 'none';
    //         span.style.color = 'inherit';
    //     }
    //     updateTaskCount();
    // });
    // let deleteButton = document.createElement('none');
    // deleteButton.textContent = '🗑️';
    // deleteButton.style.float = 'right';
    // deleteButton.addEventListener('click', function () {
    //     taskList.removeChild(li);
    //     updateTaskCount();
    // });
//     li.appendChild(checkbox);
//     li.appendChild(span);
//     li.appendChild(deleteButton);
//     taskList.appendChild(li);
//     taskInput.value = '';
//     updateTaskCount();
// }
// TaskButton.addEventListener('click', addTask);










// let taskInput = document.getElementById('task-input');
// let TaskButton = document.getElementById('add-task-btn');
// let taskList = document.getElementById('task-list');
// let message = document.getElementById('message');
// let listCount = document.getElementById('list-count');

// // Load tasks from localStorage when the page loads
// function loadTasks() {
//     let savedTasks = JSON.parse(localStorage.getItem('myTodoList')) || [];
//     savedTasks.forEach(taskObj => {
//         createTaskElement(taskObj.text, taskObj.completed);
//     });
//     updateTaskCount();
// }

// // Save tasks to localStorage
// function saveTasks() {
//     let tasks = [];
//     taskList.querySelectorAll('li').forEach(li => {
//         let span = li.querySelector('span');
//         let checkbox = li.querySelector('input[type="checkbox"]');
//         tasks.push({
//             text: span.textContent,
//             completed: checkbox.checked
//         });
//     });
//     localStorage.setItem('myTodoList', JSON.stringify(tasks));
// }

// function updateTaskCount() {
//     let totalTasks = taskList.children.length;
//     listCount.textContent = `Total Number of List: ${totalTasks}`;
// }

// function createTaskElement(taskText, isCompleted = false) {
//     message.textContent = '';
//     let li = document.createElement('li');
//     let checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.checked = isCompleted;
//     checkbox.style.marginRight = '8px';
    
//     li.style.display = 'flex';
//     li.style.justifyContent = 'space-between';
//     li.style.alignItems = 'center';
//     li.style.marginBottom = '8px';

//     let span = document.createElement('span');
//     span.textContent = taskText;

//     if (isCompleted) {
//         span.style.textDecoration = 'line-through';
//         span.style.color = '#888';
//     }

//     checkbox.addEventListener('change', function () {
//         if (checkbox.checked) {
//             span.style.textDecoration = 'line-through';
//             span.style.color = '#888';
//         } else {
//             span.style.textDecoration = 'none';
//             span.style.color = 'inherit';
//         }
//         saveTasks(); // Save state when checked/unchecked
//     });

//     // Fixed: changed 'none' to 'button' so the delete icon works properly
//     let deleteButton = document.createElement('button');
//     deleteButton.textContent = '🗑️';
//     deleteButton.style.background = 'transparent';
//     deleteButton.style.border = 'none';
//     deleteButton.style.cursor = 'pointer';
    
//     deleteButton.addEventListener('click', function () {
//         taskList.removeChild(li);
//         updateTaskCount();
//         saveTasks(); // Save state after deletion
//     });

//     li.appendChild(checkbox);
//     li.appendChild(span);
//     li.appendChild(deleteButton);
//     taskList.appendChild(li);
// }

// function addTask() {
//     let taskText = taskInput.value.trim();
//     if (taskText === '') {
//         message.textContent = 'Please enter a task.';
//         message.style.color = 'red';
//         return;
//     }
    
//     createTaskElement(taskText, false);
//     taskInput.value = '';
//     updateTaskCount();
//     saveTasks(); // Save to localStorage when a new task is added
// }

// TaskButton.addEventListener('click', addTask);

// // Allow pressing "Enter" key to add a task
// taskInput.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         addTask();
//     }
// });

// // Load tasks automatically when script runs
// loadTasks();




let taskInput = document.getElementById('task-input');
let TaskButton = document.getElementById('add-task-btn');
let taskList = document.getElementById('task-list');
let message = document.getElementById('message');
let listCount = document.getElementById('list-count');

// Load tasks from localStorage when the page loads
function loadTasks() {
    let savedTasks = JSON.parse(localStorage.getItem('myTodoList')) || [];
    savedTasks.forEach(taskObj => {
        createTaskElement(taskObj.text, taskObj.completed);
    });
    updateTaskCount();
}

// Save tasks to localStorage
function saveTasks() {
    let tasks = [];
    taskList.querySelectorAll('li').forEach(li => {
        let span = li.querySelector('span');
        let checkbox = li.querySelector('input[type="checkbox"]');
        tasks.push({
            text: span.textContent,
            completed: checkbox.checked
        });
    });
    localStorage.setItem('myTodoList', JSON.stringify(tasks));
}

function updateTaskCount() {
    let totalTasks = taskList.children.length;
    let checkedTasks = taskList.querySelectorAll('input[type="checkbox"]:checked').length;
    let remainingTasks = totalTasks - checkedTasks;
    
    // Updates the counter dynamically based on remaining tasks
    listCount.textContent = `Total Number of List: ${remainingTasks} (Canceled: ${checkedTasks})`;
}

function createTaskElement(taskText, isCompleted = false) {
    message.textContent = '';
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isCompleted;
    checkbox.style.marginRight = '8px';
    
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';
    li.style.marginBottom = '8px';

    let span = document.createElement('span');
    span.textContent = taskText;

    if (isCompleted) {
        span.style.textDecoration = 'line-through';
        span.style.color = '#888';
    }

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            span.style.textDecoration = 'line-through';
            span.style.color = '#888';
        } else {
            span.style.textDecoration = 'none';
            span.style.color = 'inherit';
        }
        updateTaskCount(); // Recalculate count instantly when checked/unchecked
        saveTasks(); // Save state
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑️';
    deleteButton.style.background = 'transparent';
    deleteButton.style.border = 'none';
    deleteButton.style.cursor = 'pointer';
    
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(li);
        updateTaskCount();
        saveTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === '') {
        message.textContent = 'Please enter a task.';
        message.style.color = 'red';
        return;
    }
    
    createTaskElement(taskText, false);
    taskInput.value = '';
    updateTaskCount();
    saveTasks();
}

TaskButton.addEventListener('click', addTask);

// Allow pressing "Enter" key to add a task
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Load tasks automatically when script runs
loadTasks();