function Person(firstName, lastName, age, email) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
}

Person.prototype.toString = function () {
    let summary = this.firstName + " " + this.lastName + " (" + "age: " + this.age + ", email: " + this.email + ")";
    return summary;
};

let person = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
console.log(person.toString());
