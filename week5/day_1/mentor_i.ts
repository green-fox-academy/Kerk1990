import { Person } from './person_i'
export class Mentor extends Person {
  level: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate') {
    super(name, age, gender);
    this.level = level;
  }

  introduce() {
    console.log(`Hi I'm ${this.name} a ${this.age} years old ${this.gender} ${this.level} mentor.`);

  }
  getGoal() {
    console.log('Educate brilliant junior software developers.');
  }
}