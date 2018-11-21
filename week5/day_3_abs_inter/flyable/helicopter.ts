import { Flyable } from './flyable'
import { Vehicle } from './vehicle'
export class Helicopter extends Vehicle implements Flyable {
  constructor(name: string) {
    super(name)
  }
  fly() {
    return 'Heli flies high';
  }
}
