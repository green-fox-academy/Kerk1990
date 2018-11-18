export class Student {
  name: string;
  age: number;
  gender: string;
  prevOrg: string;
  skippedDays: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', prevOrg: string = 'The school of life') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.prevOrg = prevOrg;
    this.skippedDays = 0;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} a ${this.age} years old ${this.gender} from ${this.prevOrg} who skipped ${this.skippedDays}`)

  }
  getGoal() {
    console.log('My goal is: Be a software developer.');

  }
  skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}
