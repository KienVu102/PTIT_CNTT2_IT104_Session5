"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class vehicle {
    name;
    year;
    company;
    id;
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Company: ${this.company}`);
        console.log(`ID: ${this.id}`);
    }
}
const veh = new vehicle("Toyota Camry", 2020, "Toyota", 12345);
veh.printInfo();
//# sourceMappingURL=Ex4.js.map