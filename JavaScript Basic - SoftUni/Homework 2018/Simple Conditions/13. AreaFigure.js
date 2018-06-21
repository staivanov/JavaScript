//rectangle, square, circle, triangle

let myFigure = ["triangle", "4.5", "20"];

function areaOfFigures(userFigure) {

    let rectangle = "rectangle", square = "square", circle = "circle", triangle = "triangle";
    let area = 0;

    if (userFigure[0] == rectangle) {
        let rectangleA = parseFloat(userFigure[1], 10);
        let rectangleB = parseFloat(userFigure[2], 10);
        area = rectangleA * rectangleB;
        return area;
    }
    else if (userFigure[0] == square) {
        let squareSide = parseFloat(userFigure[1], 10);
        area = squareSide * squareSide;
        return area;
    }
    else if (userFigure[0] == circle) {
        let circleRadius = parseFloat(userFigure[1], 10);
        area = circleRadius * circleRadius * Math.PI;
        return area;
    }
    else if (userFigure[0] == triangle) {
        let sideA = parseFloat(userFigure[1], 10);
        let height = parseFloat(userFigure[2], 10);
        area = sideA * height / 2;
        return area;
    }
    else {
        return "Input for figure or numbers are not correct";
    }
}

let test = areaOfFigures(myFigure);
console.log(test);