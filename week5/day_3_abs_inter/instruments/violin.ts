import { StringedInstrument } from './stringed_instruments'
export class Violin extends StringedInstrument {

  constructor(numberOfStrings = 7) {
    super('Violin', numberOfStrings);
  }

  sound(): string {
    return 'Screech';
  }
  play(): void {


    console.log(`${this.name}, a ${this.numberOfStrings} stringed instrument that sounds ${this.sound()}`);
  }
}
let violin = new Violin();
violin.play();