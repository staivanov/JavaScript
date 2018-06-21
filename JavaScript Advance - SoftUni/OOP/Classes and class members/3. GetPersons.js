function Person(firstName, lastName, age, email) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
}

let maria = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
let softUni = new Person('SoftUni');
let stephan = new Person("Stephan", "Nikolov", 25);
let peter = new Person("Peter", "Kolev", 24, "ptr@gmail.com");


function getPersons(){

    let persons = [maria, softUni, stephan, peter];
    return persons;
}


let myClass = getPersons();
console.log(myClass);