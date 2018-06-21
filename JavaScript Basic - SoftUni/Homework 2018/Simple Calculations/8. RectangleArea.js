//Recangle area = a * h /2

let sideA = 15;
let height = 35;

function rectangleArea(a, h){
    let area = (a * h) / 2;
    return area.toFixed(2);
}

let test = rectangleArea(sideA, height);
console.log(test);
