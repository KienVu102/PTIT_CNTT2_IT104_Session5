class vehicle {
    name: string;
    year: number;
    company: string;

    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }

    print(){
        console.log(`Name: ${this.name}, Year: ${this.year}, Company: ${this.company}`);
    }


}

const vehicle1 = new vehicle("Kia Carnival", 2025, "Kia Company");
const vehicle2 = new vehicle("Honda Vision", 2020, "Honda Company");

vehicle1.print();
vehicle2.print();