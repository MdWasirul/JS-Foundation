//EXAMPLES 1
// const hold=document.getElementById("changeTextButton");
// console.log(hold);
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    // console.log(this); //return button element
   const para=document.getElementById("myParagraph");
   console.log(para);
//    console.log(para.textContent);
  para.textContent="My Paragraph is changed"; 
  });
//   document
//   .getElementById("changeTextButton")
//   .addEventListener("click",  ()=> {
//     console.log(this); //return Window global object
//   });

//Example -2

// const btn=document.getElementById("highlightFirstCity");
// console.log(btn);
document.getElementById("highlightFirstCity")
.addEventListener("click",function(){
  let citiesList=   document.getElementById("citiesList");
  console.log(citiesList.firstElementChild.classList);
}) ;
