//Circle area = pi * r * r
//Circle perimeter = 2 * pi * r
let r = 3;

function circleArea(radius) {
    let area = radius * radius * Math.PI;
    return area;
}

function circlePerimeter(radius){
    let p = 2 * Math.PI * radius;
    return p;
}

let testArea = circleArea(r);
let testPerimeter = circlePerimeter(r);

console.log(testArea);
console.log(testPerimeter);