export class Shape {
    constructor(name) {
        this.name = name;
    }
    calculateArea() {
        console.log("implemented by subclass");
    }

    calculatePerimeter() {
        console.log("implemented by subclass");
    }
    toString() {
        return `${this.name}: Area = ${this.calculateArea().toFixed(2)},
         Perimeter = ${this.calculatePerimeter().toFixed(2)}`;
    }
}

export class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }

    toString() {
        return `${this.name} (${this.width}x${this.height}): 
        Area = ${this.calculateArea().toFixed(2)},
         Perimeter = ${this.calculatePerimeter().toFixed(2)}`;
    }
}

export class Square extends Rectangle {
    constructor(side) {
        super(side, side);
        this.name = "Square";
        this.side = side;
    }

    toString() {
        return `${this.name} (side=${this.side}):
         Area = ${this.calculateArea().toFixed(2)},
          Perimeter = ${this.calculatePerimeter().toFixed(2)}`;
    }
}

export class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }

    toString() {
        return `${this.name} (radius=${this.radius}): 
        Area = ${this.calculateArea().toFixed(2)}, 
        Perimeter = ${this.calculatePerimeter().toFixed(2)}`;
    }
}
