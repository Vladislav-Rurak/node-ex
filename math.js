// module.exports = 5

const sum = (...rest) => rest.reduce((acc, curr) => curr + acc)
const mult = (a, b) => a * b
// module.exports = sum

//named
// module.exports = { sum, mult }

module.exports.sum = sum
module.exports.mult = mult
