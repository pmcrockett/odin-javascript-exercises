const reverseString = function(_str) {
    let returnStr = "";
    for (let i = _str.length - 1; i >= 0; i--) {
        returnStr += _str[i];
    }
    return returnStr;
};

// Do not edit below this line
module.exports = reverseString;
