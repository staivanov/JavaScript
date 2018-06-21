function Cat(name, age, breed) {

    this.name = name;
    this.age = age;
    this.breed = breed;

    this.getInfo = function () {
        return `Name: ${this.name}, Age: ${this.age}, Breed: ${this.breed}`;
    };

}

let myCat = new Cat("Maya", 3, "persian");
let misha = new Cat("Misha", 20, "serbian");


//keys and values can assigning to an object:

//1. Dot Syntax

let myObj = {};

//Set property
myObj.someKey = "Hi";

//Get property
let valMyObj = myObj.someKey;
console.log(valMyObj);

//2. Square bracket

//Set property
myObj["anotherKey"] = "Goodbye";

//Get property 
let anotherValMyObj = myObj["anotherKey"];
console.log(anotherValMyObj);


//3. Object.defineProperty(...,....)

//Set property 
Object.defineProperty(myObj, "lastKey", {

    value: "United we stand",
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(myObj.lastKey);

//4. Object.defineProperties

//Set properties
Object.defineProperties(myObj, {
    "propOne": {
        value: "1",
        writable: true,
        enumerable: true,
        configurable: true
    },
    "propTwo": {
        value: "2",
        writable: true,
        configurable: true
    }
});

