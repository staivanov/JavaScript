class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(val) {
        this._name = val;
    }

    get age() {
        return this._age;
    }

    set age(val) {
        this._age = val;
    }
}

function extendClass(classToExtend) {

    classToExtend.prototype.species = "Animal";
    classToExtend.prototype.toSpeciesString = function(){
        return  `I am ${this.species}`;
    };
}

extendClass(Person);
let danny = new Person("Danny", 22);
console.log(danny.toSpeciesString());
console.log(danny.species);
