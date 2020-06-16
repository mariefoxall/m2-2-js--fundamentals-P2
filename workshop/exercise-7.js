// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q7
// Returns a new list with all the elements of lst that are length greater than 5
function keepLong(lst) {
  // lst is an array of strings
  let newList = lst.filter(function (element) {
    return element.length > 5;
  });

  return newList;
}
// -------------------------------------------------------------------------
console.log(
  "Q5 keepLong()",
  keepLong(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"])
);
