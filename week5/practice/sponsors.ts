export class Sponsor {

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
    console.log('Hire brilliant junior software developers.')

  }
  hire() {
    this.hiredStuds++;
  }
}