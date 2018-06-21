let myDog = {
    name: "Atos",
    sleep: function () {
        console.log("ZzzzZzzzZz");
    },
    barking: function () {
        console.log("arrrrrr!!!!!");
    }
};

//My  dog is prototype of other dog.
let anotherDog = Object.create(myDog);
console.log(anotherDog.name);

//Without Object.create(...)
let vehiclePrototype = {

    init: function (carModel) {
        this.model = carModel;
    },
    getModel: function () {
        console.log("The model of this vehincle is " + this.model);
    }
};

function vehincle(model) {
    function F() { }
    F.prototype = vehiclePrototype;

    let f = new F();
    f.init(model);
    return f;
}

let car = vehincle("Ford Focus");
let carTwo = vehincle("VW Passat");
car.getModel();
carTwo.getModel();