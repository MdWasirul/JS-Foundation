function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; //false-> Error fetching data.
      if (success) {
        resolve("Data fetched Successfully");
      } else {
        reject("Error fetching data");
      }
    }, 2000);
  });
} 
// let response=fetchData();
// console.log(response);   //Promise { <pending> }

fetchData()
.then((data)=>{
    console.log((data));
    return `hitesh`;
})
.then((value)=>{
    console.log(value);
})
.catch((error)=>console.error(error));
