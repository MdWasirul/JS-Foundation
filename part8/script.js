//EXAMPLES 1
// const hold=document.getElementById("changeTextButton");
// console.log(hold);
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    console.log(this); //return button element
  });
//   document
//   .getElementById("changeTextButton")
//   .addEventListener("click",  ()=> {
//     console.log(this); //return Window global object
//   });
