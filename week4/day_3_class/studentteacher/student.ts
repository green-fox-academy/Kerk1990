import {Teacher} from "./teacher"
export class Student {



learn():void {}

    askTeacher(teacher: Teacher): void {
        teacher.answer();
    }
}
