class Garden {
  name: string;
  plants: Plant[] = [];

  constructor(name: string) {
    this.name = name
  }

  addFlower(flower: Flower) {
    this.plants.push(flower);
  }
  addTree(tree: Tree) {
    this.plants.push(tree);
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
    return this.waterLevel < 5;
  }
  water(water: number) {
    this.waterLevel += 0.75 * water;
  }
}

class Tree extends Plant {

  constructor(color: string, waterLevel: number) {
    super(color, waterLevel);
  }
  needsWater() {
    return this.waterLevel < 10;
  }
  water(water: number) {
    this.waterLevel += 0.4 * water;
  }
}