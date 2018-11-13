//Create a Counter class
//which has an integer property
//when creating it should have a default value 0 or we can specify it when creating
//we can add(number) to increase the counter's value by a whole number
//or we can add() without parameters just increasing the counter's value by one
//and we can get() the current value as string
//also we can reset() the value to the initial value

export class Counter {
    count: number;

    constructor(baseNum: number = 0) {
        this.count = Math.round(baseNum = 1);
    }
    add(number: number = 1) {
        this.count += Math.round(number);
    }
    get() {
        return String(this.count);
    }

    reset() {
        this.count = 0;
    }
}
let newNumber = new Counter();

console.log(newNumber);
newNumber.add();
console.log(newNumber);
newNumber.reset();
console.log(newNumber);
