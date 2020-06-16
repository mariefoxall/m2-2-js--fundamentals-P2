// Q11
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(grades) {
  let sum = 0;
  let total = grades.forEach(function (element) {
    sum = sum + element;
  });
  let average = sum / grades.length;
  return Math.round(average);
}

console.log(calculateAverage([76, 60, 83, 100, 78]));
