function palindromes (palindromeWord) {
    let palindromeReverse = palindromeWord.split('').reverse().join('');
    return palindromeWord == palindromeReverse ? true:false;
};

// Do not edit below this line
module.exports = palindromes;
