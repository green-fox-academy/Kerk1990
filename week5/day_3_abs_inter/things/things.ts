import { Comparable } from './comparable'
class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  public complete() {
    this.completed = true;
  }
  public print() {
    if (this.completed === true) {
      return ('[x] ' + this.name);
    } else {
      return ('[ ] ' + this.name);
    }

  }
}

export { Thing };