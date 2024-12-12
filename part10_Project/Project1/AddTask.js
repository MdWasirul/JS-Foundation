document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const AddTaskBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => renderTask(task));

  AddTaskBtn.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;
    // Task.push(taskText);
    // console.log(Task);
    // todoInput.value = "";
    //------create Object for task have id name etc
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTask();
    renderTask(newTask);
    todoInput.value = ""; //clear input
    console.log(tasks);
  });

  function renderTask(task) {
    // console.log(task);
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>`;

    li.addEventListener("click", (e) => {
      // console.log(e)
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTask();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTask();
    });

    todoList.appendChild(li);
  }
  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  /*
  ----------in console-----------
  (3) ['dfgdfs', 'dfgsdh', 'hdfhhdf']
  */

  //   todoInput.addEventListener("keypress", (e) => {
  //   if (e.key === "Enter")
  //     { addTaskBtn.click();}
  // });
});
