export class Person {
  protected name: string;
  protected age: number;
  protected gender: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} a ${this.age} years old ${this.gender}.`)

  }
  getGoal() {
    console.log(`My goal is: Live for the moment.`);
  }
}


export class Student extends Person {
  prevOrg: string;
  skippedDays: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', prevOrg: string = 'The school of life') {
    super(name, age, gender);
    this.prevOrg = prevOrg;
    this.skippedDays = 0;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} a ${this.age} years old ${this.gender} from ${this.prevOrg} who skipped ${this.skippedDays}`);

  }
  getGoal() {
    console.log('My goal is: Be a software developer.');

  }
  skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}

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