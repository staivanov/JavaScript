class Figure {
    constructor() {
        if (this.constructor == Figure) {
            throw new TypeError('Abstract class "Figure" cannot be instantiated directly.');
        }
    }
}

class Circle extends Figure {
    constructor(radius) {
        super();
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(val) {
        this._radius = val;
    }

    get area() {
        return this._radius * this._radius * Math.PI;
    }

    toString() {
        return `Circle: - radius: ${this._radius}`;
    }
}

class Rectangle extends Figure {
    constructor(width, height) {
        super();
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    set width(val) {
        this._width = val;
    }

    get height() {
        return this._height;
    }

    set height(val) {
        this._height = val;
    }

    get area() {
        return this._height * this._width;
    }

    toString() {
        return `Rectangle - width: ${this._width}, height: ${this._height}`;
    }
}

let myCircle = new Circle(5);
console.log(myCircle.radius);
console.log(myCircle.area);
console.log(myCircle.toString());

let myRectangle = new Rectangle(3, 4);
console.log(myRectangle.area);
console.log(myRectangle.toString());

//let f = new Figure();

