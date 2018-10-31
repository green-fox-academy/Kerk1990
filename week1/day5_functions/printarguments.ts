// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments

function printParams(a: any, ...b: any[]) {
  console.log(a + "," + b.join(","));
}
printParams(1, "idk", true, "anything");