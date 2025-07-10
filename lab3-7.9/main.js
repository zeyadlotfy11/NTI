import { Rectangle, Square, Circle } from './shapes.js';

const rectangle = new Rectangle(5, 3);
const square = new Square(4);
const circle = new Circle(3);

const shapes = [rectangle, square, circle];

shapes.forEach((shape, index) => {
    console.log(`${index + 1}. ${shape.toString()}`);
});

console.log("\n");

shapes.forEach(shape => {
    console.log(`${shape.name}:`);
    console.log(`  Area: ${shape.calculateArea().toFixed(2)}`);
    console.log(`  Perimeter: ${shape.calculatePerimeter().toFixed(2)}`);
    console.log('');
});
