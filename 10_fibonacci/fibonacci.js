const fibonacci = function(_num) {
    if (_num < 1) return "OOPS";
    let returnNum = 1;
    let prevNum = 0;
    for (let i = 1; i < _num; i++) {
        let newPrevNum = returnNum;
        returnNum += prevNum;
        prevNum = newPrevNum;
    }
    return returnNum;
};

// Do not edit below this line
module.exports = fibonacci;
