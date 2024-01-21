function palindromes (palindromeWord) {
    palindromeWord = palindromeWord.toLowerCase()
    if (!/^[a-zA-Z()]+$/.test(palindromeWord)) palindromeWord = palindromeWord.slice(0, -1);
    let palindromeReverse = palindromeWord.split('').reverse().join('');
    return palindromeWord == palindromeReverse ? true:false;
};

// Do not edit below this line
module.exports = palindromes;
