let userRad = 6.2832;

function RadToDeg(rad){
    let deg = Math.round(rad * (180 / Math.PI));
    return deg;
}

let test = RadToDeg(userRad);
console.log(test);