// Filter Method In Array

// NOTE
// - filter method return new array.
// - filter method take callback function as a parameter
// - When you pass a callback function as a parameter in filter method make sure it has return boolean value.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filteredArray = arr.filter((element) => {
  return element % 2 === 0;
});

console.log(filteredArray);
