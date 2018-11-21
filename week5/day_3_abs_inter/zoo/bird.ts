import { Animal } from './animals'
import { Flyable } from '../flyable/flyable';

export class Bird extends Animal implements Flyable {

  constructor(name: string) {
    super(name);
  }
  getName(): string {
    return this.name
  }
  drink(): void {
    console.log(`the ${this.name} drinks`);
  }
  breed(): string {
    return 'laying eggs.';
  }
  fly() {
    return 'bird flies away';
  }
}