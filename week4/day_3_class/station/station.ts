import { Car } from "./car"
export class Station {
    stationName: string;
    gasAmount: number;

    constructor(stationName: string, gasAmount: number) {
        this.stationName = stationName;
        this.gasAmount = gasAmount;
    }

    refill(car: Car) {
        this.gasAmount -= (car.capacity - car.carGasAmount);
        car.carGasAmount = car.capacity;
    }
}
