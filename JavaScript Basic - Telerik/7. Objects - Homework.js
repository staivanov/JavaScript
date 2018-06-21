/*#1. Write functions for working with shapes in  standard Planar coordinate system
Points are represented by coordinates P(X, Y)
Lines are represented by two points, marking their beginning and ending
L(P1(X1,Y1), P2(X2,Y2))
Calculate the distance between two points
*/
//(x2−x1)^2+(y2−y1)^2 Distance formula
var point = {
  x: 5,
  y: 8
 };

 var pointTwo = {
  x: 1,
  y: 8
 };

var xPointsFormula =  (pointTwo.x - point.x) * (pointTwo.x - point.x);
var yPointsFormula = (pointTwo.y - point.y) * (pointTwo.y - point.y);
var distance = Math.sqrt(xPointsFormula + yPointsFormula);
console.log(distance);

/*#2. Write a function that removes all elements with a given value
var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
arr.remove(1); //arr = [2,4,3,4,111,3,2,'1'];
Attach it to the array type
Read about prototype and how to attach method*/
var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1']
var element = 1;

Array.prototype.remove = function removeElement(element){

 var index = arr.indexOf(element);
 while(index != -1){
   index = arr.indexOf(element);
   this.splice(index, 1);
 }
 return this;
}

console.log(arr.remove(element));

/*#3. Write a function that makes a deep copy of an object
The function should work for both primitive and reference types
*/
var person = {
 firstName: 'Kamen',
 lastName: 'Zdravkov',
 age: 25,
 gender: 'male'
};

function deepCopy(obj){  
  var newObj = {};

  for(var p in person){
    newObj[p] = person[p];
  }

 return newObj;
}

var copyPerson = deepCopy(person);
//
console.log("Fake person family " + copyPerson.lastName);
console.log("Original person family " + person.lastName);
//Checking is this deep copy
copyPerson.lastName = 'Milenov';
console.log("Fake person family name chaned " + copyPerson.lastName);
console.log("Original person family " + person.lastName);

/*#4. Write a function that checks if a given object contains a given property
var obj  = …;
var hasProp = hasProperty(obj, 'length');
*/

var person = {
 firstName: 'Kamen',
 lastName: 'Zdravkov',
 age: 25,
 gender: 'male',
 toString: function(){
    return this.firstName + ' ' + this.lastName + ' ' + this.age + ' '  + this.gender;
 }
}
console.log(person.toString());
  var arrPersonProps = Object.keys(person); 

function hasProperty(person, prop){
  var hasProp = false;
  var arrPersonProps = Object.keys(person); 
  
  for (var i = 0; i < arrPersonProps.length; i++) {
      if(arrPersonProps[i] == prop){
        return hasProp = true;
      }
  }
     return hasProp;
}

console.log(hasProperty(person, 'gender'));
console.log(hasProperty(person, 'noprop'));

/*#5. Write a function that finds the youngest person in a given array of persons and prints his/hers full name
Each person have properties firstname, lastname and age, as shown:
var persons = [
  { firstname : 'Gosho', lastname: 'Petrov', age: 32 }, 
  { firstname : 'Bay', lastname: 'Ivan', age: 81},… ];

*/
var person = [
{firstname: 'Stamat', lastname: 'Gerov', age: 55},
{firstname: 'Kamen', lastname: 'Ivanov', age: 15},
{firstname: 'Zdravko', lastname: 'Jelqzkov', age: 23},
{firstname: 'Iva', lastname: 'Polinova', age: 18}];

function findYoungest(person){
  var fakePerson = {firstname: '', lastname: '', age: 120};

  for (var i = 0; i < person.length; i++) {
    if(person[i].age < fakePerson.age){
      fakePerson.firstname = person[i].firstname;
      fakePerson.lastname = person[i].lastname;
      fakePerson.age = person[i].age;
    }
  };

  return fakePerson;
};

var youngest = findYoungest(person);
console.log(youngest);

/*#6. Write a function that groups an array of persons by age, first or last name.
 The function must return an associative array, with keys - the groups, and values -arrays with persons in this groups
Use function overloading (i.e. just one function)
var persons = {…};
var groupedByFname = group(persons, 'firstname');
var groupedByAge= group(persons, 'age');*/
