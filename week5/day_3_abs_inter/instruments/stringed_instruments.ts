import { Instrument } from './instrument'
export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;
  constructor(name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }
  abstract sound()
  abstract play()
}
