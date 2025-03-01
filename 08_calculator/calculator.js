const add = function() {
  let resultAdd = 0
	for (const i in arguments) resultAdd += arguments[i]
  return resultAdd
};

const subtract = function() {
  return arguments[0] - arguments[1]
};

const sum = function(arraySum) {
	let resultSum = 0
	for (const i in arraySum) resultSum += arraySum[i]
  return resultSum
};

const multiply = function(arrayMultiply) {
	let resultMultiply = arrayMultiply[0]
	for (let i = 1; i < arrayMultiply.length ; i++) resultMultiply *= arrayMultiply[i]
  return resultMultiply
};


const power = function() {
  return arguments[0] ** arguments[1]
};

const factorial = function(number) {
  let sumFactorial = number
  if (number == 0) return 1
	for (let i = 1; i < number ; i++) {
    sumFactorial *= (number - i)
  }
  return sumFactorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
