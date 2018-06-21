
// //Factory pattern
// function createPerson(name, age, sex) {
//   let person = {};
//   person.name = name;
//   person.age = age;
//   person.sex = sex;
//   person.sayHi = function () {
//     return console.log("hi");
//   };
//   return person;
// }

// let stani = createPerson("Stanislav", "27", "male");
// console.log(stani instanceof Object);
// console.log(stani instanceof createPerson);
//--------------------------------------------------------------------
// //Constructor pattern
// function Person(name, age, sex){

//   this.name = name;
//   this.age = age;
//   this.sex = sex;
// }

// let velislava = new Person("Velislava", "24",  "female");

// console.log(velislava instanceof Person);
// console.log(velislava instanceof Object);
//--------------------------------------------------------------------
//Prototype pattern
// function Person() { }
// Person.prototype.name = "Stanislav";
// Person.prototype.age = 27;
// Person.prototype.sayName = function () {
//   console.log(this.name);
// };
// let s = new Person();
// let s2 = new Person();
// s2.name = "Stanimir";

// console.log(s.name);
// console.log(s2.name);

// delete s2.name;
// console.log(s2.name);

// let keys = Object.getOwnPropertyNames(Person.prototype);
// console.log(keys);
//--------------------------------------------------------------------
// //Constructor/Prototype pattern 
// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.friends = ['Shelby', 'Court'];
// }
// Person.prototype = {
//   constructor: Person,
//   sayName: function () {
//     console.log((this.name));
//   }
// };
// var person1 = new Person('Nicholas', 29, 'Software Engineer');
// var person2 = new Person('Greg', 27, 'Doctor');
// person1.friends.push('Van');
// console.log((person1.friends); //'Shelby,Court,Van'
// console.log((person2.friends); //'Shelby,Court'
// console.log((person1.friends === person2.friends); //false
// console.log((person1.sayName === person2.sayName); //true
//--------------------------------------------------------------------
//Dynamic Prototype Pattern
// function Person(name, age, job) {
//   //properties
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   //methods
//   if (typeof this.sayName != 'function') {
//     Person.prototype.sayName = function () {
//       console.log((this.name));
//     };
//   }
// }
// var friend = new Person('Nicholas', 29, 'Software Engineer');
// friend.sayName();
//--------------------------------------------------------------------
//Parasitic pattern
// function Person(name, age, job){
//   var o = new Object();
//   o.name = name;
//   o.age = age;
//   o.job = job;
//   o.sayName = function(){
//   console.log((this.name);
//   };
//   return o;
//   }
//   var friend = new Person('Nicholas', 29, 'Software Engineer');
//   friend.sayName(); //'Nicholas'
//--------------------------------------------------------------------
//Durable Constructor Pattern
// function Person(name, age, job) {
//   //create the object to return
//   var o = new Object();
//   //optional: define private variables/functions here
//   //attach methods
//   o.sayName = function () {
//     console.log(name);
//   };
//   //return the object
//   return o;
// }
// var friend = Person('Nicholas', 29, 'Software Engineer');
// friend.sayName(); //'Nicholas'
//--------------------------------------------------------------------
//Correct inheritance ==========
// function SuperType(){
//     this.color = ["red", "green", "blue"];
// }
// function SubType(){
//     SuperType.call(this);
// }
// let instance = new SubType();
// let log = console.log;
// log(instance.color);

// let instanceTwo = new SubType();
// instanceTwo.color.push("black");
// log(instanceTwo.color);

//Incorrect inheritance ==========
// function SuperType(){
//     this.colors = ["red", "blue", "green"];
// }

// function SubType(){
// }

// SubType.prototype = new SuperType();
// let instance = new SubType();
// let log = console.log;
// instance.colors.push("black");
// log(instance.colors);

// let instanceTwo = new SubType();
// log(instanceTwo.colors);
//--------------------------------------------------------------------
//Constructor Stealing ==========
// function SuperType() {
//     this.colors = ['red', 'blue', 'green'];
// }
// function SubType() {
//     //inherit from SuperType
//     SuperType.call(this);
// }
// var instance1 = new SubType();
// instance1.colors.push('black');
// console.log((instance1.colors)); //'red,blue,green,black'
// var instance2 = new SubType();
// console.log((instance2.colors)); //'red,blue,green'


// //Combination inheritance ==========
// let log = console.log;

// function SuperType(name){
//     this.name = name;
//     this.colors = ["red", "blue", "green"];
// }

// SuperType.prototype.sayName = function(name){
//     log(this.name);
// };

// function SubType(name, age){
//     //inherit properties
//     SuperType.call(this, name);
//     this.age = age;
// }

// //inherit method
// SubType.prototype = new SuperType();
// SubType.prototype.sayAge = function(){
//     log(this.age);
// };

// let s = new SuperType("Stanislav");
// let m = new SubType("Misho", 28);
// m.colors.push("bavniq");
// log(m.colors);
// m.sayName();
// m.sayAge();

//Prototypal inheritance ==========
// function object(o){
//     function F(){}
//     F.prototype = o;
//     return new F();
// }

// let person = {
//     name: "Stanislav",
//     friends: ["Jek", "Mireto", "Dkt"]
// };

// let anotherPerson = object(person);
// let log = console.log;
// anotherPerson.friends.push("Radoslav");
// log(anotherPerson.friends);
// log(person.friends);

// let ss = object(person);
// log(ss.friends);

//Parasitic Inheritance ==========
// function createAnother(original) {
//     var clone = Object.create(original); //create a new object by calling a function
//     clone.sayHi = function () { //augment the object in some way
//         console.log("hi");
//     };
//     return clone; //return the object
// }

// let person = {
//     name: "Stanislav",
//     friends: ["Jek", "Mireto", "Dkt"]
// };

// var anotherPerson = createAnother(person);
// anotherPerson.sayHi(); //”hi”
// anotherPerson.friends.push("Bavniq");
// console.log(anotherPerson.friends);
// console.log(person.friends);


//Parasitic Combination Inheritance ==============
// function SuperType(name){
//     this.name = name;
//     this.color = ["red", "green", "blue"];
// }

// let log = console.log;
// SuperType.prototype.sayName = function(){
//     log(this.name);
// };


// function SubType(name, age){
//     SuperType.call(this, name);
//     this.age = age;
// }

// SubType.prototype = new SuperType();
// SubType.prototype.constructor = SubType;
// SubType.prototype.sayAge = function(){
//     log(this.age);
// };

// let subInstance = new SubType();
// log(subInstance.color);

// function Person(first, last, age, gender, interests) {
//     this.name = {
//         first,
//         last
//     };
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
// }

// function Person(first, last, age, gender, interests) {
//     this.name = {
//         first,
//         last
//     };
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
// }

// function Shape(){
//     this.x = 0;
//     this.y = 0;
// }

// Shape.prototype.move = function(x, y){
//     this.x += x;
//     this.y += y;
//     console.log("Shape is moving");
// };

// function Rectangle(){
//     Shape.apply(this, arguments);
// }


// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;


// let myObj = {
//     get a(){
//         return this._a_;
//     },
//     set a(val){
//         this._a_ = val;
//     }
// };

// myObj.a = 35;
// console.log(Object.getOwnPropertyNames(myObj));


//Clouser 
// var revealed = function () {
//     var a = [1, 2, 3];

//     function abc() {
//         return (a[0] * a[1]) + a[2];
//     }
//     return {
//         name: 'revealed',
//         abcfn: abc
//     };
// }();

// console.log(revealed.abcfn());
