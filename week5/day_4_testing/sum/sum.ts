export class Sum {
  sum(numArray: any[]): any {
    let sumOfElements: any = 0;
    numArray.forEach(e => {
      sumOfElements += e;
    });
    return sumOfElements;
  }
}
