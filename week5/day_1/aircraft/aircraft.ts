export class Aircraft {
  maxAmmo: number;
  currentAmmo: number;
  baseDamage: number;
  maxDamage: number;
  constructor(maxAmmo: number, currentAmmo: number, baseDamage: number, maxDamage: number) {
    this.maxAmmo = maxAmmo;
    this.currentAmmo = currentAmmo;
    this.baseDamage = baseDamage;
    this.maxDamage = maxDamage;
  }
  fight() {
    let damage = this.baseDamage * this.currentAmmo;
    return damage;
  }
  refill(amountOfAmmo: number) {
    let remainingAmmo = amountOfAmmo - (this.maxAmmo - this.currentAmmo);
    console.log(remainingAmmo);
  }

}
class F16 extends Aircraft {
  constructor(maxAmmo: number, currentAmmo: number, baseDamage: number = 30, maxDamage: number) {
    super(maxAmmo, currentAmmo, baseDamage, maxDamage);
  }
}

class F35 extends Aircraft {
  constructor(maxAmmo: number, currentAmmo: number, baseDamage: number = 50, maxDamage: number) {
    super(maxAmmo, currentAmmo, baseDamage, maxDamage);

  }

}

let newF16 = new Aircraft(12, 0, 30, 360);
let newF35 = new Aircraft(8, 0, 50, 400);

console.log(newF16.refill(300));
console.log(newF35.refill(300));


