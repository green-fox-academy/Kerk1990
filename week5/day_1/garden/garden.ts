class Garden {
  name: string;
  plants: Plant[] = [];

  constructor(name: string) {
    this.name = name
  }
}

class Plant {
  color: string;
  waterLevel: number;

  constructor(color: string, waterLevel: number) {
    this.color = color;
    this.waterLevel = waterLevel;
  }

  getColor(): string {
    return this.color;
  }
  getwaterLevel(): number {
    return this.waterLevel;
  }
  needsWater() {

  }
}

class Flower extends Plant {

  constructor(color: string, waterLevel: number) {
    super(color, waterLevel);
  }
  needsWater() {

  }
}

class Tree extends Plant {

  constructor(color: string, waterLevel: number) {
    super(color, waterLevel);
  }
  needsWater() {

  }
}