//EXAMPLES 1
// const hold=document.getElementById("changeTextButton");
// console.log(hold);
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    // console.log(this); //return button element
    const para = document.getElementById("myParagraph");
    console.log(para);
    //    console.log(para.textContent);
    para.textContent = "My Paragraph is changed";
  });
//   document
//   .getElementById("changeTextButton")
//   .addEventListener("click",  ()=> {
//     console.log(this); //return Window global object
//   });

//Example -2

// const btn=document.getElementById("highlightFirstCity");
// console.log(btn);
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    //   console.log(citiesList.firstElementChild.classList);
    citiesList.firstElementChild.classList.add("highlight");
  });

//Example -3:

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Expresso";
  coffeeType.style.backgroundColor = "red";
  coffeeType.style.padding = "10px";
  //   coffeeType.style.textAlign="center";
});

//Example-4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoopingList").appendChild(newItem);
  console.log(newItem.innerHTML);
});

//Example-5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let delTask = document.getElementById("taskList");
    delTask.lastElementChild.remove();
  });

//Example -6
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    // alert("chaicode");
    alert("chaicode");
  });

//Example -7
document.getElementById("teaList").addEventListener
("click", function (event) {
  // console.log(event);
  // console.log(event.target.textContent);
  // console.log(event.target);
  if(event.target && event.target.matches(".teaItem")){
    alert("You selected : "+event.target.textContent)
  }
});
