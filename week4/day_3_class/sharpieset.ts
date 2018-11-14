import { Sharpie } from "../day_2_class/sharpie"

class SharpieSet {
    sharpieName: string;
    sharpies: Sharpie[] = [];

    constructor(sharpieName: string) {
        this.sharpieName = sharpieName;
    }
    addSharpie(sharpie: Sharpie) {
        this.sharpies.push(sharpie);
    }
    countUsable(): number {
        let count = 0;
        for (let i: number = 0; i < this.sharpies.length; i++) {
            if (this.sharpies[i].inkAmount < 0) {
                count++;
            }
        }
        return count;
    }
    removeTrash(): void {
        for (let i: number = 0; i < this.sharpies.length; i++) {
            if (this.sharpies[i].inkAmount === 0) {
                this.sharpies.splice(i, 1);
            }
        }
    }
    printColor(): void {
        for (let i: number = 0; i < this.sharpies.length; i++) {
            console.log(this.sharpies[i].color);
        }
    }
}
const inkSet = new SharpieSet('InkSet1');
inkSet.addSharpie(new Sharpie('green', 22, 100));
inkSet.addSharpie(new Sharpie('blue', 15, 80));
inkSet.addSharpie(new Sharpie('red', 8, 60));
inkSet.addSharpie(new Sharpie('cyan', 10, 40));
inkSet.addSharpie(new Sharpie('yellow', 5, 20));
inkSet.addSharpie(new Sharpie('orange', 14, 0));

console.log('My current sharpie set:');
inkSet.printColor();

console.log(`Number of usable sharpies: ${inkSet.countUsable()}.`);

inkSet.removeTrash();

console.log('My current sharpie set after trashing the unusable ones:');
inkSet.printColor();
