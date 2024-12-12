const todoInput = document.getElementById("todo-input");
const AddTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

const tasks = [];
AddTaskBtn.addEventListener("click", () => {
  const taskText = todoInput.value.trim();
  if (taskText === "") return;
  // Task.push(taskText);
  // console.log(Task);
  // todoInput.value = "";
  //------create Object for task have id name etc
  const newTask={
    id:Date.now(),
    text:taskText,
    completed:false
  }
  tasks.push(newTask);
  saveTask();
  todoInput.value="";  //clear input
  console.log(tasks);
  
});

function renderTask(task){
  console.log(task);
}
function saveTask(){
  localStorage.setItem("tasks",JSON.stringify(tasks));
}

/*
----------in console-----------
(3) ['dfgdfs', 'dfgsdh', 'hdfhhdf']
*/
