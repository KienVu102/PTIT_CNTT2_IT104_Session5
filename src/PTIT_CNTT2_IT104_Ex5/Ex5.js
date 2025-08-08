"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getS() {
        return this.width * this.height;
    }
    getP() {
        return 2 * (this.width + this.height);
    }
    printInfo() {
        console.log(`Width: ${this.width}`);
        console.log(`Height: ${this.height}`);
        console.log(`Area: ${this.getS()}`);
        console.log(`Perimeter: ${this.getP()}`);
    }
}
const rect = new Rectangle(10, 5);
rect.printInfo();
//# sourceMappingURL=Ex5.js.map