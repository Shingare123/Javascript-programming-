console.log("===========Task-1. vehicals details==========");
class Vehicle {
  constructor(type, brand, model, color, fuel) {
    this.type = type;
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.fuel = fuel;
  }
  showDetails() {
    console.log(`Vehicle color is: ${this.color},   Vehicle brand is:${this.brand},  Vehicle model:${this.model},   vehical type:${this.type},  Fuel type is:${this.fuel}`);
  }
}
const vehicle1 = new Vehicle("Car", "Toyota", "Fortuner", "Black", "Diesel");
const vehicle2 = new Vehicle("Bike", "Pulsar", "RS200", "Grey", "Petrol");
const vehicle3 = new Vehicle("Truck", "Tata", "704", "White", "Diesel");
const vehicle4 = new Vehicle("Bus", "Volvo", "9400", "Red", "Diesel");
const vehicle5 = new Vehicle("Scooter", "Honda", "Activa", "Red", "Petrol");
vehicle1.showDetails();
vehicle2.showDetails();
vehicle3.showDetails();
vehicle4.showDetails();
vehicle5.showDetails();


console.log("============Task-2.College Details===============");
class College {
  constructor(name, address, studentCount, establishedYear) {
    this.name = name;
    this.address = address;
    this.studentCount = studentCount;
    this.establishedYear = establishedYear;
  }
  display() {
    console.log(`College Name: ${this.name},  address: ${this.address},  Student Count: ${this.studentCount},  Established Year: ${this.establishedYear}`);
  }
}
const college1 = new College("JSPM college", "Pune", 70, 2005);
const college2 = new College("DKIT", "Pune", 40, 2007);
const college3 = new College("MHM highschool", "Manjari", 75, 1958);
const college4 = new College("BSCOER", "Pune", 65, 1996);
college1.display();
college2.display();
college3.display();
college4.display();