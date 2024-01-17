const removeFromArray = function (arr) {
    let argumentArray = []
    for (let i = 1; i < arguments.length; i++){
        argumentArray.push(arguments[i])
        };
    return arr.filter((value) => !argumentArray.includes(value))    
};

// Do not edit below this line
module.exports = removeFromArray;
