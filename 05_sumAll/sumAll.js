const sumAll = function(sumOne, sumTwo) {
    let sumResult = 0 
    if (sumOne < sumTwo){
        for (let i = sumOne; i <= sumTwo; i++){
            sumResult += i
        }
    }
    else {
        for (let i = sumTwo; i <= sumOne; i++){
            sumResult += i
        }
    }

// Do not edit below this line
module.exports = sumAll;
