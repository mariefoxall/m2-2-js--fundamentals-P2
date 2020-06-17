// Q3.1
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  }
}

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

// Q3.2
// Without changing the function at all,
// Can you figure out how we could use it to determine the greater number between 4 integers?

function maxAll(numA, numB, numC, numD) {
  let max1 = max(numA, numB);
  let max2 = max(numC, numD);

  return max(max1, max2);
}
console.log(maxAll(24, 76, 89, 111));

// Q3.3
// Would this work with more integers?

// Yes, but you'd have to keep redefining and nesting the function and it would get very tedious.
