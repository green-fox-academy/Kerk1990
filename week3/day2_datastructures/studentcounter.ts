'use strict';

const students: any[] = [
    { name: 'Theodor', age: 3, candies: 2 },
    { name: 'Paul', age: 9.5, candies: 2 },
    { name: 'Mark', age: 12, candies: 5 },
    { name: 'Peter', age: 7, candies: 3 },
    { name: 'Olaf', age: 12, candies: 7 },
    { name: 'George', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
function sumCandies(list: any[]): void {
    let candyNum: number = 0;

    list.forEach((Element) => {
        candyNum = candyNum + Element.candies;
    })

    console.log("The number of candies owned by students: " + candyNum);
}

sumCandies(students);

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies


function ageOfStudents(list: any[]): void {
    let ageSum: number = 0;
    for (let i: number = 0; i < list.length; i++) {
        if (list[i].candies < 5) {
            ageSum = ageSum + list[i].age;
        }
    }
    console.log("Sum of the age of people with less than 5 candies: " + ageSum);
}

ageOfStudents(students);