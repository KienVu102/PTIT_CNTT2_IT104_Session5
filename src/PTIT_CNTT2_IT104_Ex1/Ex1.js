"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class vehicle {
    name;
    year;
    company;
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    print() {
        console.log(`Name: ${this.name}, Year: ${this.year}, Company: ${this.company}`);
    }
}
const vehicle1 = new vehicle("Kia Carnival", 2025, "Kia Company");
const vehicle2 = new vehicle("Honda Vision", 2020, "Honda Company");
vehicle1.print();
vehicle2.print();
//# sourceMappingURL=Ex1.js.map