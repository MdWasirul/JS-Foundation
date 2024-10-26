/*  1.Wrte `for` loop that loop through array `["green taea","black tea","chai","oolong tea"]`
and stops the loop when it finds "chai"
stores all the teas before `"chai"` in a new array named  `selectedTea`.
*/
let teas=["green taea","black tea","chai","oolong tea"];
let selectedTea=[];

for(let i=0; i<teas.length;i++){
if(teas[i]==="chai"){
    break;
}
    selectedTea.push(teas[i]);
}
// console.log(selectedTea);     //[ 'green taea', 'black tea' ]

/* 2.Wrte `for` loop that loop through array `["Londan","New York","Paris","Berlin"]`
and skips the `"Paris"`
Store the new cities in a new array named `visitedCities`.
*/
let cities=["Londan","New York","Paris","Berlin"];
let visitedCities=[];
for(let i=0; i<cities.length;i++){
    if(cities[i]==="Paris" || cities[i]==="paris"){
        continue;
    }
    visitedCities.push(cities[i]);
}
// console.log(visitedCities);

/* 3.use `for-of` loop to iterate through the array `[1,2,3,4,5];`.
and stops when the number 4 is found .
Stores the number before `4` in an array named `SmallNUmbers`.
*/
let numbers=[1,2,3,4,5];
let SmallNUmbers=[];
for (const num of numbers) {
    if(num===4){
        break;
    }
  SmallNUmbers.push(num);
}
// console.log("num: ",SmallNUmbers);   //num:  [ 1, 2, 3 ]



/* 5.use` for-in ` loop to loop  through an object containing city populations .
Stop the loop when the population of  `Berlin` is found and Store all previous cities `
`populations` in  A  NEW OBJECT named `cityPopulations`.
*/
let citiesPopulation={
    "Londan":8900000,
    "New Yark":84000000,
    "Paris":22000000,
    "Berlin":3500000,
};
let cityPopulation={};
console.log(Object.keys(citiesPopulation));  //[ 'Londan', 'New Yark', 'Paris', 'Berlin' ]

