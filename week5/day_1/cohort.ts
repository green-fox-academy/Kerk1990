import { Person } from './person_i';
import { Student } from './student_i';
import { Mentor } from './mentor_i';
export class Cohort extends Person {

  name: string;
  students: Student[] = [];
  mentors: Mentor[] = [];

  constructor(name: string) {
    super(name);
  }
  addStudent(student:Student): void {
    this.students.push(student);

  }
  addMentor(mentor:Mentor): void {
    this.mentors.push(mentor);
  }
  info(): void {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)

  }
}