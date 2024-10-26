/*Wrte `for` loop that loop through array `["green taea","black tea","chai","oolong tea"]`
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

/*Wrte `for` loop that loop through array `["Londan","New York","Paris","Berlin"]`
and skips the `"Paris"`
Store the new cities in a new array named `visitedCities`.
*/
let cities=["Londan","New York","Paris","Berlin"];
let visitedCities=[];
for(let i=0; i<cities.length;i++){
    if(cities[i]==="Paris"){
        continue;
    }
    visitedCities.push(cities[i]);
}
console.log(visitedCities);
