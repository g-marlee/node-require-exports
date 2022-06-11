const {numbers, name, hometown} = require("./data");
const sum = require("./sum");

console.log(numbers);
console.log(`${name} is from ${hometown}`);

console.log(sum(numbers));