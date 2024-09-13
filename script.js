const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn');

let tasks = [];

addTaskBtn.addEventListener('click', () => {
    const taskName = prompt('Adicione uma tarefa:');
    if (taskName) {
        const task = {
            name: taskName,
            completed: false
        };
        tasks.push(task);
        renderTaskList();
    }
});

function renderTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''}>
            <span class="task-name">${task.name}</span>
            <div class="task-actions">
                <button class="btn btn-primary" onclick="editTask(${index})">Editar</button>
                <button class="btn btn-danger" onclick="deleteTask(${index})">Excluir</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}

function editTask(index) {
    const taskName = prompt('Editar tarefa:', tasks[index].name);
    if (taskName) {
        tasks[index].name = taskName;
        renderTaskList();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTaskList();
}

renderTaskList();