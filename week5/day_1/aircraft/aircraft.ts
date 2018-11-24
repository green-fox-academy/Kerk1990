export class Aircraft {
  protected type: string;
  protected maxAmmo: number;
  protected currentAmmo: number;
  protected baseDamage: number;
  protected allDamage: number;

  constructor() {
    this.type = '';
    this.maxAmmo = 0;
    this.currentAmmo = 0;
    this.baseDamage = 0;
    this.allDamage = 0;
  }
  getCurrentAmmo() {
    return this.currentAmmo;
  }
  getAllDamage() {
    return this.allDamage;
  }
  fight() {
    let causedDamage: number = this.baseDamage * this.currentAmmo;
    this.currentAmmo = 0;
    return causedDamage;
  }
  attacked(damageInput: number) {
    return this.allDamage += damageInput;
  }
  getRefillNeed() {
    return this.maxAmmo - this.currentAmmo;
  }
  refill(fillAmount: number) {
    let emptySpace: number = this.getRefillNeed();
    this.currentAmmo += fillAmount;
    return fillAmount - emptySpace;
  }

  getType() {
    return this.type;
  }
  getStatus() {
    return `Type ${this.type}, Ammo: ${this.currentAmmo}, Base damage: ${this.baseDamage}, All damage: ${this.allDamage}`
  }
  isPriority():boolean {
    return (this.type === 'F35')
    }
  }



