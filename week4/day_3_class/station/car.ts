import { Station } from "./station"
export class Car {

    carID: string;
    carGasAmount: number;
    capacity: number;

    constructor(carID: string, carGasAmount: number, capacity: number) {
        this.carID = carID;
        this.carGasAmount = carGasAmount;
        this.capacity = capacity;
    }
}
let Shell = new Station('Shell', 1000);
let carID = new Car('Ford', 15, 56);

console.log(`Fuel in station: ${Shell.stationName} before fuelling ${Shell.gasAmount}`);
console.log(`Fuel in car Tank: ${carID.carID} before fuelling ${carID.carGasAmount}`);

Shell.refill(carID);

console.log(`Fuel in station: ${Shell.stationName} after fuelling ${Shell.gasAmount}`);
console.log(`Fuel in car Tank: ${carID.carID} after fuelling ${carID.carGasAmount}`);
