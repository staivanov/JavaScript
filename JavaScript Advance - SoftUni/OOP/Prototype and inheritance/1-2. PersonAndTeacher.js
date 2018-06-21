class Person {
    constructor(name, email) {
        this._name = name;
        this._email = email;
    }

    toString() {
        return `Person: (name: ${this._name}, email: ${this._email})`;
    }

}

// Person.prototype.toString = function () {
//     return `Person: (name: ${this._name}, email: ${this._email})`;
// };

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this._subject = subject;
    }

    toString() {
        return `Teacher: (name: ${this._name}, email: ${this._email}, subject: ${this._subject})`;
    }
}

// Teacher.prototype.toString = function () {
//     return `Teacher: (name: ${this._name}, email: ${this._email}, subject: ${this._subject})`;
// };

class Student extends Person {
    constructor(name, email, course) {
        super(name, email);
        this._course = course;
    }

    toString() {
        return `Student: (name: ${this._name}, email: ${this._email}, course: ${this._course})`;
    }

}

// Student.prototype.toString = function () {
//     return `Student: (name: ${this._name}, email: ${this._email}, course: ${this._course})`;
// };


let t = new Teacher("Daskal", "adda@abv.bg", "History");
console.log(t.toString());
let s = new Student("Nekoi", "231@abv.bg", "CS");
console.log(s.toString());



