class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get diameter() {
        return this._radius * 2;
    }

    set radius(val) {
        this._radius = val;
    }

    get radius() {
        return this._radius;
    }

    get area() {
        let areaCirle = this._radius * 2 * Math.PI;
        return areaCirle;
    }
}

let c = new Circle(2);
c.radius = 2;
console.log(c.radius);
console.log(c.diameter);
console.log(c.area);

