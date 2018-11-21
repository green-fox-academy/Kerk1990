export abstract class Vehicle {
  protected name: string;
  protected color: string;
  protected topSpeed: number;
  constructor(name: string) {
    this.name = name;
  }
}
