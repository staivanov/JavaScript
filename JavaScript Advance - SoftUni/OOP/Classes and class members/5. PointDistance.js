class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

Point.distance = function (pointOne, pointTwo) {
    let leftSide = Math.pow((pointTwo.x - pointOne.x), 2);
    let rightSide = Math.pow(pointTwo.y - pointOne.y, 2);
    let pointDistance =  Math.sqrt(leftSide + rightSide);
    return pointDistance;
};

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));

