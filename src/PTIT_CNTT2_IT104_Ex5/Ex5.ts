class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getS(): number {
        return this.width * this.height;
    }

    getP(): number {
        return 2 * (this.width + this.height);
    }

    printInfo(): void {
        console.log(`Width: ${this.width}`);
        console.log(`Height: ${this.height}`);
        console.log(`Area: ${this.getS()}`);
        console.log(`Perimeter: ${this.getP()}`);
    }
    
}

const rect = new Rectangle(10, 5);
rect.printInfo();