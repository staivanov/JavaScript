//Recangle area = a * b
//Recangle perimeter = 2 * (a + b)

let x1 = 60;
let y1 = 20;
let x2 = 10;
let y2 = 50;

let a = Math.abs(y1 - y2);
let b = Math.abs(x1 - x2);
let area = a * b;
let perimeter = 2 * (a + b);

console.log(area);
console.log(perimeter);