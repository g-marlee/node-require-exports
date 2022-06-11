const {numbers, name, hometown} = require("./data");
const sum = require("./sum");
const cowsay = require("cowsay");
const lodash = require("lodash");

console.log(numbers);
console.log(`${name} is from ${hometown}`);

console.log(sum(numbers));

console.log(cowsay.say({
    text: "Hello world!",
    e: "uu",
    T: " u"
}));

console.log(lodash.shuffle(numbers));