const sumAll = function(_num1, _num2) {
    if (typeof _num1 != "number" || typeof _num2 != "number"
        || _num1 < 0 || _num2 < 0) {
        return "ERROR";
    }
    startIdx = _num1 < _num2 ? _num1 : _num2;
    endIdx = startIdx === _num1 ? _num2 : _num1;
    let total = 0;
    for (i = startIdx; i <= endIdx; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
