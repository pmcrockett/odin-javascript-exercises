const repeatString = function(_str, _repeatCount) {
    if (_repeatCount < 0) return "ERROR";
    let returnStr = "";
    for (let i = 0; i < _repeatCount; i++) {
        returnStr += _str;
    }
    return returnStr;
};

// Do not edit below this line
module.exports = repeatString;
