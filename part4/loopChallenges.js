/* Use `while` loop 
find the sum of all number from 1 to 5 and stores the result in variable named "sum"
*/
let sum = 0;
let i = 1;
//5+4+3+2+1=15.
//1+2+3+4+5=15.
while (i <= 5) {
  sum = sum + i;
  //sum +=1;
  // console.log(sum);
  i++;
}
console.log(sum); // 15.

//2. print 5 to 1 and store it countdown array.
let countdown = [];
let x = 5;
while (x > 0) {
  countdown.push(x);
  x--;
}
console.log(countdown);  //[ 5, 4, 3, 2, 1 ]

/* 3. write a do while  loop that prompts a user to enter 
their favourite tea type until 
they enter "stop" .Store each type in an array named `teacollection`.  */

// let teacollection=[];
// let tea;
// do{

//    tea=prompt(`Enter your favourite tea (type "stop" to finish)`);

//    if(tea !=="stop"){
//     teacollection.push(tea);
//   }

// }while( tea!=="stop" );
/*4. write a do while loop that adds number from 1 to 3.
stores result into a variable named `total`;
*/
let total = 0;
let j = 1;
do {
  total = total + j;
  j++;
} while (j <= 3);
console.log(total);  //6

/*
5. write a for loop that multiplies each element    in the array `[2 4 6 ]` by 2 and stores the result in the new array named `MultipliedNumbers`.
 */
let MultipliedNumbers = [];
let numbers = [2, 4, 6];

for (let k = 0; k < numbers.length; k++) {
    // let takenumber=numbers[k] *2;
    // MultipliedNumbers.push(takenumber);
    MultipliedNumbers.push(numbers[k]*2);
}
console.log(MultipliedNumbers); //[ 4, 8, 12 ]

/* Write a `for` loop that list all the cities in the array `["Paris","New York","Tokyo","London"]` and stores each city in a new array named `citylist`.
*/
 let citylist=[];
 let cities=["Paris","New York","Tokyo","London"];
 for(let m=0;m<cities.length;m++){
    // citylist.push(cities[m]);
    const citieslist=cities[m];
    citylist.push(citieslist);
 }
 console.log(citylist);//["Paris","New York","Tokyo","London"]