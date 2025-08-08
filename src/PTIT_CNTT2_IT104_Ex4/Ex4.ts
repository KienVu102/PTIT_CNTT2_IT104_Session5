class vehicle {
    public name: string;
    protected year: number;
    private company: string;
    readonly id : number;

    constructor(name: string, year: number, company: string, id: number) {
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