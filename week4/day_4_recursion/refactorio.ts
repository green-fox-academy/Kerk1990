// Create a recursive function called `refactorio`
// that returns it's input's factorial

function refactorio(num: number): number {
  if (num <= 1) return 1;

  return num * refactorio(num - 1);

}

console.log( refactorio(170));