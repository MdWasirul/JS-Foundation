/* Use `while` loop 
find the sum of all number from 1 to 5 and stores the result in variable named "sum"
*/
let sum=0;
let i=1;
//5+4+3+2+1=15.
//1+2+3+4+5=15.
while(i<=5){
    sum=sum+i;
    //sum +=1;
    // console.log(sum);
    i++;
}
console.log(sum); // 15.

//2. print 5 to 1 and store it countdown array.
let countdown=[];
let x=5;
while(x>0){
    countdown.push(x);
    x--;
}
console.log(countdown);

