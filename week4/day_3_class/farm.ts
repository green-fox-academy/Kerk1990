import { Animal } from "../day_2_class/animal"

export class Farm {
    name: string;
    listOfAnimals: Animal[] = [];
    freeSlots: number;

    constructor(name: string, freeSlots: number) {
        this.freeSlots = freeSlots;

    }
    breed(animal: Animal) {
        if (this.freeSlots > 0) {
            this.listOfAnimals.push(animal);
            this.freeSlots--;
            return true;
        } else {
            return false;
        }
    }
    slaughter(animal: Animal) {
        let leastHunger = this.listOfAnimals[0].hunger;
        let index: number;
        for (let i: number = 0; i < this.listOfAnimals.length; i++) {
            if (this.listOfAnimals[i].hunger < leastHunger) {
                leastHunger = this.listOfAnimals[i].hunger;
                index = i;
            }
        }

    }
}
