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

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
