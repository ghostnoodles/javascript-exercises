const sumAll = function(sumOne, sumTwo) {
    let sumResult = 0 

    if ((sumOne < sumTwo) && (sumOne.typeof() == Number && sumTwo.typeof() == Number) && (sumOne > 0 && sumTwo > 0)){
        for (let i = sumOne; i <= sumTwo; i++){
            sumResult += i
        }
    }
    else if ((sumTwo < sumOne) && (sumOne.typeof() == Number && sumTwo.typeof() == Number) && (sumOne > 0 && sumTwo > 0)) {
        for (let i = sumTwo; i <= sumOne; i++){
            sumResult += i
        }
    }
    else return 'ERROR'

    return sumResult
};

// Do not edit below this line
module.exports = sumAll;
