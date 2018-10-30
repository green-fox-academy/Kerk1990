// -  Create a function called `factorio`
//    that returns it's input's factorial
let num = 5;
let factorial = 1;
function factorio(idk:number){
while (num >= 1) {
   factorial = factorial * num;
   num--;
}
return factorial;
}
console.log("The factorial  is " + factorio(5));