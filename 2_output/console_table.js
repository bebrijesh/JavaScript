// console.table()

// What
// - console.table() is a method in JavaScript that displays tabular data in a visually appealing format in the browser's console.
// - It takes an array or object as an argument and displays it as a table

// Why
// - console.table() is useful for debugging and inspecting complex data structures, such as arrays of objects or nested objects.
// - It provides a clear and organized view of the data, making it easier to analyze and understand.

// How
// - console.table() iterates over the elements of the provided array or object and displays them in a table format in the console.
// - It automatically generates column headers based on the properties of the elements.

// Syntax
// console.table(variable,array or Object);

// Example: 1
const variable1 = 1;
const variable2 = 2;
const variable3 = 3;

console.table([variable1, variable2, variable3]);

// Example: 2
const students = [
  { name: "John", age: 20, grade: "A" },
  { name: "Alice", age: 19, grade: "B" },
  { name: "Bob", age: 21, grade: "C" },
];

console.table(students);

// Note
// - console.table() is a helpful debugging tool, but it should not be used for logging or displaying data in a production environment.

// When
// - Use console.table() when you need to inspect complex data structures, such as arrays of objects or nested objects, in the browser's console.
// - Use console.table() to display tabular data in a more readable format for debugging purposes.
// - Use console.table() to analyze and compare data in a structured manner.