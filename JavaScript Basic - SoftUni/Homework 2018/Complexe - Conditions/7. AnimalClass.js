let animal = "tortoise";

function animalClassPrinter(userAnimal) {
    switch (animal) {
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;
    }
}

animalClassPrinter(animal);
