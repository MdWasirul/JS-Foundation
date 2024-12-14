//Pratice Session
const inputTask = document.getElementById("todo-input");
const taskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks = JSON.parse(localStorage.getItem("todoTasks")) || [];
tasks.forEach((task) => renderTask(task));

//add task on button click

taskButton.addEventListener("click", () => {
  const taskText = inputTask.value.trim();
  if (taskText === "") return;

  //    tasks.push(taskText);
  //    inputTask.value="";
  //    console.log(tasks);

  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  tasks.push(newTask);
  saveTask();
  renderTask(newTask);

  inputTask.value = "";
  console.log(tasks);
});

// Add Task on Enter Key Press
inputTask.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    taskButton.click();
  }
});

function renderTask(task) {
  console.log(task);
  const li = document.createElement("li");
  li.setAttribute("data-id", task.id);
  li.innerHTML = `
      <span>${task.text} </span>
      <button>delete</button>`;

  //add Toggle
  li.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") return;
    task.completed = !task.completed;
    li.classList.toggle("completed");
    saveTask();
  });

  // Delete list item
  li.querySelector("button").addEventListener("click", (e) => {
    e.stopPropagation();
    tasks = tasks.filter((t) => t.id !== task.id); //reassign the array
    li.remove();       //removing li from DOM
    saveTask();        //update the local Storage
  });

  todoList.appendChild(li);

}

//LocalStorage setting

function saveTask() {
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
}
