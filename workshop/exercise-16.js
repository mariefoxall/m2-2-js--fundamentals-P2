// Q16
// Write a JavaScript program to find ALL the Armstrong
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer
// such that the sum of the cubes of its digits is equal
// to the number itself. For example,
// 371 is an Armstrong number since 3^3 + 7^3 + 1^3 = 371.

let armstrongNumbers = [];

for (a = 0; a <= 9; a++) {
  for (b = 0; b <= 9; b++) {
    for (c = 0; c <= 9; c++) {
      if (a * a * a + b * b * b + c * c * c === a * 100 + b * 10 + c) {
        armstrongNumbers.push(a * 100 + b * 10 + c);
      }
    }
  }
}

console.log(armstrongNumbers);
