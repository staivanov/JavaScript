function Rectangle(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
}

Rectangle.prototype.calcArea = function () {
    let area = this.width * this.height;
    return area;
};

let rect = new Rectangle(4, 5, "red");
console.log(rect.calcArea());
console.log(rect.color);
console.log(rect.width);
console.log(rect.height);


