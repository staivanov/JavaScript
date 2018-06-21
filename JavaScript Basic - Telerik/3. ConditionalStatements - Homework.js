// #1. Write an if statement that examines two integer variables and exchanges their values if the first one is greater than the second one.
var a = 5;
var b = 2;

if(a > b){
  var temp = a;
  a = b;
  b = temp;
}

console.log(a);
console.log(b);

// #2. Write a JavaScript function convertKWtoHP(value) to convert car’s kW into hp (horse power). 
//The result should be printed on the console, rounded up to the second sign after the decimal point. 
var kW = 140;
var hP = 0.746;

function convertKWtoHP() { 
  var result = kW * hP
  console.log(result);
}

convertKWtoHP();

// #3. Write a JavaScript function roundNumber(value) that rounds floating-point number using Math.round(), Math.floor().
// Write a rounds a few sample values
//Math.round() roun to neares bigger
var a = 5.1
console.log(Math.floor(a));
var b = 4.9
console.log(Math.floor(b));
var c = 6.5
console.log(Math.floor(c));

//Math.floor() round to nearest lower
var d = 5.2
console.log(Math.floor(d));
var e = 5.5
console.log(Math.floor(e));
var f = 5.9
console.log(Math.floor(f));

// #4. Write a JavaScript function calcSupply(value) that accepts the following parameters: your age (years), your maximum age (years), your favorite food name (e.g. "chocolate"),
// estimate amount of your favorite food per day (a number). 
//The function calculates how many of the food you will eat for the rest of your life. Write JS program  that calculates the amount of a few foods that you will eat. 
//The result should be printed on the console.
var age = 24;
var maxAge = 90;
var favoriteFood = 'vegetables';
var estimateFood = 2;

function calcSuply(age, maxAge, favoriteFood, estimateFood){
 
  var ageRange = maxAge - age;
  var dayInYears = 365;
  var estimateFoodOneYear = dayInYears * estimateFood;
  var estimateFoodAgeRange = estimateFoodOneYear * ageRange;
  
  console.log(estimateFoodAgeRange + 'kg of '
              + ' ' + favoriteFood
              + ' ' + 'could be enough until I am'
              + ' ' + maxAge + ' ' + 'years old');
}

calcSuply(age, maxAge, favoriteFood, estimateFood);

// #5. Write a JavaScript function calcCylinderVol(value) that accepts the following parameters: radius and the height of a straight circular cylinder.
// The function calculates the volume of the cylinder. Write JS program that calculates the volume of a few cylinders.
//The result should be printed on the console.
var radius = 5;
var height = 8;

function calcCylinderVol(radius, height){
 var pi = Math.PI;  
 var volumeOfCylinder = radius * radius * height * pi; 
 console.log(volumeOfCylinder);
}

calcCylinderVol(radius, height);

// #6. Write a JavaScript function convertDigitToWord(value) that prints the name of an integer number n (0<n<10) in English using switch statement.
// Write JS program that prints a few digits on the console
var number =  5;

switch(number){
 
  case 0: console.log('zero'); break;
  case 1: console.log('one'); break;
  case 2: console.log('two'); break;
  case 3: console.log('three'); break;
  case 4: console.log('four'); break;
  case 5: console.log('five'); break;
  case 6: console.log('six'); break;
  case 7: console.log('seven'); break;
  case 8: console.log('eight'); break;
  case 9: console.log('nine'); break;
    
  default: console.log('error');
}
//# 7. Write a JavaScript function variablesTypes(value) that accepts the following parameters: name, age, isMale (true or false), array of your favorite foods. 
//The function must return the values of the variables and their types. 
var name = 'Nekoi';
var age = 24;
var isMale = true;
var favoriteFoods = ['Carrots', 'Potatoes', 'Eggs', 'Milk'];

function variablesTypes(name, age, isMale, favoriteFoods){
  console.log(name + ' ' +  typeof(name));
  console.log(age + ' ' +  typeof(age));
  console.log(isMale + ' ' +  typeof(isMale));
  console.log('Array type is: ' + ' ' + typeof(favoriteFoods));
  
  for(i = 0; i < favoriteFoods.length; i+= 1)
  {
  console.log(favoriteFoods[i]);
  }
  
}

variablesTypes(name, age, isMale, favoriteFoods);

// #8. Write a JavaScript function soothsayer(value) that accepts the following parameters (source arrays): array of numbers, array of programming languages, array of cities, array of cars. Each array must consist of five elements.
//The function must return an array result[] that consists of one random item from each source array.
// Write a JS program that prints on the console the following output: 
//“You will work result[0] years on result[1]. You will live in result[2] and drive result[3].”.  
var arrayOfNumbers = [10, 5, 7, 33, 19];
var arrayOfProgrammingLanguages = ['C#', 'JavaScript', 'Java', 'Object C', 'C++'];
var arrayOfCities = ['Los Angelis', 'New York', 'Toronto', 'Tokyo', 'Yokohama' ];
var arrayOfCars = ['Lexus', 'Mercedes', 'Jaguar', 'Acura', 'Porsche'];
var min = 1;
var max = 5;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var rnd = getRandomInt(min, max);
console.log(rnd);


function soothSayer(arrayOfNumbers, arrayOfProgrammingLanguages, arrayOfCities, arrayOfCars  ) {
  
    
}