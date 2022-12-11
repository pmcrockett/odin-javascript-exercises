const palindromes = function (_str) {
    let noPunct = _str.toLowerCase().replaceAll(/[^a-z]/ig, "");
    for (let i = 0; i < Math.floor(noPunct.length / 2) - 1; i++) {
        if (noPunct[i] != noPunct[noPunct.length - 1 - i]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
