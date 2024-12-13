//Pratice Session 
const inputTask=document.getElementById("todo-input");
const taskButton=document.getElementById("add-task-btn");
const todoList=document.getElementById("todo-list");

 const tasks= JSON.parse(localStorage.getItem("todoTasks"))||[];
tasks.forEach((task )=> renderTask(task));


taskButton.addEventListener("click",()=>{
   const taskText =inputTask.value.trim();
   if(taskText==="")return;

   
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

  inputTask.value="";
  console.log(tasks);
})


function renderTask(task){
console.log(task);



}

function saveTask(){
    localStorage.setItem("todoTasks",JSON.stringify(tasks));
}