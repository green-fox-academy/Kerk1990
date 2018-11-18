import { listenerCount } from "cluster";

class Animal {
    name: string;
    hunger: number = 50;
    thirst: number = 50;

    constructor(name: string) {
        this.name = name;
    }

    eat(): void {
        this.hunger--;
    }

    drink(): void {
        this.thirst--;
    }

    play(): void {
        this.hunger++;
        this.thirst++;
    }
}

class Farm {
    name: string;
    listOfAnimals: Animal[] = [];
    freeSlots: number;

    constructor(name: string, freeSlots: number) {
        this.freeSlots = freeSlots;

    }
    breed(animal: Animal): boolean {
        if (this.freeSlots > 0) {
            this.listOfAnimals.push(animal);
            this.freeSlots--;
            return true;
        } else {
            return false;
        }
    }
    slaughter(): void {
        let leastHunger = this.listOfAnimals[0].hunger;
        let index: number = 0;
        for (let i: number = 0; i < this.listOfAnimals.length; i++) {
            if (this.listOfAnimals[i].hunger < leastHunger) {
                leastHunger = this.listOfAnimals[i].hunger;
                index = i;
            }
        }
        this.listOfAnimals.splice(index, 1);
        this.freeSlots++;
    }
}
const farm = new Farm('Little Big Farm', 10);

farm.breed(new Animal('alien'));
farm.breed(new Animal('T-Rex'));
farm.breed(new Animal('flea'));
farm.breed(new Animal('hedgehog'));
farm.breed(new Animal('zebra'));
farm.breed(new Animal('megalodon'));

farm.listOfAnimals[1].eat();
farm.listOfAnimals[2].drink();
farm.listOfAnimals[3].play();
console.log('List of animals before slaughter');
console.log(farm.listOfAnimals);


farm.slaughter();

console.log('List of animals after slaughter');
console.log(farm.listOfAnimals);
