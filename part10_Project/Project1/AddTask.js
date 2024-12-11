const todoInput = document.getElementById("todo-input");
const AddTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

const Task = [];
AddTaskBtn.addEventListener("click", () => {
  const inputTask = todoInput.value.trim();
  if (inputTask === "") return;
  Task.push(inputTask);
  console.log(Task);
  todoInput.value = "";
});


/*
----------in console-----------
(3) ['dfgdfs', 'dfgsdh', 'hdfhhdf']
*/