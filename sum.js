function sum(array) {
    let total = 0;
    array.forEach(number => {
        total += number;
    });
    return total;
}

module.exports = sum;