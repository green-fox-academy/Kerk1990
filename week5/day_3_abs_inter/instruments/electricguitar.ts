import { StringedInstrument } from './stringed_instruments'
export class ElectricGuitar extends StringedInstrument {

  constructor(numberOfStrings = 6) {
    super('Electric Guitar', numberOfStrings);
  }

  sound(): string {
    return 'Twang';
  }
  play(): void {


    console.log(`${this.name}, a ${this.numberOfStrings} stringed instrument that sounds ${this.sound()}`);
  }
}
let electricGuitar = new ElectricGuitar();
electricGuitar.play();