import { Aircraft } from "./aircraft";
import { F16 } from "./f16";
import { F35 } from "./f35";

'use strict';

export class Carrier {
  private aircrafts: Aircraft[] = [];
  private storeOfAmmo: number;
  private healthPoint: number;

  constructor(storeOfAmmo: number, healthPoint: number) {
    this.storeOfAmmo = storeOfAmmo;
    this.healthPoint = healthPoint;
  }
  add(aircraft: Aircraft): void {
    this.aircrafts.push(aircraft);
  }
  fill(): void {
    if (this.storeOfAmmo === 0) {
      throw 'Carrier is out of ammo.';
    } else {
      this.aircrafts.forEach(aircraft => {
        if (aircraft.isPriority() && this.storeOfAmmo > 0) {
          this.storeOfAmmo = aircraft.refill(this.storeOfAmmo);
        }
      });
      this.aircrafts.forEach(aircraft => {
        if (!aircraft.isPriority() && this.storeOfAmmo > 0) {
          this.storeOfAmmo = aircraft.refill(this.storeOfAmmo);
        }
      });
    }
  }
  fight(opponent: Carrier): void {
    this.aircrafts.forEach(aircraft => {
      opponent.healthPoint -= aircraft.fight();
    });
  }
  getStatus(): string {
    let status = `HP ${this.healthPoint}, Aircraft count: ${this.aircrafts.length}, Ammo storage: ${this.storeOfAmmo}, Total damage: ${this.getAllDamage}+
Aircrafts: `;
    this.aircrafts.forEach(aircraft => {
      status += `\r\n${aircraft.getStatus()}`;
    });
    return this.healthPoint > 0 ? status : `It's dead Jim :(`;
  }
  getAllDamage(): number {
    let damage = 0;
    this.aircrafts.forEach(aircraft => {
      damage += aircraft.getAllDamage();
    });
    return damage;
  }
}
let ferihegy = new Carrier(300, 1000);
let ferihegy2 = new Carrier(400, 2500)

for (let i = 0; i < 5; i++) {
  i % 2 === 0 ? ferihegy.add(new F16()) : ferihegy.add(new F35());
  for (let j = 0; j < 5; j++) {
    j % 2 === 0 ? ferihegy2.add(new F16()) : ferihegy2.add(new F35());
  }
  ferihegy.fill();
  ferihegy2.fill();
}

console.log(ferihegy.getStatus());
