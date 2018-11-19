import { Person } from './person_i'
export class Sponsor extends Person {
  company: string;
  hiredStuds: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google') {
    super(name, age, gender);
    this.company = company;
    this.hiredStuds = 0;
  }
  introduce() {
    console.log(`Hi I'm ${this.name} a ${this.age} years old ${this.gender} who represents ${this.company} and hired ${this.hiredStuds} students so far.`);

  }
  getGoal() {
    console.log('Hire brilliant junior software developers.');

  }
  hire() {
    this.hiredStuds++;
  }
}