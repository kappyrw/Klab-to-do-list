const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <div class="actions">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;
  taskList.appendChild(taskItem);

  taskInput.value = '';

  const editBtn = taskItem.querySelector('.edit-btn');
  const deleteBtn = taskItem.querySelector('.delete-btn');

  editBtn.addEventListener('click', () => editTask(taskItem));
  deleteBtn.addEventListener('click', () => deleteTask(taskItem));
}

function editTask(taskItem) {
  const span = taskItem.querySelector('span');
  const newText = prompt('Edit task:', span.textContent);
  if (newText !== null && newText.trim() !== '') {
    span.textContent = newText;
  }
}

function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}
