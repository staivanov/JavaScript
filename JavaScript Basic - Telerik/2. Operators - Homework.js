//#1. Write an expression that checks if given integer is odd or even.
var number = 5;
var evenChecker = (num % 2) == 0 ? 'even' : 'odd';
console.log(evenChecker);

//#2. Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.
var isDividibleOn5And7 = (65 % 35) == 0 ? 'Can be divided by 5 and 7' : 'Cant be divided by 5 and 7';
console.log(isDividibleOn5And7);

//#3. Write an expression that calculates rectangle’s area by given width and height.
var height = 5;
var width = 10;
var rectangleArea = height * width;
console.log(rectangleArea);

//#4. Write an expression that checks for given integer if its third digit (right-to-left) is 7. E. g. 1732  true.
var num = 53732;
isSeven = false;
var trio = num % 1000;
var trioToString = trio.toString();

if(trioToString[0] == '7'){
  isSeven = true;
}
else {
 isSeven; 
}

//#5. Write a boolean expression for finding if the bit 3 (counting from 0) of a given integer is 1 or 0.
var num = 28;
var position = 3;
var mask = 1 << 3;
var maskAndNum = num & mask;
var bit = maskAndNum >> position;
console.log(bit);

//#6. Write an expression that checks if given positive integer number n (n ≤ 100) is prime. E.g. 37 is prime.
var n = 64;
var isPrime = true;
var divider = 2;
var maxDivider = Math.floor(Math.sqrt(n));

while(isPrime && (divider <= maxDivider)){
  if(n % divider === 0){
  isPrime = false; 
  }
  divider++;
}
console.log(isPrime);

//#7. Write an expression that calculates trapezoid's area by given sides a and b and height h.
var a = 12;
var b = 6;
var h = 4;
var trapezeArea = ((a + b)*h) / 2;
console.log(trapezeArea);