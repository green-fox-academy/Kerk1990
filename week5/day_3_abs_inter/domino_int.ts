import { Comparable } from './interface_domino'
class Domino implements Comparable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }
  compareTo(other: Domino): number {
    return this.values[0] - other.values[0];
  }
}
export { Domino };
