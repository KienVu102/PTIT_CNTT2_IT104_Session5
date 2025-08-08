"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class student {
    id;
    age;
    email;
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    print() {
        console.log(`ID: ${this.id}, Age: ${this.age}, Email: ${this.email}`);
    }
}
const student1 = new student(1, 20, "a@gmail.com");
const student2 = new student(2, 21, "b@gmail.com");
student1.print();
student2.print();
//# sourceMappingURL=Ex2.js.map