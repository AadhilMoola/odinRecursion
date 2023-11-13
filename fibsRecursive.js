function fibsRec(n, array = []) {
    if (n <= 0) {
      return array;
    }
  
    if (array.length < 2) {
      array.push(array.length);
      return fibsRec(n - 1, array);
    }
  
    const nextFibonacci = array[array.length - 1] + array[array.length - 2];
    array.push(nextFibonacci);
    return fibsRec(n - 1, array);
  }
 
  console.log(fibsRec(8));