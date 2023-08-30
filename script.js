const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const displayAllBtn = document.getElementById("displayAllBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
clearAllBtn.addEventListener("click", clearAllTasks);
displayAllBtn.addEventListener("click", displayAllTasks);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="editBtn">Edit</button>
      <button class="deleteBtn">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
    attachEditListener(li);
    attachDeleteListener(li);
  }
}

function attachEditListener(li) {
  const editBtn = li.querySelector(".editBtn");
  const taskSpan = li.querySelector("span");
  const originalText = taskSpan.textContent;

  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit task:", originalText);
    if (newText !== null) {
      taskSpan.textContent = newText;
    }
  });
}

function attachDeleteListener(li) {
  const deleteBtn = li.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
}

function clearAllTasks() {
  taskList.innerHTML = "";
}

function displayAllTasks() {
  const tasks = taskList.querySelectorAll("span");
  if (tasks.length > 0) {
    let allTasks = "All Tasks:\n";
    tasks.forEach((task, index) => {
      allTasks += `${index + 1}. ${task.textContent}\n`;
    });
    alert(allTasks);
  } else {
    alert("No tasks to display.");
  }
}
