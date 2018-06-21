// #1. Write a script that prints all the numbers from 1 to N
var n = 20;

for(var i = 0; i <= n; i+= 1){
 console.log(i); 
}

// #2. Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time
var n = 90;
var controlNumber = 21;

for(var i = 0; i <= n; i+= 1){
 
  if((i % controlNumber) != 0){
     console.log(i)
     }
}
// #3. Write a script that finds the max and min number from a sequence of numbers
var numbs = [312, 55, 33, 9, 2, 1, 55, 42];
var sortedNumbs = numbs.sort(function(a, b) { return (a - b)});
console.log(sortedNumbs);
var min = sortedNumbs[0];
var max = sortedNumbs[numbs.length-1];
console.log(min);
console.log(max);

// #4. Write a JavaScript function createArray(value) that allocates array of 20 integers and initializes each element by its index multiplied by 5.
// Write JS program that invokes your and prints the output at the console.
var numbs = [20];

function createArray(numbs){

  for(var i = 1; i < 20; i+= 1){
   numbs.push(i * 5); 
  }
}

createArray(numbs);
console.log(numbs);


