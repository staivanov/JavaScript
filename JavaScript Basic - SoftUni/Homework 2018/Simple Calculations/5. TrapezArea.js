//Trapez area formula is (b1 + b2) * h / 2
let b1 = 8;
let b2 = 13;
let h = 7;

function trapezArea(basis1, basis2, height) {
    let area = (basis1 + basis2) * (height / 2);
    console.log("Trapez area is: " + area);
}

trapezArea(b1, b2, h);


