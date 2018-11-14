import { Student } from "./student"
export class Teacher {
    
    teach(student: Student) {
        student.learn();
    }
    answer(): void { }
}