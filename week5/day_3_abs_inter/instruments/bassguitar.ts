import { StringedInstrument } from './stringed_instruments'
export class BassGuitar extends StringedInstrument {

  constructor(numberOfStrings = 4) {
    super('Bass Guitar', numberOfStrings);
  }

  sound(): string {
    return 'Duum-duum-duum';
  }
  play(): void {


    console.log(`${this.name}, a ${this.numberOfStrings} stringed instrument that sounds ${this.sound()}`);
  }
}
let bassGuitar = new BassGuitar();
bassGuitar.play();