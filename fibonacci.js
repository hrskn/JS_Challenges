/*Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.*/

function sumFibs(num) {
  let currentFib = 1;
  let previousFib = 0;
  let nextFib = 0;
  let sum = 0;

  while(num >= currentFib) {
       if (currentFib % 2 !== 0) {
          sum += currentFib;
       }
      nextFib = currentFib + previousFib;
      previousFib = currentFib;
      currentFib = nextFib;
  }
  return sum;
}

sumFibs(1000);
