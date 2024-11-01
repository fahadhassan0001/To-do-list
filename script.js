document.getElementById('addButton').addEventListener('click', addTodo);
let todos = [];

function addTodo() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();

    if (todoText) {
        todos.push(todoText);
        input.value = '';
        renderTodos();
    }
}

function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span onclick="editTodo(${index})">${todo}</span>
            <button onclick="deleteTodo(${index})">Remove</button>
        `;
        todoList.appendChild(li);
    });
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function editTodo(index) {
    const newTodo = prompt('Edit your task:', todos[index]);
    if (newTodo) {
        todos[index] = newTodo;
        renderTodos();
    }
}
