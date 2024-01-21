function palindromes (palindromeWord) {
    palindromeWord = palindromeWord.replace(/[^a-zA-Z0-9]/g, '').trim().toLowerCase()
    // if (!/^[a-zA-Z()]+$/.test(palindromeWord)) palindromeWord = palindromeWord.filter((value) => );
    let palindromeReverse = palindromeWord.split('').reverse().join('');
    return palindromeWord == palindromeReverse ? true:false;
};

// palindromeWord = palindromeWord.slice(0, -1)
// arr.filter((value) => !argumentArray.includes(value))  
// Do not edit below this line
module.exports = palindromes;
