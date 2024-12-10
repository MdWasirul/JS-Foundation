function* numGenerator(){

yield 1
yield 2
yield 3

}
let gen=numGenerator();
// console.log(gen);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

/*

1
2
3

*/