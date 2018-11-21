import { Animal } from './animals'

export class Mammal extends Animal {

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
    return 'pushing miniature versions out.';
  }
}