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
    slaughter(animal:Animal) {

        
    }
}
