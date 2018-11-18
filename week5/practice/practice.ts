export class Person {
  name: string;
  age: number;
  gender: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  Person

  introduce() {
    console.log(`Hi, I'm ${this.name} a ${this.age} old ${this.gender}.`)

  }
  getGoal() {
    console.log(`My goal is: Live for the moment.`);
  }
}


class Student {
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
    console.log(`Hi, I'm ${this.name} a ${this.age} old ${this.gender} from ${this.prevOrg} who skipped ${this.skippedDays}`);

  }
  getGoal() {
    console.log('My goal is: Be a software developer.');

  }
  skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}

class Mentor {

  name: string;
  age: number;
  gender: string;
  level: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }

  introduce() {
    console.log(`Hi I'm ${this.name} a ${this.age} old ${this.gender} ${this.level} mentor.`);

  }
  getGoal() {
    console.log('Educate brilliant junior software developers.');
  }
}

class Sponsor {

  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStuds: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google') {

    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
    this.hiredStuds = 0;
  }
  introduce() {
    console.log(`Hi I'm ${this.name} a ${this.age} old ${this.gender} who represents ${this.company} and hired ${this.hiredStuds} students so far.`);

  }
  getGoal() {
    console.log('Hire brilliant junior software developers.');

  }
  hire() {
    this.hiredStuds++;
  }
}