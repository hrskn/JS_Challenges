/*Your task is to make function, which returns the sum of a sequence of integers.
The sequence is defined by 3 non-negative values: begin, end, step.
If begin value is greater than the end, function should returns 0*/

const sequenceSum = (begin, end, step) => {
  let values = [];
  for(var i=begin; i < end+1; i+=step) {
    values.push(i);
  }
 let sum = values.reduce(function (a, b) {
  return a + b;
}, 0);
  return sum;
}