// -  Write a function called `sum` that sum all the numbers until the given idkameter
// -  The function should return the result

function sum(idk: number) {
    let add: number = 0;
    for (let j: number = 0; j <= idk; j++) {
        add += j;
    }
    return add;
}

console.log(sum(8));